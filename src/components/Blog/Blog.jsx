import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { CgCalendarDates } from "react-icons/cg";
const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("blog.json")
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])


    return (
        <div>
            <Helmet>
                <title>Blog | FindFest</title>
             
            </Helmet>
            <h1 className='font-bold text-4xl text-center p-5'>Blogs</h1>
            <p className='text-gray-500 text-sm text-center p-2'>Let's explore some basic concepts that will make you a good developer</p>
            {
                blogs.map((blog) => 

                    <div className='container mx-auto p-4 '>
                        <div className='bg-white p-5 rounded-2xl'>
                            <h1 key={blog.id} className='font-bold text-xl py-2'>{blog.question}</h1>
                            <div className='border-b border-dashed border-gray-400'>

                            </div>
                            <p className='text-blue-400 pt-2'>Answer:</p>
                            <p className='font-medium text-sm pb-2'>{blog.answer}</p>
                            <div className='border-b border-dashed border-gray-400'>

                            </div>
                            <p className='font-medium text-sm text-gray-500 pt-2 flex items-center gap-4'><CgCalendarDates />{blog.date}</p>
                        </div>
                    </div>

                )

            }



        </div>
    );
};

export default Blog; 