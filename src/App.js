 import About from "./components/NavBar/about/About";
import Intro from "./components/NavBar/intro/Intro";
import Projects from "./components/NavBar/projects/Projects";
import NavBar from "./components/NavBar/navbar";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import Skills from "./components/skills/Skills";
import './style.css';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <About/>
      <Projects/>
      <Skills/>
      <Contacts/>
      <Footer/>
      

    </div>
  );
}

export default App;
