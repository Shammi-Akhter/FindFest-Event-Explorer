import React from 'react';

const Entertainment = () => {
    return (
        <div className=''>
            <div className='lg:flex lg:flex-row flex flex-col-reverse lg:h-[800px] lg:mt-10 h-[550px] m-4'>

                <div className='lg:w-2/4 mt-20  lg:mt-40 '>
                    <h1 className='lg:text-3xl md:text-2xl text-xl font-bold text-orange-400'>We bring together the <span className='text-red-600'>best </span>in entertainment</h1>
                    <p className='lg:text-lg  text-sm font-medium mt-2 '>Our events bring together music, technology, and culture, offering something for everyone. Step into a world full of entertainment, innovation, and inspiration that promises to captivate all kinds of passions.</p>
                    <button className='lg:text-lg  text-sm lg:font-bold rounded-4xl mt-4 lg:w-[200px] w-[150px] p-3 bg-blue-200  text-blue-500'>Explore Blogs</button>
                </div>
                <div className='bg-blue-300 rounded-full relative lg:top-40 lg:-right-20 lg:w-[200px] lg:h-[600px]'>

                </div>
                <div className='relative lg:w-2/4 '>

                    <img className='rounded-4xl' src="https://i.postimg.cc/FRGSdGxP/En-1.webp" alt="" />
                    <img className='absolute lg:top-50 top-20 right-0 rounded-4xl lg:w-[400px] w-[200px]' src="https://i.postimg.cc/PJR8Kx9Y/en-2.webp" alt="" />

                </div>
            </div>
        </div>
    );
};

export default Entertainment;