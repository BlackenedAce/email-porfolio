import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-fit md:h-screen bg-gradient-to-b
       from-gray-800 to-black text-white"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
       justify-center w-full h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am a highly skilled and creative email developer passionate about
          crafting engaging and visually stunning emails that drive results. I
          possess a deep understanding of email design best practices. I am
          always looking for new and innovative ways to push the boundaries of
          what's possible in email marketing. My attention to detail, technical
          proficiency, and unwavering commitment to quality make me a valuable
          asset to any team looking to take their email campaigns to the next
          level.
        </p>

        <br />

        <p className="text-xl">
          I am an expert in creating email campaigns that build brand awareness,
          drive sales and grow your business. I have experience with all aspects
          of email development including building templates, managing subscriber
          lists, writing copy, and coding HTML/CSS.
        </p>
      </div>
    </div>
  );
};

export default About;
