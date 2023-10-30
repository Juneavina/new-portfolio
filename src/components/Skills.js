import React from 'react'
import './Skills.css'
import jsImg from '../assets/images/java-script.png';
import htmlimg2 from '../assets/images/html-5 (2).png';
import cssImg2 from '../assets/images/css-3 (1).png';
import reactImg from '../assets/images/atom.png';
import expressJS from '../assets/images/stamp.png';
import mongodbImg from '../assets/images/mongodb.png';
import gitImg from '../assets/images/git.png';
import nodeJsImg from '../assets/images/nodejs.png';
import bootstrapImg from '../assets/images/bootstrap.png';

const Skills = () => {
  return (

    <>
          
    <div id='skills'>
    <h1 className='skills-heading'>SKILLS</h1>
      <div className='skills-div'>
 
      <div className='skills-row'>
        <div className='skill-item'>
          <img className='skills-img' src={htmlimg2} alt="html-icon" />
          <p className='p-row'>HTML5</p>
        </div>
        <div className='skill-item'>
          <img className='skills-img' src={cssImg2} alt="css-icon" />
          <p className='p-row'>CSS3</p>
        </div>
        <div className='skill-item'>
          <img className='skills-img' src={jsImg} alt="js-icon" />
          <p className='p-row'>JAVASCRIPT</p>
        </div>
      </div>

      <div className='skills-row'>
        <div className='skill-item'>
          <img className='skills-img' src={reactImg} alt="react-icon" />
          <p className='p-row'>REACT/REACT NATIVE</p>
        </div>
        <div className='skill-item'>
          <img className='skills-img' src={expressJS} alt="express-icon" />
          <p className='p-row'>EXPRESS.JS</p>
        </div>
        <div className='skill-item'>
          <img className='skills-img' src={mongodbImg} alt="mongodb-icon" />
          <p className='p-row'>MONGODB</p>
        </div>
      </div>

      <div className='skills-row'>
        <div className='skill-item'>
          <img className='skills-img' src={gitImg} alt="git-icon" />
          <p className='p-row'>GIT</p>
        </div>
        <div className='skill-item'>
          <img className='skills-img' src={nodeJsImg} alt="node-icon" />
          <p className='p-row'>NODE.JS</p>
        </div>
        <div className='skill-item'>
          <img className='skills-img' src={bootstrapImg} alt="bootstrap-icon" />
          <p className='p-row'>BOOTSTRAP</p>
        </div>
      </div>
      </div>
      </div>
    </>

  )
}

export default Skills