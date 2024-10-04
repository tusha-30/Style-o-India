// import React from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css"; 
// import img1 from "./img1.jpeg" // Replace with your actual image path
// import img2 from "./img2.jpeg";
// import img3 from "./img3.jpeg";
// import img4 from "./img4.jpeg";

// const ImageCarousel = () => {
//   const settings = {
//     dots: true,  // Show navigation dots
//     infinite: true,  // Infinite loop
//     speed: 500,  // Transition speed
//     slidesToShow: 1,  // Number of slides to show at a time
//     slidesToScroll: 1,  // Number of slides to scroll at a time
//     autoplay: true,  // Auto slide
//     autoplaySpeed: 3000,  // Speed for autoplay
//     pauseOnHover: true,  // Pause when hover
//     responsive: [ // Responsive breakpoints
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         }
//       }
//     ]
//   };

//   return (
//     <div className="max-w-4xl mx-auto mt-1 ">
//       <Slider {...settings}>
//         <div>
//           <img src={img1} alt="Image 1"  className="w-full h-auto object-cover rounded-lg shadow-lg" />
//         </div>
//         <div>
//           <img src={img2} alt="Image 2"  className="w-full h-auto object-cover rounded-lg shadow-lg" />
//         </div>
//         <div>
//           <img src={img3} alt="Image 3" className="w-full h-auto object-cover rounded-lg shadow-lg" />
//         </div>
//         <div>
//           <img src={img4} alt="Image 4"  className="w-full h-auto object-cover rounded-lg shadow-lg"/>
//         </div>
//       </Slider>
//     </div>
//   );
// }

// export default ImageCarousel;
