import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserForm() {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    domain: [],
    description: '',
    skills: [],
    projects: [{ title: '', description: '', projectImage: null }], 
    resumePdf: '', 
    linkedIn: '',
    github: '',
    email: '',
    phone: '',
    userImage: null,
    timeline: [{ date: '', title: '', subtitle: '', description: '' }],
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0]
      });
    } else if (name === 'domain' || name === 'skills') {
      setFormData({
        ...formData,
        [name]: value.split(',').map(skill => skill.trim())
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleTimelineChange = (index, e) => {
    
    const { name, value } = e.target;
    const timeline = [...formData.timeline];
    timeline[index][name] = value;
    setFormData({
      ...formData,
      timeline
    });
  };

  const handleAddTimeline = () => {
    setFormData({
      ...formData,
      timeline: [...formData.timeline, { date: '', title: '', subtitle: '', description: '' }]
    });
  };

  const handleRemoveTimeline = (index) => {
    const timeline = [...formData.timeline];
    timeline.splice(index, 1);
    setFormData({
      ...formData,
      timeline
    });
  };2

  const handleProjectChange = (index, e) => {
    const { name, value, files } = e.target;
    const projects = [...formData.projects];
    const project = projects[index];
  
    if (name === 'projectImage' && files.length > 0) {
      project[name] = files[0];
    } else {
      project[name] = value;
    }
  
    setFormData({
      ...formData,
      projects: [...projects],
    });
  };

  const handleAddProject = () => {
    setFormData({
      ...formData,
      projects: [...formData.projects, { title: '', description: '', projectImage: null }]
    });
  };
  const handleSkillsChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value.split(',').map(skill => skill.trim())
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      if (key === 'projects') {
        formData[key].forEach((project, index) => {
          Object.entries(project).forEach(([projectKey, projectValue]) => {
            if (projectKey === 'projectImage' && projectValue instanceof File) {
              formDataToSend.append(`projects[${index}][${projectKey}]`, projectValue);
            } else {
              formDataToSend.append(`projects[${index}][${projectKey}]`, projectValue);
            }
          });
        });
      } else {
        formDataToSend.append(key, formData[key]);
      }
    }

    try {
      const response = await fetch('http://localhost:3000/auth/portfolios', {
        method: 'POST',
        body: formDataToSend, 
      });
      const data = await response.json();
      if (data) {
        console.log("hi",data);
        // Redirect or show success message
      } else {
        console.error('Failed to submit form data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex items-center justify-center p-5">
      <form className="w-full max-w-lg" onSubmit={handleSubmit} encType="multipart/form-data" >
      <div className="space-y-12">

        

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
              Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  onChange={handleChange}
                  value={formData.name}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            
            <div className="sm:col-span-3">
              <label htmlFor="userImage" className="block text-sm font-medium leading-6 text-gray-900">
             Profile Image
              </label>
              <div className="mt-2">
                <input
                  type="file"
                  name="userImage"
                  id="userImage"
                  required
                  
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="domain" className="block text-sm font-medium leading-6 text-gray-900">
              Domain (Separated by commas)
              </label>
              <div className="mt-2">
                <input
                  id="domain"
                  name="domain"
                  type="text"
                  required
                  value={formData.domain.join(' , ')}
                  onChange={handleSkillsChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

<div className="col-span-full">
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
              About Me
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  required
                  value={formData.description}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
            </div>

            <div className="col-span-full">
              <label htmlFor="skills" className="block text-sm font-medium leading-6 text-gray-900">
              All Skills (Separated by commas)
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="skills"
                  id="skills"
                  required
                  value={formData.skills.join(' , ')}
              onChange={handleSkillsChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

               <div className="sm:col-span-4">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
              Projects
              </label>
              {formData.projects.map((project, index) => (
  <div key={index} className="mt-2">
    <input
      type="text"
      name="title"
      placeholder="Project Title"
      value={project.title}
      onChange={(e) => handleProjectChange(index, e)}
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
    <textarea
      name="description"
      rows={3}
      placeholder="Project description ....."
      value={project.description}
      onChange={(e) => handleProjectChange(index, e)}
      className="block w-full rounded-md border-0 mt-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
    <input
  type="file"
  name="projectImage" 
  
  onChange={(e) => handleProjectChange(index, e)}
  className="block w-full rounded-md border-0 mt-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
/>


    <button
      type="button"
      onClick={() => handleRemoveProject(index)}
      className="rounded-md bg-indigo-600 px-3 py-2 mt-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Remove Project
    </button>
  </div>
))}
        <button
          type="button"
         
          onClick={handleAddProject}
          className="rounded-md bg-indigo-600 px-3 mb-5  mt-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
           Add Project
        </button>
              </div>
            </div>
            <div className="sm:col-span-4">
  <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
    Timeline
  </label>
  {formData.timeline.map((timeline, index) => (
    <div key={index} className="mt-2">
      <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
              
              </label>
      <input
        type="text"
        name={`date-${index}`}
        placeholder="Date Ex. March 2020"
        value={timeline.date}
        onChange={(e) => handleTimelineChange(index, e)}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <input
        type="text"
        name={`title-${index}`}
        placeholder="Joined ADB college of engineering"
        value={timeline.title}
        onChange={(e) => handleTimelineChange(index, e)}
        className="block w-full rounded-md border-0 mt-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <input
        type="text"
        name={`subtitle-${index}`}
        placeholder="Student of Computer Science Engineering"
        value={timeline.subtitle}
        onChange={(e) => handleTimelineChange(index, e)}
        className="block w-full rounded-md border-0 mt-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <textarea
        name={`description-${index}`}
        rows={3}
        placeholder="About the timeline ...."
        value={timeline.description}
        onChange={(e) => handleTimelineChange(index, e)}
        className="block w-full rounded-md border-0 mt-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <button
        type="button"
        onClick={() => handleRemoveTimeline(index)}
        className="rounded-md bg-indigo-600 px-3 py-2 mt-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Remove Timeline
      </button>
    </div>
  ))}
  <button
    type="button"
    onClick={handleAddTimeline}
    className="rounded-md bg-indigo-600 px-3 mb-5 mt-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  >
    Add Timeline
  </button>
</div>



            <div className="sm:col-span-3">
              <label htmlFor="resumePdf" className="block text-sm font-medium leading-6 text-gray-900">
              Resume PDF
              </label>
              <div className="mt-2 ">
                <input
                  type="file"
                  id="resumePdf"
                  name="resumePdf"
                  
                  onChange={handleChange}
                  required
                  className="block w-full px-6 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          
        
          
  
         
            <div className="sm:col-span-2 ">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email  ID
              </label>
              <div className="mt-2">
                <input
                 type="email"
                 id="email"
                 name="email"
                 value={formData.email}
                 onChange={handleChange}
                 required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
             
            </div>
            </div>
            <div className="sm:col-span-2 ">
              <label htmlFor="github" className="block text-sm font-medium leading-6 text-gray-900">
              GitHub Link
              </label>
              <div className="mt-2">
                <input
                   type="url"
                   id="github"
                   name="github"
                   value={formData.github}
                   onChange={handleChange}
                 required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
             
            </div>
            </div>
            <div className="sm:col-span-2 ">
              <label htmlFor="linkedIn" className="block text-sm font-medium leading-6 text-gray-900">
              LinkedIn Link
              </label>
              <div className="mt-2">
                <input
                 type="url"
                 id="linkedIn"
                 name="linkedIn"
                 value={formData.linkedIn}
                 onChange={handleChange}
                 required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
             
            </div>
            </div>
            <div className="sm:col-span-2 ">
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
              Mobile No
              </label>
              <div className="mt-2">
                <input
                 type="string"
                 id="phone"
                 name="phone"
                 value={formData.phone}
                 onChange={handleChange}
                 required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
             
            </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
     
      </div>
          </div>
        </div>

      
    </form>
    </div>
  )
}


export default UserForm;
