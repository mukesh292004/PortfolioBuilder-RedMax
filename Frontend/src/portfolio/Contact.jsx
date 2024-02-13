import React from 'react';
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = ({ user }) => {
  return (
    <div id='contact' className="h-screen flex justify-center items-center bg-no-repeat bg-cover bg-[url(https://img.freepik.com/free-vector/background-luxury-minimalist-gradient-style-design_698780-700.jpg?w=1380&t=st=1706847501~exp=1706848101~hmac=8665b46b7299cae3f9160b6abb06d8ea7c1e1604a5fc6d2ef0ee38f94972e710)]">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-red-600 mb-10">Contact Me</h1>
        <div className="flex flex-col justify-center items-center">
          <a href={user.linkedin} target="_blank" rel="noopener noreferrer" className="text-4xl mx-4  text-blue-400  ">
            <FaLinkedin />
          </a>
          <a href={`https://wa.me/${user.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-4xl text-green-400 mx-4">
            <FaWhatsapp />
          </a>
          <a href={`mailto:${user.email}`} className="text-4xl text-white  mx-4">
            <FaEnvelope />
          </a>
          <a href={`tel:${user.phone}`} className="text-4xl text-green-400 -700 mx-4">
            <FaPhone />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
