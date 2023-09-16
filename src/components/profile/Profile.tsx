import React from 'react';
import ProfilePic from '../../assets/profile-pic.png';
import LinkedInImg from '../../assets/linkedin.png';
import GitHubImg from '../../assets/github.png';
import Resume from '../../assets/Sujith_Dachepally_Resume.pdf';
import './Profile.css';

const Profile: React.FC = () => {
  return (
    <section id='profile'>
      <div className='section__pic-container'>
        <img src={ProfilePic} alt='Sujith Dachepally profile picture' />
      </div>
      <div className='section__text'>
        <p className='section__text__p1'>Hello, I'm</p>
        <h1 className='title'>Sujith Dachepally</h1>
        <p className='section__text__p2'>Full Stack Developer</p>
        <div className='btn-container'>
          <a
            className='btn btn-color-2'
            href={Resume}
            download='Sujith_Dachepally_Resume'
            target='_blank'
          >
            Download CV
          </a>
          <a className='btn btn-color-1' href='#contact'>
            Contact Info
          </a>
        </div>
        <div id='socials-container'>
          <a href='https://www.linkedin.com/in/sujithdach/' target='_blank'>
            <img src={LinkedInImg} alt='My LinkedIn profile' className='icon' />
          </a>
          <a href='https://github.com/248' target='_blank'>
            <img src={GitHubImg} alt='My Github profile' className='icon' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
