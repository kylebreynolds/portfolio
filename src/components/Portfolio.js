import React from "react";

function Portfolio() {
  return (
    <div class="lg:pt-10 flex flex-row justify-center space-x-10">
      <div class="w-1/5 justify-self-auto">
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
        <p class="">
          React
        </p>
      </div>
      <div class="w-1/5">
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
        <p>
          MySQL, Node.js, Express.js
        </p>
      </div>
      <div class="w-1/5">
        <a
          href="https://www.myjunkwaxbox.com/"
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
        <p>
          React, Express.js, graphql
        </p>
      </div>
      
    </div>
  );
}

export default Portfolio;
