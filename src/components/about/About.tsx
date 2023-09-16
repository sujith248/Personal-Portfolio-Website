import React from 'react';
import EducationIcon from '../../assets/education.png';
import ExperienceIcon from '../../assets/experience.png';
import AboutImg from '../../assets/about-pic.png';
import ArrowIcon from '../../assets/arrow.png';
import './About.css';

const About: React.FC = () => {
  return (
    <section id='about' className='about'>
      <p className='section__text__p1'>Get To Know More</p>
      <h1 className='title'>About Me</h1>
      <div className='section-container'>
        <div className='section__pic-container'>
          <img src={AboutImg} alt='Profile picture' className='about-pic' />
        </div>
        <div className='about-details-container'>
          <div className='about-containers'>
            <div className='details-container'>
              <img
                src={ExperienceIcon}
                alt='Experience icon'
                className='icon'
              />
              <h3>Experience</h3>
              <p>
                1.5+ years <br />
                Full Stack Developer (Web and Mobile)
              </p>
            </div>
            <div className='details-container'>
              <img src={EducationIcon} alt='Education icon' className='icon' />
              <h3>Education</h3>
              <p>
                Bachelors in Software Engineering, UTS (2023)
                <br />
                UTS Dean's List of Engineering 2023
                <br />
                UTS International Pathway Scholarship
              </p>
            </div>
          </div>
          <div className='text-container'>
            <p>
              I'm a determined Software Engineer with an unquenchable desire to
              create efficient and maintainable solutions. My goal, driven by
              curiosity and a passion for problem solving, is to design creative
              software solutions that not only meet but exceed user
              expectations. I thrive in diverse teams, like challenges, and am
              dedicated to lifelong learning. My career path has been one of
              constant development and influence in the ever-changing world of
              technology. Let's collaborate to explore the limitless potential
              of software engineering.
            </p>
          </div>
        </div>
      </div>
      <a href='#experience'>
        <img src={ArrowIcon} alt='Arrow icon' className='icon arrow' />
      </a>
    </section>
  );
};

export default About;
