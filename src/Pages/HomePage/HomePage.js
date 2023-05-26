import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './HomePage.scss'; 
import image1 from '../../Assets/Images/portfolioTitle.png';
import image2 from '../../Assets/Images/myPic.png';

const HomePage = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);


  return (
    <div className="image-container">
      <img data-aos="fade-right" src={image1} alt="Silvia Milanes Portfolio" className="image1"/>
      <img data-aos="fade-left" src={image2} alt="silvia milanes" className="image2"/>
    </div>
  );
};

export default HomePage;