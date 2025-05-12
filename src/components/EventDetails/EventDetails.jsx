import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { useParams } from 'react-router';


const EventDetails = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const res = await fetch('/event.json');
                if (!res.ok) throw new Error('Failed to fetch events');
                const data = await res.json();
                const selected = data.find(ev => ev.id === parseInt(id));
                setEvent(selected);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEvent();
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email) {
            setSubmitted(true);
            setName('');
            setEmail('');
            setTimeout(() => {
                setSubmitted(false);
            }, 3000);
        }
    };

    if (loading) return <div className="text-center py-10">Loading...</div>;
    if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;
    if (!event) return <div className="text-center py-10 text-gray-500">Event not found.</div>;

    return (
       <>
        <Helmet>
                <title>{event.name} | FindFest</title>
            </Helmet>
        <div className="min-h-screen px-4 py-10">
              <h2 className="text-4xl font-bold text-center mb-8 text-orange-400">{event.name}</h2>

            <div className="mt-6 max-w-2xl mx-auto text-center space-y-2 bg-blue-50 rounded-2xl p-5">
                <img
                    src={event.thumbnail}
                    alt={event.name}
                    className="mx-auto w-full max-w-2xl h-80 object-cover rounded-xl shadow"
                />
                <p><strong>Category:</strong> {event.category}</p>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p><strong>Entry Fee:</strong> {event.entryFee}</p>
                <p className="text-gray-600">{event.description}</p>

                <div className="mt-10 max-w-xl mx-auto bg-gray-100 p-6 rounded-xl shadow">
                    <h3 className="text-2xl font-semibold mb-4 text-center">Reserve a Seat</h3>
                    {submitted && (
                        <div className="mb-4 text-green-600 font-medium text-center">
                            Seat reserved successfully!
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-3 border rounded-lg"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border rounded-lg"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full bg-orange-400 text-white py-3 rounded-lg hover:bg-orange-500 transition"
                        >
                            Reserve Seat
                        </button>
                    </form>
                </div>
            </div>
        </div>
       </>
    );
};

export default EventDetails;
