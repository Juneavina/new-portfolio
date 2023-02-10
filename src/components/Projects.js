import React from 'react'
import './Projects.css'
import Pawsitivity from '../assets/images/pawsitivity.png'
import ConnectFour from '../assets/images/c4.png'

const Projects = () => {
  return (
    <>
    <div id='projects'>
    <h1 className='projects-h1'>Projects</h1>
    
    <section className='pawsitivity'>
      <h2>Pawsitivity</h2>
      <p>
      Pawsitivity is a web application designed to make pet adoption simple through user-to-user communication. Pawsitivity is the Tinder of Pet Adoption.
      </p>
      <p>
      The project was developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It utilizes the Axios library to handle HTTP requests to the backend API, allowing users to effortlessly create, update, and delete their pet's profile, creating a smooth user experience. Pet data is stored in MongoDB for easy access and management, and CRUD functionality for creating, reading, updating, and deleting pets in the database has been implemented.
      </p>
      <img className='pawsitivity-img' alt='website-preview' src={Pawsitivity} />
      <h2>Connect 4</h2>
      <p>
      Connect Four is a two-player strategy game in which players take turns dropping colored discs into a vertically-suspended grid. The objective of the game is to be the first player to get four of their own colored discs in a row either horizontally, vertically, or diagonally.
      </p>
      <p>
        Connect four was developed using JavaScript, HTML, and CSS. JavaScript was used to implement the logic and functionality of the game, such as tracking disc drops and checking for winning conditions. HTML was used to create the structure of the game board and the user interface, while CSS was used to style the game and make it visually appealing. The game also used event listeners and click handlers to allow players to take turns dropping discs, and incorporated logic to check for tie and win conditions, and display appropriate messages to the user. The game also employed a combination of for loops and conditional statements to check for winning conditions in all four directions (horizontal, vertical, diagonal left, and diagonal right) and dom manipulation and events as well as best practices for code organization and separation of concerns.
      </p>
      <img className='pawsitivity-img' alt='connectFour-preview' src={ConnectFour} />
      </section>
    </div>
    </>
  )
}

export default Projects