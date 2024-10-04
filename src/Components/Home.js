import React from 'react';
import logo from "../Components/Images/SOI.jpeg";
import ImageCarousel from './Carousel';

const Home = () => {
  return (
    <>
    <div className='flex justify-center '>
      <img 
        src={logo} 
        alt="Logo" 
        className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full h-auto"
      />
    </div>

    </>
  );
}

export default Home;
