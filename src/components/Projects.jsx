function Projects() {
  return (
    <div id="projects">
      <h1 class="title-projects">Projects</h1>
      
      <div className="projects-container">

      <div className="photodeck">
        <h1>Photodeck</h1>
        <p>React site in conjunction with Airtable that allows users to upload photos via URL with full CRUD functionality.</p>
        <a href="https://loving-lamarr-cc38f1.netlify.app/">
        <button className="project-button">See The App</button>
        </a>
        <a href="https://github.com/Jeronimo-M/Photodeck">
        <button className="project-button">See The Code</button>
        </a>
      </div>
      
      <div className="technologic">
        <h1>Technologic</h1>
        <p>A full stack app that has a community based marketplace using React and MongoDB for the front end and Express with Heroku for the back end.</p>
        <a href="https://heuristic-ptolemy-d4f1c6.netlify.app/">
        <button className="project-button">See The App</button>
        </a>
        <a href="https://github.com/sponticel/technologic-app">
        <button className="project-button">See The Code</button>
        </a>
      </div>
      
      <div className="sneakerheads">
        <h1>Sneakerheads</h1>
        <p>A full stack website that focuses on a user to user transaction with elements of a social media app. React with Netlify used on the front end and Ruby on Rails with Heroku for the back end.</p>
        <a href="https://upbeat-kalam-71ae5f.netlify.app/">
        <button className="project-button">See The App</button>
        </a>
        <a href="https://github.com/Jeronimo-M/Sneakerheads">
        <button className="project-button">See The Code</button>
        </a>  
      </div>

      </div>
    </div>
  )
}

export default Projects