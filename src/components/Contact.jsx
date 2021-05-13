import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <div id="contact">
      <span>
        <br />
      </span>

      <h1>Get In Touch</h1>
      <h2>jerrym981@gmail.com</h2>
      <a href="https://drive.google.com/file/d/1vFsD8tElmm4--zT-9bhZkJFTqnRI2u2d/view?usp=sharing">
      <button type="button" className="resume-button" id="resume">Resume</button>
      </a>

      <a href="https://www.linkedin.com/in/jeronimo-maranion/">
        <FaLinkedin className="linkedin" />
      </a>
        
      <a href="https://github.com/Jeronimo-M">
        <FaGithub className="github" />
      </a>
      
      <span>
        <br />
      </span>

      <form className="form" action="mailto:jerrym981@gmail.com" method="GET">
        <label>Your Name:
         <input
            type='text'
            placeholder='Enter Your Name'
          />
        </label>

        <span>
          <br />
        </span>

        <label>Email:
         <input
            type='text'
            placeholder='Email'
          />
        </label>

        <span>
          <br />
        </span>

        <label>Tell Me Everything:
          <input
            type='text'
            placeholder='Info Here'
          />
        </label>

        <span>
          <br />
        </span>

        <button type="submit" className="submit-button">Submit</button>
      </form>


    </div>
  )
}

export default Contact