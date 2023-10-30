import React from 'react'
import './Projects.css'
import Pawsitivity from '../assets/images/pawsitivity.png'
import ConnectFour from '../assets/images/c4.png'
import { Carousel } from 'react-bootstrap'
import Main from '../assets/images/main.PNG'
import Chat from '../assets/images/chat.PNG'
import GetStarted from '../assets/images/getStarted.PNG'
import 'bootstrap/dist/css/bootstrap.min.css';


const Projects = () => {
  return (
    <>
    <div id='projects'>
    <h1 className='projects-h1'>Projects</h1>
    
    <section className='pawsitivity'>
      <h2>Project Access 411</h2>
      <p>
      Project Access 411 is a React Native mobile application, engineered with Expo router, serving as a 24/7 virtual assistant to the residents of LA County in discovering essential local resources. By harnessing AI technology, the app facilitates real-time interactions through an intuitive chatbot, guiding users to accurately pinpoint the resources they require across various cities. With a vast repository of meticulously organized resources, Project Access 411 not only bridges the information gap but ensures help is always at hand, fostering a community of support and ease of access.
      </p>
      <p>
        The technical backbone of Project Access 411 comprises React Native for cross-platform mobile development, and Expo for simplifying the development process. Firebase plays a pivotal role in data management and backend functionalities. It houses the survey data securely, while Firebase Functions are employed to handle HTTPS requests, which are directed seamlessly to the ChatGPT API for real-time chatbot interactions. This tech stack not only enables robust backend processing but also ensures the app remains responsive and user-centric, delivering real-time assistance whenever needed. The amalgamation of these technologies has created a robust, real-time solution for individuals seeking essential resources in LA County, making support accessible around the clock.
      </p>


<Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block phoneScreenshot"
          src={Main}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block phoneScreenshot"
          src={GetStarted}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block phoneScreenshot"
          src={Chat}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
      

      <p className='paws'>
      <h2>Pawsitivity</h2> is a web application designed to make pet adoption simple through user-to-user communication. Pawsitivity is the Tinder of Pet Adoption.
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