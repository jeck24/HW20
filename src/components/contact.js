import React from "react";
import "../styles/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function Contact() {
  return (
  <>
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" type="img/png" href="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTizfGf5mOS2Mfs5gHIJbRRUc5u4FCk3RP7zg&usqp=CAU"/>
        <link rel="stylesheet" type="text/css" href="./CSSReset.css"/>
        <link href="https://fonts.googleapis.com/css2?family=Lora&family=PT+Sans+Narrow&family=Prosto+One&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>
    </head>

  <container class="contactcard">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Let's talk!</h1>
        <p class="lead">Please access any of my social media below or leave your contact information and I will get back to you shortly</p>
        <a href="https://github.com/jeck24" class="fa fa-github" target="_blank" rel="noreferrer">  </a>
        <a href="http://www.linkedin.com/in/josé-eduardo-coello-kunz-926b584b" class="fa fa-linkedin" target="_blank" rel="noreferrer">  </a>
        <a href="https://www.instagram.com/jecoello/" class="fa fa-instagram" target="_blank" rel="noreferrer">  </a>
        <form>
          <div class="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>
          <div class="form-group">
            <label for="message">Name</label>
            <input class="form-control" type="text" placeholder="Please let me know who are you"/>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Currently not working but please connect through LinkedIn"></textarea>
          </div>
          <div class="form-group">
            <button type="button" class="btn btn-secondary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </container>

  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    
  </>
  );
}
export default Contact;