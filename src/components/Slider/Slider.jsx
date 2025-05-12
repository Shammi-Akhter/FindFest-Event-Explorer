import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        arrows: false,
        pauseOnHover: false,
    };

    const images = [
        "https://i.postimg.cc/fT1m5Wg7/event-0001.jpg",
        "https://i.postimg.cc/G2qXPhSP/event-02.jpg",
        "https://i.postimg.cc/WzzX5LQB/event-03.jpg",
        "https://i.postimg.cc/wjpT63fj/events-004.jpg",
        "https://i.postimg.cc/RCYWzSxW/events-5.jpg"
    ];

    return (
        <div className="w-full relative">

            <Slider {...settings}>
                {images.map((url, idx) => (
                    <div key={idx}>
                        <img src={url} alt={`Slide ${idx}`} className="w-full h-[800px] object-cover" />
                    </div>
                ))}
            </Slider>


            <div className="absolute w-full top-150 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 text-center">
                <h1
                    className="text-2xl md:text-6xl font-bold"
                    style={{ textShadow: '4px 4px 20px rgba(255, 255, 0, 0.9)' }}
                >
                    Discover unforgettable experiences
                </h1>
                <p
                    className="text-sm md:text-2xl font-bold"
                    style={{ textShadow: '3px 3px 15px rgba(255, 255, 0, 0.8)' }}
                >
                    Whether you're a music enthusiast, a tech aficionado, or a culture connoisseur, <br />
                    our diverse range of events has something special for everyone.
                </p>
            </div>

        </div>
    );
};

export default ImageSlider;
