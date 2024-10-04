import React from 'react';
import logo from "../Components/Images/nav.jpeg";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import img1 from "../Components/Images/i4.jpg"
import img2 from "../Components/Images/i2.jpg"
import img3 from "../Components/Images/i1.jpg"
import l1 from "../Components/Images/lah1.jpg"
import l2 from "../Components/Images/lah2.jpg"
import saree1 from "../Components/Images/saree1.jpg"
import Marquee from "react-fast-marquee";
const skillsImage = [
  require('../Components/Images/n1.jpg'),
  require('../Components/Images/n2.jpg'),
  require('../Components/Images/n3.jpg'),
  require('../Components/Images/n4.jpg'),
  require('../Components/Images/n5.jpg'),
  require('../Components/Images/n6.jpg'),
  require('../Components/Images/n7.jpg'),
];
const Home = () => {
  return (
    <>
    <div className='flex justify-center '>
      <img 
        src={logo} 
        alt="Logo" 
        className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full h-auto p-4"
      />
    </div>
    <div className="w-full">
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          interval={3000}
      
          className="carousel-container"
        >
          <div>
            <img src={img1} alt="Slide 1" className="w-full h-auto" />
          </div>
          <div>
            <img src={img2} alt="Slide 2" className="w-full h-auto" />
          </div>
          <div>
            <img src={img3} alt="Slide 3" className="w-full h-auto" />
          </div>
        </Carousel>
      </div>
      <div className="px-4 py-8">
  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 ]">Explore our Exclusive Collections!</h2>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <img 
      src={l1} 
      alt="Lahenga 1" 
      className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
    />
    <img 
      src={l2} 
      alt="Lahenga 2" 
      className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
    />
       <img 
      src={saree1} 
      alt="Lahenga 3" 
      className="block md:hidden lg:block w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
    />
    {/* You can add more images here */}
  </div>
</div>
<div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
  <div className="w-[300px] h-[300px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

  <div className="flex justify-center -translate-y-[1px]">
    <div className="w-3/4">
      <div className="h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
    </div>
  </div>

  <div className="flex justify-center my-5 lg:py-8">
    <div className="flex items-center">
      <span className="w-48 h-[3px] bg-[#1a1443]"></span>
      <span className="bg-[#1a1443] w-fit text-white p-2 px-4 text-4xl rounded-md">
      Shine with our unique and radiant jewellery
      </span>
      <span className="w-48 h-[3px] bg-[#1a1443]"></span>
    </div>
  </div>

  <div className="w-full my-12">
    <Marquee
      gradient={false}
      speed={80}
      pauseOnHover={true}
      pauseOnClick={true}
      delay={0}
      play={true}
      direction="left"
    >
      {skillsImage.map((image, id) => (
        <div
          key={id}
          className="w-[400px] min-w-[400px] h-fit flex flex-col items-center justify-center transition-all duration-500 m-2 sm:m-3 rounded-lg group relative hover:scale-[1.2] cursor-pointer"
        >
          <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
            <div className="flex -translate-y-[1px] justify-center">
              <div className="w-3/4">
                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <div className="h-48 sm:h-56">
                <img
                  src={image}
                  alt={`Skill Image ${id + 1}`}
                  width={300}
                  height={300}
                  className="h-full w-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </Marquee>
  </div>
</div>



    </>
  );
}

export default Home;
