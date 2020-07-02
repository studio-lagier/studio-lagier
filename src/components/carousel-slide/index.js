import React from "react";

export default function CarouselSlide({ img, alt, tagline, text, title }) {
  return (
    <div className="carousel-cell max-w-3xl flex flex-col md:flex-row md:mr-16">
      <img
        src={img}
        className="rounded-full h-40 w-40 mb-8 md:mr-8 md:mb-0"
        alt={alt}
      />
      <div>
        <div className="text-3xl text-white font-bold text-left pb-4">
          “{tagline}”
        </div>
        <div className="text-xl text-white text-left pb-4">{text}</div>
        <div className="text-left text-lg text-white font-bold pl-16">
          --{title}
        </div>
      </div>
    </div>
  );
}
