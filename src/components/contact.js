import React from "react";
import "../styles/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function Contact() {
  return (
  <>
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="./index.html">José Eduardo Coello Kunz</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="./contact.html">Contact <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./portfolio.html">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./index.html">About</a>
        </li>
      </ul>
    </div>
  </nav>

  <container class="contactcard">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Let's talk!</h1>
        <p class="lead">Please access any of my social media below or leave your contact information and I will get back to you shortly</p>
        <a href="https://github.com/jeck24" class="fa fa-github" target="_blank" rel="noreferrer"> GitHub </a>
        <a href="http://www.linkedin.com/in/josé-eduardo-coello-kunz-926b584b" class="fa fa-linkedin" target="_blank" rel="noreferrer"> LinkedIn </a>
        <a href="https://www.instagram.com/jecoello/" class="fa fa-instagram" target="_blank" rel="noreferrer"> Instagram </a>
        <form>
          <div class="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>
          <div class="form-group">
            <label for="message">Name</label>
            <input class="form-control" type="text" placeholder="Please let me know who is calling"/>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div class="form-group">
            <button type="button" class="btn btn-secondary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </container>

  <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
    <footer class="container text-center">
      <small>José Eduardo Coello Kunz &copy; JECK</small>
      <a href="https://github.com/jeck24" class="fa fa-github" target="_blank" rel="noreferrer">GitHub</a>
      <a href="http://www.linkedin.com/in/josé-eduardo-coello-kunz-926b584b" class="fa fa-linkedin" target="_blank" rel="noreferrer">LinkedIn</a>
      <a href="https://www.instagram.com/jecoello/" class="fa fa-instagram" target="_blank" rel="noreferrer">Instagram</a>
    </footer>
  </footer>
  </>
  );
}
export default Contact;