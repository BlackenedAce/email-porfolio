import React from "react";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      title: "Josee P.",
      position: "Timby - Program Manager",
      comment:
        "Ghandi did a great job designing our new newsletter. He was open to our feedback and worked with us until it was perfect!",
      src: "https://www.catchafire.org/impact/match/3049325/timby--email-layout---template/",
    },
    {
      id: 2,
      title: "Renika J. S.",
      position: "Generation Now - Founder & CEO",
      comment:
        "This project is estimated to save us $2,455, allowing us to To better communicate our organization's news with our members.",
      src: "https://www.catchafire.org/impact/match/3044363/generation-now--email-layout---template/",
    },
    {
      id: 3,
      title: "Lawrence L.",
      position: "Artportunity Knocks - Manager",
      comment:
        "Ghandi provided us with a clean, simple, and functional email template to use for our newsletters. He provided clear communication throughout the process and delivered in a very timely manner.",
      src: "https://www.catchafire.org/impact/match/3255253/artportunity-knocks--email-layout---template/",
    },
  ];

  return (
    <div
      name="testimonials"
      className="pt-20 w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div
        className="max-w-screen-lg mx-auto p-4 flex flex-col
       justify-center w-full h-full text-white"
      >
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Testimonials
          </p>
          <p className="py-6">
            These are what people whose projects I've worked on have had to say
            about me. I'm proud to say that I worked to the best of my abilities
            to provide quality work and I've also attached a link to the impact
            story pages.
          </p>
        </div>

        <div className="grid justify-center gap-8 grid:cols-1">
          {testimonials.map(({ id, title, comment, src, position }) => (
            <div
              key={id}
              className="flex p-4 justify-center items-center rounded-xl shadow-md shadow-blue-300 hover:scale-105 duration-500"
            >
              <div className="w-full flex flex-col justify-center items-center gap-3 p-2">
                <h3 className="text-xl font-semibold">
                  {title}
                  <span className="text-sm font-md"> ({position})</span>
                </h3>
                <p className="text-md font-light">"{comment}"</p>
              </div>

              <div className="duration-200 hover:scale-110">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={src}
                  className="text-2xl cursor-pointer"
                >
                  <FaExternalLinkSquareAlt />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
