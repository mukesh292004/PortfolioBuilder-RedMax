
import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';

function UserForm() {
    const history = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    domain: [],
    description: '',
    skills: [],
    projects: [],
    resumePdf: '',
    linkedIn: '',
    github: '',
    email: '',
    contactMessage: '',
    userImage: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSkillsChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value.split(',').map(skill => skill.trim())
    });
  };

  const handleProjectChange = (index, e) => {
    const projects = [...formData.projects];
    projects[index][e.target.name] = e.target.value;
    setFormData({
      ...formData,
      projects
    });
  };

  const handleAddProject = () => {
    setFormData({
      ...formData,
      projects: [...formData.projects, { title: '', description: '' }]
    });
  };

  const handleRemoveProject = (index) => {
    const projects = [...formData.projects];
    projects.splice(index, 1);
    setFormData({
      ...formData,
      projects
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  

    history('/portfolio', { state: formData })
    
    
  };

  return (
    <div className="bg-black text-white mb-24 ">
      <div className=" mx-auto py-10 bg-black">
      
        <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
        
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full bg-gray-800 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="userImage" className="block text-sm font-bold mb-2">User Image</label>
            <input
              type="file"
              id="userImage"
              name="userImage"
              accept="image/*"
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full bg-gray-800 text-white"
              required
            />
          </div>

          
          <div className="mb-4">
            <label htmlFor="domain" className="block text-sm font-bold mb-2">Domain (Separated by commas)</label>
            <input
              type="text"
              id="domain"
              name="domain"
              value={formData.domain.join(', ')}
              onChange={handleSkillsChange}
              className="border border-gray-300 rounded-md p-2 w-full bg-gray-800 text-white"
              required
            />
          </div>

         
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-bold mb-2">About Me</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full bg-gray-800 text-white"
              required
            ></textarea>
          </div>

         
          <div className="mb-4">
            <label htmlFor="skills" className="block text-sm font-bold mb-2">All Skills (Separated by commas)</label>
            <input
              type="text"
              id="skills"
              name="skills"
              value={formData.skills.join(', ')}
              onChange={handleSkillsChange}
              className="border border-gray-300 rounded-md p-2 w-full bg-gray-800 text-white"
              required
            />
          </div>

          
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Projects</label>
            {formData.projects.map((project, index) => (
              <div key={index} className="mb-2">
                <input
                  type="text"
                  name="title"
                  placeholder="Project Title"
                  value={project.title}
                  onChange={(e) => handleProjectChange(index, e)}
                  className="border border-gray-300 rounded-md p-2 w-full bg-gray-800 text-white"
                  required
                />
                <textarea
                  name="description"
                  placeholder="Project Description"
                  value={project.description}
                  onChange={(e) => handleProjectChange(index, e)}
                  className="border border-gray-300 rounded-md p-2 w-full mt-2 bg-gray-800 text-white"
                  required
                ></textarea>
                <button
                  type="button"
                  onClick={() => handleRemoveProject(index)}
                  className="text-red-500 mt-2 block underline"
                >
                  Remove Project
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddProject}
              className="bg-blue-500 text-white px-3 py-1 rounded-md"
            >
              Add Project
            </button>
          </div>

          
          <div className="mb-4">
            <label htmlFor="resumePdf" className="block text-sm font-bold mb-2">Resume PDF</label>
            <input
              type="file"
              id="resumePdf"
              name="resumePdf"
              accept=".pdf"
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full bg-gray-800 text-white"
              required
            />
          </div>

          
          <div className="mb-4">
            <label htmlFor="linkedIn" className="block text-sm font-bold mb-2">LinkedIn Link</label>
            <input
              type="text"
              id="linkedIn"
              name="linkedIn"
              value={formData.linkedIn}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full bg-gray-800 text-white"
              required
            />
          </div>

         
          <div className="mb-4">
            <label htmlFor="github" className="block text-sm font-bold mb-2">GitHub Link</label>
            <input
              type="text"
              id="github"
              name="github"
              value={formData.github}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full bg-gray-800 text-white"
              required
            />
          </div>

          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full bg-gray-800 text-white"
              required
            />
          </div>

          
          <div className="mb-4">
            <label htmlFor="contactMessage" className="block text-sm font-bold mb-2">Contact Message</label>
            <textarea
              id="contactMessage"
              name="contactMessage"
              value={formData.contactMessage}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full bg-gray-800 text-white"
              required
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserForm;
