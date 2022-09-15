import React from "react";

function About() {
  return (
    <div>
      <div>
        <h2 className=" pt-5 flex flex-row justify-center space-x-10 ">
          Full Stack Web Developer
        </h2>
      </div>
      <div class="flex justify-center flex-rowspace-x-10 ">
        <img
          class="profile-pic"
          alt="profile-pic"
          src={require("../assets/profilepic3d.png")}
        />
      </div>
      <div class="px-20">
        <p>
          Developing writers can often benefit from examining an essay, a
          paragraph, or even a sentence to determine what makes it effective. On
          the following pages are several paragraphs for you to evaluate on your
          own, along with the Writing Center's explanation. Note: These passages
          are excerpted from actual student papers and retain the original
          wording.
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
