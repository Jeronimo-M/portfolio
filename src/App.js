import './App.css';
import Navbar from "./components/Navbar";
import Greeting from "./components/Greeting";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Greeting />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>  
  )
}

export default App;
