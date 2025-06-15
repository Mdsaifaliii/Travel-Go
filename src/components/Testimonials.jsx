import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Rahul Reddy",
    quote: "This was the best travel experience of my life! The tour guides were amazing.",
    image: "https://images.unsplash.com/photo-1727312413225-61d74356508f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHJhaHVsfGVufDB8fDB8fHww",
  },
  {
    name: "Neha Sharma",
    quote: "Everything was organized and perfect. I highly recommend their services!",
    image: "https://images.unsplash.com/photo-1624610262404-e6530e871c17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGdpcmwlMjBpbmRpYW58ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Karan Singh",
    quote: "The destinations were breathtaking. Booking again soon!",
    image: "https://images.unsplash.com/photo-1530404805506-c03b57ae586f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGthcmFufGVufDB8fDB8fHww",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">What Our Travelers Say</h2>
      <Slider {...settings} className="max-w-3xl mx-auto">
        {testimonials.map((t, index) => (
          <div key={index} className="px-6">
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 mx-auto rounded-full mb-4"
            />
            <p className="text-lg italic text-gray-600 mb-2">"{t.quote}"</p>
            <h4 className="text-md font-semibold text-gray-700">- {t.name}</h4>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
