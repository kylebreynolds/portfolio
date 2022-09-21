import React from "react";

function About() {
  return (
    <div>
      <div>
        <h2 className=" pt-5 flex flex-row justify-center space-x-10 ">
          Full Stack Engineer
        </h2>
      </div>
      <div className="flex justify-center flex-rowspace-x-10 ">
        <img
          class="profile-pic drop-shadow-lg"
          alt="profile-pic"
          src={require("../assets/profilepic.png")}
        />
      </div>
      <div class="pb-10 px-20">
        <p>
          Full Stack Engineer with a background in sales and management.
        </p>
      </div>
      <div class="px-20">
        <p>
          Skills: HTML, CSS JavaScript, React.js, MySQL, Express.js, Node.js, MongoDB, GraphQL, Git, Adobe Photoshop.
        </p>
      </div>
      

      <div class="pt-10 flex flex-row justify-center space-x-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12 text-white-500 fill-white animate-bounce"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </div>
  );
}

export default About;
