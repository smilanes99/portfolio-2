import React, {useEffect} from 'react';
import './AboutMe.scss'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutMeTitle from "../../Assets/Images/AboutMeTitle.png"

const AboutMe = () => {

  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);

  return (
    <div>
        <img className="about-me-title" src={AboutMeTitle} alt='ABOUT ME'/>
        <div  data-aos="zoom-in" className='bio'>
        </div>
      </div>
   
  );
};

export default AboutMe;