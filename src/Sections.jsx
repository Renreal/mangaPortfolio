import React, { useState } from 'react';
import './Sections.css';
import profile from './assets/me.png';
import profile2 from './assets/after.jpg';
import vercelIcon from './assets/icons/vercel.svg';
import databaseIcon from './assets/icons/server.png'; 
import fbaseIcon from './assets/icons/fbase.svg';
import HtmlIcon from './assets/icons/html.svg'
import cssIcon from './assets/icons/css-icon.png'
import bootstrapIcon from './assets/icons/bootstrap.svg'
import reactIcon from './assets/icons/rjs.svg';
import GitIcon from './assets/icons/git.svg';
import githubIcon from './assets/icons/github.svg';
import chartJsIcon from './assets/icons/chartjs.svg';
import jsIcon from './assets/icons/javascipt.svg';
import vsCodeIcon from './assets/icons/vs-code.svg';

function Sections({ aboutRef, contactRef, skillsRef, projectsRef }) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedNav, setSelectedNav] = useState('viewTools'); // State to track selected nav item
  
  /* skills visibility */
  const [displaySkills, setDisplaySkills] = useState(true);
  
  const toggleDisplay = (selectedTab) => {
    if ((selectedTab === 'viewTools' && !displaySkills) || (selectedTab === 'viewCertificate' && displaySkills)) {
      setDisplaySkills(prevDisplaySkills => !prevDisplaySkills);
    }
    setSelectedNav(selectedTab); // Set selected nav item
  };

  return (
    <div className='wrapper'>
      {/* About */}
      <section ref={aboutRef} className="about-section">
        <div className="imageContainer"onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <img src={isHovered ? profile2 : profile} alt="anime pic" /> 
        </div>
        <div className="aboutTextOuterContainer">
          <div className="aboutInnerContainer">
            <p>I’m renreal, a 4th year computer engineering student and an aspiring software developer from Cagayan de Oro </p> 
            <span><a href="https://docs.google.com/document/d/1Y5hcJegGeTqoHsYL8zIERJ4PnwMaFfDC1Dg9mwgIgH4/edit?usp=sharing">Click to View resume</a></span>
          </div>
        </div>
      </section>
      {/* About (end) */}   
     
      {/* Skills */}
      <section ref={skillsRef} className="skills-section">
        <div className='skillsNav'>
          <div onClick={() => toggleDisplay('viewTools')} id='viewTools' className={selectedNav === 'viewTools' ? 'selected' : ''}>
            tools and technologies
          </div>
          <div onClick={() => toggleDisplay('viewCertificate')} id='viewCertificate' className={selectedNav === 'viewCertificate' ? 'selected' : ''}>
            certificates
          </div>
        </div>
        
        {/* Conditional rendering based on displaySkills state */}
        {displaySkills ? (
          <div className='skillsContainer'>
            <div className="skillsIcon">
                <img src={reactIcon} alt="" />
                <img src={HtmlIcon} alt="" />
                <img src={cssIcon} alt="css" />
                <img src={bootstrapIcon} alt="bootsrap" />
                <img src={jsIcon} alt="" />
                <img src={databaseIcon} alt="" />
                <img src={fbaseIcon} alt="" />
                <img src={vercelIcon} alt="" />
                <img src={githubIcon} alt="" />
                <img src={GitIcon} alt="" />
                <img src={vsCodeIcon} alt="" />
                <img src={chartJsIcon} alt="" />
               </div>  
          </div>
        ) : (
          <div className="certificatesContainer">
            certificates
          </div>
        )}
      </section>

      <section ref={projectsRef} className="projects-section">
        <h2>Projects</h2>
        <p>This is the projects section.</p>
      </section>

      <section ref={contactRef} className="contact-section">
        <h2>Contact</h2>
        <p>This is the contact section.</p>
      </section>
    </div>
  );
}

export default Sections;
