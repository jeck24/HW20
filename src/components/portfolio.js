import React from "react";
import "../styles/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function Portfolio() {
  return (
  <>
    <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="icon" type="img/png" href="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTizfGf5mOS2Mfs5gHIJbRRUc5u4FCk3RP7zg&usqp=CAU"/>
    <link href="https://fonts.googleapis.com/css2?family=Lora&family=PT+Sans+Narrow&family=Prosto+One&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>
</head>
<body>

  <container class="portfolio">
    <section class="portfolio">
      
      <article class="container col-sm-12">
        <summary class="card">
          <h5 class="card-title">HW1 - Code Refactor</h5>
          <img src="https://jeck24.github.io/HW1/assets/images/search-engine-optimization.jpg" class="card-img-top" alt="soon"/>
          <details class="card-body">
            <p class="card-text">Take existing code and refactor it (recall that to refactor code is to improve it without changing what it does) to meet a certain set of standards or implement a new technology.</p>
            <a href="https://jeck24.github.io/HW1/" class="btn btn-primary" target="_blank" rel="noreferrer">Go to the project</a>
          </details>
        </summary>
      </article>

      <article class="container col-sm-7">
        <summary class="card">
          <h5 class="card-title">HW2 - Responsive Portfolio</h5>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTizfGf5mOS2Mfs5gHIJbRRUc5u4FCk3RP7zg&usqp=CAU" class="card-img-top" alt="soon"/>
          <details class="card-body">
            <p class="card-text">Responsive design ensures that web applications render well on a variety of devices and window or screen sizes. As a developer, you will likely be asked to create a mobile-first application or add responsive design to an existing application. </p>
            <a href="https://jeck24.github.io/HW2/" class="btn btn-primary" target="_blank" rel="noreferrer">Go to the project</a>
          </details>
        </summary>
      </article>

      <article class="container col-sm-2">
        <summary class="card">
          <h5 class="card-title">HW3 - Password Generator</h5>
          <img src="https://i.pcmag.com/imagery/articles/04Uac9ZA9dH1zEKUiIv0nOu-7..1569489914.jpg" class="card-img-top" alt="soon"/>
          <details class="card-body">
            <p class="card-text">An application that an employee can use to generate a random password based on criteria they’ve selected by modifying starter code</p>
            <a href="https://jeck24.github.io/HW3/" class="btn btn-primary" target="_blank" rel="noreferrer">Go to the project</a>
          </details>
        </summary>
      </article>

      <article class="container col-sm-7">
        <summary class="card">
          <h5 class="card-title">HW4 - Code Quiz</h5>
          <img src="https://img.republicworld.com/republic-prod/stories/promolarge/xxhdpi/wp6ojoyuh6fwdidy_1598513829.jpeg?tr=w-812,h-464" class="card-img-top" alt="soon"/>
          <details class="card-body">
            <p class="card-text">Timed coding quiz with multiple-choice questions</p>
            <a href="https://jeck24.github.io/HW4/" class="btn btn-primary" target="_blank" rel="noreferrer">Go to the project</a>
          </details>
        </summary>
      </article>

      <article class="container col-sm-12">
        <summary class="card">
          <h5 class="card-title">HW5 - Day Planner</h5>
          <img src="https://cdn4.vectorstock.com/i/1000x1000/64/83/scandinavian-weekly-and-daily-planner-vector-10496483.jpg" class="card-img-top" alt="soon"/>
          <details class="card-body">
            <p class="card-text">Calendar application that allows a user to save events for each hour of the day by modifying starter code</p>
            <a href="https://jeck24.github.io/HW5/" class="btn btn-primary" target="_blank" rel="noreferrer">Go to the project</a>
          </details>
        </summary>
      </article>

      <article class="container col-sm-7">
        <summary class="card">
          <h5 class="card-title">HW6 - Weather Dashboard</h5>
          <img src="https://user-images.githubusercontent.com/15653252/71304141-8319f280-2390-11ea-8d60-b072ac8691c7.png" class="card-img-top" alt="soon"/>
          <details class="card-body">
            <p class="card-text" target="_blank">Weather dashboard that will run in the browser and feature dynamically updated HTML and CSS</p>
            <a href="https://jeck24.github.io/HW6/" class="btn btn-primary">Go to the project</a>
          </details>
        </summary>
      </article>

      <article class="container col-sm-2">
        <summary class="card">
          <h5 class="card-title">Project 1 - Soccer Statistics App</h5>
          <img src="data:image/jpeg;base64,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%0A                        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" class="card-img-top" alt="soon"/>
          <details class="card-body">
            <p class="card-text">Conceive and execute a design that solves a real-world problem by integrating data received from multiple server-side API requests</p>
            <a href="https://jeck24.github.io/Project1/" class="btn btn-primary" target="_blank" rel="noreferrer">Go to the project</a>
          </details>
        </summary>
      </article>

      <article class="container col-sm-7">
        <summary class="card">
            <h5 class="card-title">HW8 - Updated Portfolio Page</h5>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTizfGf5mOS2Mfs5gHIJbRRUc5u4FCk3RP7zg&usqp=CAU" class="card-img-top" alt="soon"/>
          <details class="card-body">
            <p class="card-text">Updating the portfolio page and other materials to build toward being employer-competitive</p>
            <a href="https://jeck24.github.io/HW8/" class="btn btn-primary" target="_blank" rel="noreferrer">Go to the project</a>
          </details>
        </summary>
      </article>

      <article class="container col-sm-12">
        <summary class="card">
            <h5 class="card-title">HW9 - Good README Generator</h5>
          <img src="https://cdn.welcometothejungle.co/uploads/image/file/3766/157424/9d0af88d-185f-4e70-9c45-b3008e731a41.png" class="card-img-top" alt="soon"/>
          <details class="card-body">
            <p class="card-text">Created a README file by using a command-line application to generate one</p>
            <a href=" https://drive.google.com/file/d/1gu3gL98r-bTKR3H_puq5_aEcMYAQhOHs/view?usp=sharing" class="btn btn-primary" target="_blank" rel="noreferrer">Go to the project</a>
          </details>
        </summary>
      </article>

      <article class="container col-sm-7">
        <summary class="card">
            <h5 class="card-title">HW10 - Team Profile Generator</h5>
          <img src="https://png.pngtree.com/element_our/png_detail/20181229/vector-users-icon-png_302626.jpg" class="card-img-top" alt="soon"/>
          <details class="card-body">
            <p class="card-text">Built a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person</p>
            <a href="https://drive.google.com/file/d/1H6KujCb3rQRsw1Ns1tAcRG4PmtiMcsKQ/view?usp=sharing" class="btn btn-primary" target="_blank" rel="noreferrer">Go to the project</a>
          </details>
        </summary>
      </article>

      <article class="container col-sm-2">
        <summary class="card">
            <h5 class="card-title">HW11 - Note Taker</h5>
          <img src="https://clickup.com/blog/wp-content/uploads/2020/01/note-taking-1400x1050.png" class="card-img-top" alt="soon"/>
          <details class="card-body">
            <p class="card-text">Created an application that can be used to write, save, and delete notes</p>
            <a href="..." class="btn btn-primary" target="_blank">Go to the project</a>
          </details>
        </summary>
      </article>

      <article class="container col-sm-7">
        <summary class="card">
            <h5 class="card-title">HW12 - Employee Management System</h5>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToOCoDhbBXsobTz7pXgn71cr6y1Bx13wo2gg&usqp=CAU" class="card-img-top" alt="soon"/>
          <details class="card-body">
            <p class="card-text">Architected and built a solution for managing a company's employees using node, inquirer, and MySQL</p>
            <a href="https://drive.google.com/file/d/1tJDGvcqRdSnGogJPgPAyrndpFeNX_8hz/view?usp=sharing" class="btn btn-primary" target="_blank" rel="noreferrer">Go to the project</a>
          </details>
        </summary>
      </article>

      <article class="container col-sm-12">
        <summary class="card">
            <h5 class="card-title">HW13 - Node Express Handlebars</h5>
          <img src="data:image/jpeg;base64,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" class="card-img-top" alt="soon"/>
          <details class="card-body">
            <p class="card-text">Created a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM</p>
            <a href="https://git.heroku.com/powerful-dusk-00294.git" class="btn btn-primary" target="_blank" rel="noreferrer">Go to the project</a>
          </details>
        </summary>
      </article>

      <article class="container col-sm-7">
        <summary class="card">
            <h5 class="card-title">HW14 - Reverse Engineering Authentication</h5>
          <img src="https://www.zeiss.com.mx/content/dam/metrology/products/software/reverse-engineering.jpg" class="card-img-top" alt="soon"/>
          <details class="card-body">
            <p class="card-text">Reverse engineered the starter code provided and create a tutorial for the code</p>
            <a href="https://docs.google.com/document/d/1MBPPBvj5ooAicHf5GYo_V-WsWu5w8-UTVmUjE2G2wh4/edit?usp=sharing" class="btn btn-primary" target="_blank" rel="noreferrer">Go to the project</a>
          </details>
        </summary>
      </article>

      <article class="container col-sm-2">
        <summary class="card">
            <h5 class="card-title">HW15 - Project 2</h5>
          <img src="https://thetripclip.com/tc/images/activity_shots/grocery.png" class="card-img-top" alt="soon"/>
          <details class="card-body">
            <p class="card-text">Enables users to input, update, or eliminate items throughout multiple lists to compare prices and have a better shopping experience.</p>
            <a href="https://grocery--list.herokuapp.com/" class="btn btn-primary" target="_blank" rel="noreferrer">Go to the project</a>
          </details>
        </summary>
      </article>

      <article class="container col-sm-7">
        <summary class="card">
            <h5 class="card-title">HW16 - Updated Portfolio Page</h5>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTizfGf5mOS2Mfs5gHIJbRRUc5u4FCk3RP7zg&usqp=CAU" class="card-img-top" alt="soon"/>
          <details class="card-body">
            <p class="card-text">Updating the portfolio page and other materials to build toward being employer-competitive</p>
            <a href="https://jeck24.github.io/HW16/" class="btn btn-primary" target="_blank" rel="noreferrer">Go to the project</a>
          </details>
        </summary>
      </article>

      <article class="container col-sm-12">
        <summary class="card">
            <h5 class="card-title">HW17</h5>
          <img src="https://sceneideas.ca/wp-content/uploads/2019/12/Coming-Soon-Tile.png" class="card-img-top" alt="soon"/>
          <details class="card-body">
            <p class="card-text">Coming soon</p>
            <a href="..." class="btn btn-primary" target="_blank">Go to the project</a>
          </details>
        </summary>
      </article>

    </section>
  </container>
  </body>
  </>
  );
}
export default Portfolio;