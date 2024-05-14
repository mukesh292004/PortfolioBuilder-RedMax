    const express = require('express');
    const bcrypt = require('bcrypt');
    const jwt = require('jsonwebtoken');
    const User = require('../models/user');
    const multer = require('multer');
    const path = require('path');

    const router = express.Router();

    
    const profileImageStorage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'files/'); 
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + '-' + file.originalname); 
        },
    });

   
    const profileImageUpload = multer({
        storage: profileImageStorage,
        limits: { fileSize: 10 * 1024 * 1024 }, 
    }).single('profileImage');

   
    const signup = async (req, res) => {
        profileImageUpload(req, res, async function (err) {
            if (err) {
                return res.status(500).json({ message: err.message });
            }

            const { email, password } = req.body;
            try {
                const user = await User.findOne({ email });
                if (user) {
                    return res.status(400).json({ message: "User already exists" });
                }
                const hashpassword = await bcrypt.hash(password, await bcrypt.genSalt(10));

                const filePath = req.file ? path.join('files/', req.file.filename) : null;

                const newUser = await User.create({ email, password: hashpassword, profileImage: filePath });
                const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
                
                res.status(200).json({ email, token, profileImage: newUser.profileImage });
            } catch (err) {
                res.status(500).json({ message: err.message });
            }
        });
    };

  
    const files = (req, res) => {
        const { filename } = req.params;
        res.sendFile(path.join(__dirname, '../files', filename));
    }

   
    const login = async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ message: "User not found" });
            }
            if (!await bcrypt.compare(password, user.password)) {
                return res.status(400).json({ message: "Incorrect password" });
            }
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            
            res.status(200).json({ email, token, profileImage: user.profileImage });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    };

    const portfolioStorage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'portfolio_files/'); 
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname); 
        }
    });
    
    const portfolioUpload = multer({ storage: portfolioStorage });
    
    const portfolios = async (req, res) => {
        portfolioUpload.fields([
            
            { name: 'resumePdf', maxCount: 1 },
            { name: 'userImage', maxCount: 1 }
        ])(req, res, async function (err) {
            if (err) {
                return res.status(500).json({ message: err.message });
            }
    
            try {
                // Extract data from request body
                const { name, domain, description, skills, linkedIn, github, email, phone } = req.body;
                console.log(name, domain, description, skills, linkedIn, github, email, phone)
    
                // Access uploaded files
                const projectImages = req.files['projectImage']; // Array of project images
                const resumePdf = req.files['resumePdf'][0]; // Resume PDF file
                const userImage = req.files['userImage'][0]; // User image file
    
                // Process the files as needed
    
                // Send response
                res.status(200).json({ message: 'Portfolio data and files uploaded successfully' });
            } catch (err) {
                res.status(500).json({ message: err.message });
            }
        });
    };
    
    
    module.exports = { login, signup, files, portfolios };
