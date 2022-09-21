import React from "react";

function Portfolio() {
  return (
    <div class="pt-10 flex flex-row justify-center space-x-10">
      <div class="w-1/5 ">
        <a
          href="https://burrochili.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            class="thumbnails hover:drop-shadow-2xl"
            alt="profile-pic"
            src={require("../assets/burroiphone.png")}
          />
        </a>
        <h2>Burro Chili</h2>
        <p class="break-normal">
          Product landing/signup page made with React
        </p>
      </div>
      <div class="w-1/5 ">
        <a
          href="https://smartest-book.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            class="thumbnails hover:drop-shadow-2xl"
            alt="profile-pic"
            src={require("../assets/smartbookiphone.png")}
          />
        </a>
        <h2>Smart Book</h2>
        <p class="break-normal">
          Online bookstore made with React, MySQL, Express.js, Node.js
        </p>
      </div>
      <div class="w-1/5 ">
        <a
          href="https://cookapp.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            class="thumbnails hover:drop-shadow-2xl"
            alt="profile-pic"
            src={require("../assets/cookiphone.png")}
          />
        </a>
        <h2>Cook</h2>
        <p class="break-normal">
          Social network app made with MERN stack
        </p>
      </div>
      <div class="w-1/5 ">
        <a
          href="https://www.myjunkwaxbox.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            class="thumbnails hover:drop-shadow-2xl"
            alt="profile-pic"
            src={require("../assets/junkwaxiphone.png")}
          />
        </a>
        <h2>Junk Wax Box</h2>
        <p class="break-normal">
          Product, content, and grahpic design. Built/managed using Wix.
        </p>
      </div>
    </div>
  );
}

export default Portfolio;
