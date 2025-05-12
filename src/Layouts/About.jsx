import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <>
            <Helmet>
                <title>About| FindFest</title>
            </Helmet>
            <section className="bg-white text-black px-4 py-10 md:py-16 lg:py-20">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl text-orange-400 font-bold mb-6">About FindFest</h1>
                    <p className="text-lg md:text-xl leading-relaxed mb-6 px-2 md:px-10">
                        Welcome to <span className="font-semibold">FindFest</span> — where passion meets celebration!
                        We are more than just a fest; we are a vibrant community of dreamers, doers, and change makers.
                        From electrifying cultural nights to high-stakes tech competitions, our fest is a platform for students
                        to express, explore, and elevate themselves.
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed px-2 md:px-10">
                        Hosted by Fest Committee, this annual extravaganza brings together participants from across
                        the region and beyond. Get ready for workshops, performances, games, and moments you'll never forget.
                        Join us as we turn ideas into impact, and fun into unforgettable memories!
                    </p>
                </div>
            </section>
        </>
    );
};

export default About;
