import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';


import AOS from 'aos';
import 'aos/dist/aos.css';

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,    
    });
  }, []);

 
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/event.json');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading events...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  }

  return (
    <div id="upcoming-events" className="min-h-screen px-4 py-5">
      <h2 className="text-4xl font-bold text-center mb-8 text-orange-400">
        Upcoming Events
      </h2>
      <p className="text-xl font-normal text-center mb-8">
        From music lovers and tech enthusiasts to those with a taste for culture, our events cater to all. Dive into a world of entertainment, innovation, and inspiration that promises something special for everyone.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div
            key={event.id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
           
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img
              src={event.thumbnail}
              alt={event.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 space-y-2">
              <h3 className="text-xl font-semibold text-amber-500">
                {event.name}
              </h3>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-black">Category:</span> {event.category}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-black">Date:</span> {event.date}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-black">Location:</span> {event.location}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-black">Entry Fee:</span> {event.entryFee}
              </p>
              <button
                onClick={() => navigate(`/event/${event.id}`)}
                className="bg-amber-500 text-white font-medium text-lg cursor-pointer rounded-4xl mt-4 w-[150px] p-1 hover:bg-yellow-500 transition duration-200"
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
