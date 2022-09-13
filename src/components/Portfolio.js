import React from "react";

function Portfolio() {
  return (
    <div class= 'flex justify-center gap-20 p-20'>
      <div>
        <a href='https://www.myjunkwaxbox.com/' target="_blank" rel="noopener noreferrer">
      <img
          class="thumbnails h-80 hover:drop-shadow-2xl"
          alt="profile-pic"
          src={require("../assets/junkwaxbox.jpeg")}
        />
        </a>
        <h2>Junk Wax Box</h2>
        <p>Built/designed/managed<br></br> using Wix/Velo</p>
        </div>
        <div>
        <img
          class="thumbnails h-80 hover:drop-shadow-2xl"
          alt="profile-pic"
          src={require("../assets/junkwaxbox.jpeg")}
        />
        <h2>Burro</h2>
        <p>Built with React</p>
        </div>
        <div>
        <img
          class="thumbnails  h-80 hover:drop-shadow-2xl"
          alt="profile-pic"
          src={require("../assets/junkwaxbox.jpeg")}
        />
        <h2>Cook</h2>
        <p>Built with React, express.js,<br></br> graphql, Material UI</p>
        </div>
      
    </div>
  );
}

export default Portfolio;
