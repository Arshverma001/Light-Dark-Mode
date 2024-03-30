"use client"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

interface Child{
  isDarkMode:Boolean;
}

const PrevArrow = ({ onClick }:{onClick:any}) => (
  <button  onClick={onClick}>
    <div className="absolute top-[50%] left-[-10%]  w-8 h-10 bg-gradient-to-r dark:from-[#18282A] dark:to-[#221A2C] border-2 border-blue-500">
    <div className=" my-3  inline-block  w-4 h-4 border-t-4 border-l-4 border-blue-500 transform -rotate-45"></div>
    </div>
  </button>
);

// Custom next arrow component
const NextArrow = ({ onClick }:{onClick:any}) => (
  <button onClick={onClick}>
    <div className=" absolute top-[50%] right-[-10%] w-8 h-10 bg-gradient-to-r dark:from-[#18282A] dark:to-[#221A2C] border-2 border-blue-500">
    <div className="my-3   inline-block w-4 h-4 border-t-4 border-l-4 border-blue-500 custom-rotation"></div>
    </div>
  </button>
);

const Carousel = ({isDarkMode}:{isDarkMode:Boolean}) => {
 const data :{id: number; img: string; title: string; date: string; venue: string;}[]=[
  {id:1,img :"/Images/img5.jpg",title: "Las Vegas Aviators",date : "OCT 15 |SUN|4:30 PM",venue :"Las Vegas Ballpark, Las Vegas, Nevada"},
  {id:2,img :"/Images/img6.jpg",title: "Sacramento River Cats",date : "OCT 15 |SUN|4:30 PM",venue :"Sutter Health , Sacramento, California"},
  {id:3,img :"/Images/img5.jpg",title: "Las Vegas Aviators",date : "OCT 15 |SUN|4:30 PM",venue :"Las Vegas Ballpark, Las Vegas, Nevada"},
  {id:4,img :"/Images/img3.jpg",title: "Sacramento River Cats",date : "OCT 15 |SUN|4:30 PM",venue :"Sutter Health , Sacramento, California"},
 ]

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: <PrevArrow  onClick={onclick}/>,
    nextArrow: <NextArrow onClick={onclick}/>
    
    // nextArrow: (
    //   <div>
    //     <div className="next-slick-arrow">
    //         <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
    //     </div>
    //   </div>
    // ),

    // prevArrow: (
    //   <div>
    //     <div className="next-slick-arrow rotate-180">
    //       <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
    //     </div>
    //   </div>
    // ),
  };
  return (
    <div className={`${isDarkMode ? "dark":""}  flex-col justify-center items-center`}>
<div className="dark:bg-gradient-to-r dark:from-[#18282A] dark:to-[#221A2C] bg-gradient-to-r from-[#F9F8FF] to-[#F3F9FF] ">
    <div className="m-20  text-center dark:text-white text-black">
    <p className="font-bold text-5xl mb-5 pt-10 ">Collection Spotlight</p>
    <p className="font-inter font-normal text-sm">Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p> 
    </div>
    <div className=" mx-[250px]">
      <Slider {...settings} >
        {data.map(d =>(
          <div className="" key={d.id}>
          <div className="h-[630px] w-[260px]  dark:bg-[#3B3E47] bg-[#FFFFFF] rounded-lg shadow-xl hover:shadow-2xl  "> 
          <Image className="w-[226px] h-[402px] py-4 mx-4" 
      src={d.img}
      width={220}
      height={500}
      alt="Picture of the author"
    />
    
   <div className="flex relative ">
   <div className=" absolute top-1 left-0 h-5 w-5 dark:bg-gradient-to-r dark:from-[#18282A] dark:to-[#221A2C]  
            rounded-tl-full rounded-tr-full rotate-90 bg-gradient-to-r from-[#F9F8FF] to-[#F3F9FF]"></div>
   <div className=" border-t border-dashed w-full h-0 border-[#818A97] mt-4"></div>
    <div className="top-1 absolute right-0 h-5 w-5 dark:bg-gradient-to-r dark:from-[#18282A] dark:to-[#221A2C]  
            rounded-tl-full rounded-tr-full -rotate-90 bg-gradient-to-r from-[#F9F8FF] to-[#F3F9FF]"></div>
   </div>
    <div className="mt-4 flex flex-col justify-center items-center dark:text-white text-black">
      <p className="font-poppins font-medium text-lg p-1 " >{d.title}</p>
      <p className="font-poppins font-normal text-sm p-1">{d.date}</p>
      <p className="font-inter font-normal text-sm text-[#525965] dark:text-[#DFDFDF] p-1">{d.venue}</p>
      <button className="bg-[#000000] text-white px-10 my-6 py-4">Take Flight Collection</button>
    </div>
        </div>
        <div className="flex "></div>
        </div>
        ))}
      </Slider>
    </div>
    </div>
    </div>
  
  );
};

export default Carousel;


 