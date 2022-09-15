import React from "react";

function Portfolio() {
  return (
    <div class="pt-10 flex flex-row justify-center  space-x-10">
      <div class="w-1/5">
        <a
          href="https://burrochili.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            class="thumbnails hover:drop-shadow-2xl"
            alt="profile-pic"
            src={require("../assets/burroapp.png")}
          />
        </a>
        <h2>Burro Chili</h2>
        <p class="">
          Simple sign up landing page<br></br>built in React
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
            src={require("../assets/junkwaxiphone.png")}
          />
        </a>
        <h2>Junk Wax Box</h2>
        <p>
          Built/designed/managed<br></br> using Wix/Velo
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
            src={require("../assets/cookiphoneshadow.png")}
          />
        </a>
        <h2>Cook</h2>
        <p>
          Built in React<br></br> Express.js, graphql
        </p>
      </div>
      
    </div>
  );
}

export default Portfolio;
