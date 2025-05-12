import React from 'react';

const Moments = () => {
    return (
        <div className='flex flex-col lg:flex lg:flex-row  gap-10 lg:h-[500px] lg:mt-10 mx-4 lg:mx-0'>
            <div className='relative lg:w-2/4 '>
                
                <img className='rounded-4xl' src="https://i.postimg.cc/CLVLgwNN/Moments-1.webp" alt="" />
                <img className='absolute top-50 right-0 lg:top-30 lg:right-10 rounded-4xl w-[200px] lg:w-[400px]' src="https://i.postimg.cc/85JP159y/moments-2.webp" alt="" />                

            </div>
            <div className='lg:w-2/4 mt-5 lg:mt-0'>
                <h1 className='text-3xl  font-bold text-orange-400'>Where excitement meets <span className='text-red-600'>unforgettable</span> moments</h1>
                <p className='text-lg  font-medium mt-2 '>Our events bring together music, technology, and culture, offering something for everyone. Step into a world full of entertainment, innovation, and inspiration that promises to captivate all kinds of passions.</p>
                <button className='text-lg  cursor-pointer rounded-4xl mt-4 w-[200px] p-3 bg-amber-500  text-white'>View More</button>
            </div>
        </div>
    );
};

export default Moments;