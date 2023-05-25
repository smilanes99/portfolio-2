import React from 'react';
import './HomePage.scss'; 
import image1 from '../../Assets/Images/portfolioTitle.png';
import image2 from '../../Assets/Images/myPic.png';

const HomePage = () => {
  return (
    <div className="image-container">
      <img src={image1} alt="Silvia Milanes Portfolio" className="image1"/>
      <img src={image2} alt="silvia milanes" className="image2"/>
    </div>
  );
};

export default HomePage;