import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  const links = [
    {
      id: 1,
      child: <FaLinkedin size={30} />,
      href: "https://www.linkedin.com/in/ghandi-matthew-89b7731bb/",
      name: "Linkedin",
    },

    {
      id: 2,
      child: <FaGithub size={30} />,
      href: "https://github.com/BlackenedAce",
      name: "Github",
    },

    {
      id: 3,
      child: <HiOutlineMail size={30} />,
      href: "mailto:ghandi.j.matthew@gmail.com",
      name: "Mail",
    },

    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/Ghandi's Resume.pdf",
      download: true,
      name: "Resume",
    },
  ];

  return (
    <div
      name="contact"
      className="pt-20 w-full h-full bg-gradient-to-b from-gray-800 to-black p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">
            You can contact me by submitting the form below or through my social
            media.
            <br />
            Hope to hear from you soon!
          </p>
        </div>

        <div className="flex items-center justify-evenly text-3xl pb-12 xl:hidden">
          {links.map(({ id, href, child, download, name }) => (
            <a
              key={id}
              href={href}
              className="flex flex-col justify-center items-center duration-200 ease-in-out hover:scale-110 hover:text-cyan-500"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
              <p className="text-sm">{name}</p>
            </a>
          ))}
        </div>

        <div className="flex justify-center items-center">
          <form
            method="POST"
            action="https://getform.io/f/3a2b468d-1184-4d16-afc7-4f2e84e510b2"
            className="flex flex-col w-full md:w-1/2 "
          >
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              className="p-2 bg-transparent
                 border-2 rounded-md text-white focus:outline-none"
            />

            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="my-4 p-2 bg-transparent
                 border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message..."
              className="p-2 bg-transparent
                 border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500
            px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
