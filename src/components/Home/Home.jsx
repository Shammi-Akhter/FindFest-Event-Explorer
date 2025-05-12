import React, { useEffect } from 'react';
import Moments from '../Moments/Moments';
import UpcomingEvents from '../UpcomingEvents/UpcomingEvents';
import Entertainment from '../Entertainment/Entertainment';
import ImageSlider from '../Slider/Slider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router';


const Home = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
     
      const timer = setTimeout(() => {
        const id = location.hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100); 

      return () => clearTimeout(timer);
    }
  }, [location]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);


  return (
    <div className='container mx-auto' >
      <Helmet>
        <title>Home | FindFest</title>
        
      </Helmet>
      <div className='flex flex-col gap-10 mb-10'>
        <ImageSlider />
        <Moments />
        <UpcomingEvents id="upcoming-events" />
        <Entertainment />

      </div>
    </div>
  );
};

export default Home;