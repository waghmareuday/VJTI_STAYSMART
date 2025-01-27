import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import holi from "../../assets/holi.jpg";
import cricket from "../../assets/cricket.jpg";
import djnight from "../../assets/djnight.jpg";
import garba from "../../assets/garba.jpg";

const images = [
  { src: holi, title: "VJTI Staysmart Presents", subtitle: "A Celebration of Culture and Fun" },
  { src: cricket, title: "Hostel Premier League", subtitle: "Show Your Cricket Skills" },
  { src: djnight, title: "DJ Night", subtitle: "Dance the Night Away!" },
  { src: garba, title: "Garba", subtitle: "Traditional Dance Festivities" },
];

function Event() {
  const settings = {
    centerMode: true,
    centerPadding: "10%", // Preserved padding
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    appendDots: (dots) => (
      <div className="absolute bottom-4 w-full">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 bg-white rounded-full transition-all duration-300 hover:scale-125"></div>
    ),
  };

  return (
    <div className="bg-gray-800 text-white min-h-screen pt-28">
      <div className="relative w-full">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="px-4">
              <div className="relative overflow-hidden">
                {/* Main Image */}
                <img
                  src={image.src}
                  alt={image.title}
                  className="rounded-lg w-full h-[450px] object-cover transform transition-transform duration-500 hover:scale-105"
                />
                {/* First Image Special Text (As it is) */}
                {index === 0 ? (
                  <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-40 backdrop-blur-sm p-8 flex flex-col justify-center items-start">
                    <h2 className="text-5xl font-bold text-white">{image.title}</h2>
                    <p className="text-2xl text-white mt-2">{image.subtitle}</p>
                  </div>
                ) : (
                  /* Titles for Other Images */
                  <div className="absolute left-4 bottom-4 bg-black bg-opacity-40 rounded-md p-4">
                    <h3 className="text-2xl font-bold">{image.title}</h3>
                    <p className="text-lg mt-1">{image.subtitle}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Event;
