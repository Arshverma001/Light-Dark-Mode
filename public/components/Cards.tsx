import Image from "next/image"

interface Child{
  isDarkMode:Boolean;
}

export default function Cards({isDarkMode}:{isDarkMode:Boolean}){
return(
  <div className={`${isDarkMode ? "dark":""} `}>
     <main className= "flex min-h-screen items-center justify-center bg-[#F7F7F8]  dark:bg-[#292B32] ">
      <div className="flex flex-col ">
        <div>
        <span className="text-2xl mb-6 font-semibold  font-poppins relative dark:text-white text-black">Sports
  <div className="absolute bottom-[-0.5rem] left-0 w-full h-0.5 bg-blue-500"></div>
</span>

        </div>
      
      {/* cards */}
      <div className="flex space-x-4 mt-4 ">
        
      <div className="w-[265px] h-[520px]  rounded-lg shadow-xl hover:shadow-2xl bg-[#FFFFFF] text-black dark:text-white dark:bg-[#3B3E47]">
    <div className="p-2">
    <Image className="w-[245px] h-[390px]"
      src="/Images/img1.jpg"
      width={220}
      height={500}
      alt="Picture of the author"
    />
    <p className="font-medium text-lg m-3 font-inter">Sacramento River Cats</p>
    <div className="dark:bg-[#292B32]">
      <div className="flex justify-between m-4 ">
        <div className="font-inter pt-1 pb-1" >
        <p className="text-[#525965] dark:text-[#DFDFDF]  font-normal">Total Events</p>
        <p className="font-medium ">48 Events</p>
        </div>
        <div>
        <p className="text-[#525965] dark:text-[#DFDFDF] font-normal">Sport</p>
        <p className="font-medium">Baseball</p>
        </div>     
      </div>
    </div>
    </div>
</div>

<div className="w-[260px] h-[520px]  rounded-lg shadow-xl hover:shadow-2xl  bg-[#FFFFFF] text-black dark:text-white dark:bg-[#3B3E47]">
    <div className="p-2 ">
    <Image className="w-[240px] h-[390px]"
      src="/Images/img2.jpg"
      width={220}
      height={500}
      alt="Picture of the author"
    />
    <p className="font-medium text-lg m-3 font-inter">Las Vegas Aviators</p>
    <div className="dark:bg-[#292B32]">
      <div className="flex justify-between m-4 ">
        <div className="font-inter pt-1 pb-1">
        <p className="text-[#525965] dark:text-[#DFDFDF] font-normal">Total Events</p>
        <p className="font-medium">28 Events</p>
        </div>
        <div>
        <p className="text-[#525965] dark:text-[#DFDFDF] font-normal">Sport</p>
        <p className="font-medium">Baseball</p>
        </div>     
      </div>
    </div>
    </div>
</div>
<div className="w-[260px] h-[520px]  rounded-lg shadow-xl hover:shadow-2xl bg-[#FFFFFF] text-black dark:text-white dark:bg-[#3B3E47]">
    <div className="p-2">
    <Image className="w-[240px] h-[390px]"
      src="/Images/img3.jpg"
      width={220}
      height={500}
      alt="Picture of the author"
    />
    <p className="font-medium text-lg m-3 font-inter">New jersey devils</p>
    <div className="dark:bg-[#292B32]">
      <div className="flex justify-between m-4 ">
        <div className="font-inter pt-1 pb-1">
        <p className="text-[#525965] dark:text-[#DFDFDF] font-normal">Total Events</p>
        <p className="font-medium">15 Events</p>
        </div>
        <div>
        <p className="text-[#525965] dark:text-[#DFDFDF] font-normal">Sport</p>
        <p className="font-medium">Ice Hockey</p>
        </div>     
      </div>
    </div>
    </div>
</div>
<div className="w-[260px] h-[520px]  rounded-lg shadow-xl hover:shadow-2xl bg-[#FFFFFF] text-black dark:text-white dark:bg-[#3B3E47]">
    <div className="p-2">
    <Image className="w-[240px] h-[390px]"
      src="/Images/img2.jpg"
      width={220}
      height={500}
      alt="Picture of the author"
    />
    <p className="font-medium text-lg m-3 font-inter">Las Vegas Aviators</p>
    <div className="dark:bg-[#292B32]">
      <div className="flex justify-between m-4 ">
        <div className="font-inter pt-1 pb-1">
        <p className="text-[#525965] dark:text-[#DFDFDF] font-normal">Total Events</p>
        <p className="font-medium">28 Events</p>
        </div>
        <div>
        <p className="text-[#525965] dark:text-[#DFDFDF] font-normal">Sport</p>
        <p className="font-medium">Baseball</p>
        </div>     
      </div>
    </div>
    </div>
</div>
<div className="w-[260px] h-[520px]  rounded-lg shadow-xl hover:shadow-2xl  bg-[#FFFFFF] text-black dark:text-white dark:bg-[#3B3E47]">
    <div className="p-2 ">
      <div className="relative">
      <Image className="w-[240px] h-[220px]"
      src="/Images/img4.jpg"
      width={220}
      height={500}
      alt="Picture of the author"
    />
     <div className="bg-black absolute top-0 right-0 pl-4 pr-4">
        <p className="text-white">Ad</p>
      </div>
      </div>
  
    <p className="font-semibold text-xl mt-10 justify-end items-end flex font-inter ">Advertisement Title</p>
    <div className="text-[#DFDFDF]">
      <div className="flex justify-between m-4 ">
        <div className="font-inter font-normal text-sm text-[#525965] dark:text-white">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>     
      </div>
    </div>
    </div>
</div>
      </div>
      <div className="justify-center items-center flex ">
      <button className="bg-[#2C9CF0] mt-8 font-inter p-3  font-semibold text-sm h-max w-max">See More</button>
      </div>
      </div>
    </main>
  </div>
   
)
}

