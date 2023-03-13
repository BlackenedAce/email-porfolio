import React from "react";
import generationnow from "../assets/portfolio/generationnow.png";
import landingpage from "../assets/portfolio/landingpage.png";
import dominica from "../assets/portfolio/dominica.png";
import coinbase from "../assets/portfolio/coinbase.png";
import wordpress from "../assets/portfolio/wordpress.png";
import timby from "../assets/portfolio/timby.png";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Porfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: timby,
      demo: "https://tubular-praline-e9dca6.netlify.app/",
      code: "https://github.com/BlackenedAce/TIMBY-Newsletter",
      title: "Timby Newsletter",
    },
    {
      id: 2,
      src: generationnow,
      demo: "https://clever-starlight-5df3c4.netlify.app/",
      code: "https://github.com/BlackenedAce/Generation-Now",
      title: "Generation-Now",
    },
    {
      id: 3,
      src: dominica,
      demo: "https://thriving-tartufo-600934.netlify.app/",
      code: "https://github.com/BlackenedAce/Discover-Dominica-email",
      title: "Discover Dominica",
    },
    {
      id: 4,
      src: coinbase,
      demo: "https://cosmic-youtiao-9e376c.netlify.app/",
      code: "https://github.com/BlackenedAce/Coinbase-Account-Recovery",
      title: "Recovery email",
    },
    {
      id: 5,
      src: wordpress,
      demo: "https://investedweare.wordpress.com/",
      code: "https://investedweare.wordpress.com/",
      title: "Wordpress Website",
    },
    {
      id: 6,
      src: landingpage,
      demo: "https://clever-starlight-5df3c4.netlify.app/",
      code: "https://github.com/BlackenedAce/Product-Landing-page-fitness-page-",
      title: "Landing Page",
    },
  ];

  return (
    <div
      name="portfolio"
      className="w-full pt-20 bg-gradient-to-b
    from-black to-gray-800 text-white  h-fit md:h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid justify-center gap-8 grid:cols-1 md:grid-cols-2 lg:gap-14 lg:grid-cols-2">
          {portfolios.map(({ id, src, demo, code, title }) => (
            <div
              key={id}
              className="flex shadow-md shadow-gray-600 rounded-2xl overflow-hidden max-w-lg"
            >
              <a
                href={demo}
                className="w-2/3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
              </a>

              <div className="flex items-center justify-evenly p-1 flex-col w-1/3">
                <h2>{title}</h2>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={code}
                  className="text-2xl cursor-pointer duration-200 hover:scale-110"
                >
                  <FaGithub />
                </a>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={demo}
                  className="text-2xl cursor-pointer duration-200 hover:scale-110"
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

export default Porfolio;
