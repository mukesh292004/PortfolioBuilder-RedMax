import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from "./Footer"
import Nav from '../portfolio/Nav';
import Dashboard from '../portfolio/Dashboard';
import Skills from '../portfolio/skills';
import Projects from '../portfolio/Projects';
import Contact from '../portfolio/Contact';
import About from '../portfolio/About';
import TimelineComponent from '../portfolio/TimeLine';

function Portfolio() {
  const location = useLocation();
  let user=location.state;
  console.log(user);
  if(!user)
   user ={
    name: 'Thanos',
    domain: ['Full Stack Developer','UI/UX Designer','Freelancer'],
    skills:['Python', 'JavaScript', 'React', 'Node.js','JavaScript', 'React', 'Node.js','JavaScript', 'React', 'Node.js','JavaScript', 'React', 'Node.js','JavaScript', 'React', 'Node.js','JavaScript', 'React', 'Node.js','JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Docker'],
    description : "Hey there, I'm John Doe, a full-stack developer with a passion for creating robust web applications. I have extensive experience with modern web technologies such as React, Node.js, and Python. My expertise also includes UI/UX design, where I combine creativity with functionality to deliver exceptional user experiences. I enjoy tackling complex problems and turning ideas into innovative solutions. Let's work together to bring your projects to life!"
   ,
   projects: [
    {
      title:"Project Title",
  description:"Project description goes here...",
  technologies:["React", "Node.js", "Express", "MongoDB"],
  imageUrl:"https://media.istockphoto.com/id/1411195926/photo/project-manager-working-on-laptop-and-updating-tasks-and-milestones-progress-planning-with.jpg?s=612x612&w=0&k=20&c=5A0CEsRbIrgnci0Q7LSxbrUZ1pliXy8C04ffpnjnVIw="

    },
    {
      title:"Project Title",
  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",

  technologies:["React", "Node.js", "Express", "MongoDB"],
  imageUrl:"https://media.istockphoto.com/id/1411195926/photo/project-manager-working-on-laptop-and-updating-tasks-and-milestones-progress-planning-with.jpg?s=612x612&w=0&k=20&c=5A0CEsRbIrgnci0Q7LSxbrUZ1pliXy8C04ffpnjnVIw="

    },
    {
      title:"Project Title",
  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",

  technologies:["React", "Node.js", "Express", "MongoDB"],
  imageUrl:"https://media.istockphoto.com/id/1411195926/photo/project-manager-working-on-laptop-and-updating-tasks-and-milestones-progress-planning-with.jpg?s=612x612&w=0&k=20&c=5A0CEsRbIrgnci0Q7LSxbrUZ1pliXy8C04ffpnjnVIw="

    }
   ],
   timeline: [
    {
      date: "January 2022",
      title: "Creative Director",
      subtitle: "Miami, FL",
      description: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading"
    },
    {
      date: "January 2022",
      title: "Creative Director",
      subtitle: "Miami, FL",
      description: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading"
    },
    {
      date: "January 2022",
      title: "Creative Director",
      subtitle: "Miami, FL",
      description: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading"
    },
    {
      date: "January 2022",
      title: "Creative Director",
      subtitle: "Miami, FL",
      description: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading"
    },
    {
      date: "January 2022",
      title: "Creative Director",
      subtitle: "Miami, FL",
      description: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading"
    },
    {
      date: "January 2022",
      title: "Creative Director",
      subtitle: "Miami, FL",
      description: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading"
    }
  ],
};
  
  return (
    <>
  <section className='flex-col justify-center item-center h-screen items-center'>
    <Nav/>
    <Dashboard user={user}/>
    <About user={user}/>
    <Skills user={user}/>
    <Projects user={user}/>
    <TimelineComponent user={user}/>
    <Contact user={user}/>
    

    <Footer/>
   </section>
   
   </>
  );
}

export default Portfolio;
