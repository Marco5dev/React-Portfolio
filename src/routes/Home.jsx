// eslint-disable-next-line no-unused-vars
import React from "react";
import "./../assets/css/style.css";
import "./../assets/css/mediaqueries.css";
import aboutPic from "./../assets/about-pic.jpeg";
import arrow from "./../assets/arrow.png";
import checkmark from "./../assets/checkmark.png";
import education from "./../assets/education.png";
import email from "./../assets/email.png";
import experience from "./../assets/experience.png";
import github from "./../assets/github.png";
import linkedin from "./../assets/linkedin.png";
import profilePic from "./../assets/profile-pic.jpeg";
import project1 from "./../assets/project-1.png";
import project2 from "./../assets/project-2.png";
import project3 from "./../assets/project-3.png";
import CV from "./../assets/Mark Maher CV.pdf";

function App() {
  document.title = "Mark Maher"
  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">Mark Maher</div>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Mark Maher</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={toggleMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
      <section id="profile">
        <div className="section__pic-container">
          <img src={profilePic} id="profilePic" alt="Mark Maher profile picture" />{" "}
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I am</p>
          <h1 className="title">Mark Maher</h1>
          <p className="section__text__p2">Full Stack web Developer</p>
          <div className="btn-container">
            <button className="btn btn-color-2" onClick={() => window.open(CV)}>
              Download CV
            </button>
            <button
              className="btn btn-color-1"
              onClick={() => (location.href = "./#contact")}
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src={linkedin}
              alt="My LinkedIn profile"
              className="icon"
              onClick={() => (location.href = "https://www.linkedin.com/in/mark-maher-034724290/")}
            />
            <img
              src={github}
              alt="My Github profile"
              className="icon"
              onClick={() => (location.href = "https://github.com/marco5dev")}
            />
          </div>
        </div>
      </section>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img src={aboutPic} id="aboutPic" alt="Profile picture" className="about-pic" />{" "}
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img src={experience} alt="Experience icon" className="icon" />
                <h3>Experience</h3>
                <p>
                  2+ years <br />
                  Backend Development
                </p>
              </div>
              <div className="details-container">
                <img src={experience} alt="Experience icon" className="icon" />
                <h3>Experience</h3>
                <p>
                  1+ years <br />
                  Frontend Development
                </p>
              </div>
              <div className="details-container">
                <img src={education} alt="Education icon" className="icon" />
                <h3>Education</h3>
                <p>
                  High School
                  <br />
                  Port Said Military High School for Boys
                </p>
              </div>
            </div>
            <div className="text-container">
              <p>
                I am a seasoned full-stack web developer with 2 years of
                expertise in backend development and 1 year in frontend.
                Proficient in React, Node.js, Express, Mongoose, HTML, CSS, and
                JavaScript. I specialize in crafting dynamic web applications
                using these technologies, delivering robust and user-friendly
                solutions.
              </p>
            </div>
          </div>
        </div>
        <img
          src={arrow}
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => (location.href = "./#experience")}
        />
      </section>
      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Backend Development</h2>
              <div className="article-container">
                <article>
                  <img src={checkmark} alt="Experience icon" className="icon" />
                  <div>
                    <h3>Express</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img src={checkmark} alt="Experience icon" className="icon" />
                  <div>
                    <h3>JsonVerse</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img src={checkmark} alt="Experience icon" className="icon" />
                  <div>
                    <h3>Mongoose</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img src={checkmark} alt="Experience icon" className="icon" />
                  <div>
                    <h3>CS50</h3>
                    <p>Experienced</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                <article>
                  <img src={checkmark} alt="Experience icon" className="icon" />
                  <div>
                    <h3>HTML</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img src={checkmark} alt="Experience icon" className="icon" />
                  <div>
                    <h3>EJS</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img src={checkmark} alt="Experience icon" className="icon" />
                  <div>
                    <h3>CSS</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img src={checkmark} alt="Experience icon" className="icon" />
                  <div>
                    <h3>React</h3>
                    <p>Advanced</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Other Development Tools</h2>
              <div className="article-container">
                <article>
                  <img src={checkmark} alt="Experience icon" className="icon" />
                  <div>
                    <h3>Git</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img src={checkmark} alt="Experience icon" className="icon" />
                  <div>
                    <h3>VS Code</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img src={checkmark} alt="Experience icon" className="icon" />
                  <div>
                    <h3>NPM</h3>
                    <p>Experienced</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <img
          src={arrow}
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => (location.href = "./#projects")}
        />
      </section>
      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img src={project1} alt="Knisty" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">Knisty</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    (location.href = "https://github.com/marco5dev/knisty")
                  }
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => (location.href = "https://knisty.repl.co")}
                >
                  Live Demo
                </button>
              </div>
            </div>

            <div className="details-container color-container">
              <div className="article-container">
                <img src={project2} alt="St.George" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">St.George</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    (location.href = "https://github.com/marco5dev/St.George")
                  }
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => (location.href = "https://st-george.repl.co/")}
                >
                  Live Demo
                </button>
              </div>
            </div>

            {/* Add the third project */}
            <div className="details-container color-container">
              <div className="article-container">
                <img src={project3} alt="Project 3" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">
                jsonVerse DataBase
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    (location.href = "https://github.com/marco5dev/jsonverse")
                  }
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    (location.href = "https://npmjs.com/package/jsonverse")
                  }
                >
                  NPM
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          src={arrow}
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => (location.href = "./#contact")}
        />
      </section>
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img
              src={email}
              alt="Email icon"
              className="icon contact-icon email-icon"
            />
            <p>
              <a href="mailto:marco5dev@outlook.com">marco5dev@outlook.com</a>
            </p>
          </div>
          <div className="contact-info-container">
            <img
              src={linkedin}
              alt="LinkedIn icon"
              className="icon contact-icon"
            />
            <p>
              <a href="https://www.linkedin.com/in/mark-maher-034724290/">
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>
      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2023 Mark Maher. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;
