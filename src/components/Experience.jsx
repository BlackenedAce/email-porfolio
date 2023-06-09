import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import photoshop from "../assets/photoshop.png";
import bootstrap from "../assets/bootstrap.png";
import github from "../assets/github.png";
import sketch from "../assets/sketch.svg";
import mailchimp from "../assets/mailchimp.webp";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-400",
    },

    {
      id: 5,
      src: sketch,
      title: "Sketch",
      style: "shadow-amber-300",
    },
    {
      id: 6,
      src: photoshop,
      title: "Photoshop",
      style: "shadow-blue-600",
    },
    {
      id: 7,
      src: mailchimp,
      title: "Mailchimp.js",
      style: "shadow-yellow-300",
    },

    {
      id: 8,
      src: github,
      title: "Github",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className="pt-20 bg-gradient-to-b from-gray-800 to-black w-full h-fit md:h-full"
    >
      <div
        className="max-w-screen-lg mx-auto p-4 flex flex-col
       justify-center w-full h-full text-white"
      >
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">
            These are the technologies that I have worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={
                "shadow-md hover:scale-105 duration-500 py-2 rounded-lg" +
                " " +
                style
              }
            >
              <img className="w-20 mx-auto" src={src} alt="" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
