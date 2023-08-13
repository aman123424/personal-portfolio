import "./App.scss";
import Navbar from "./components/main/navbar/navbar";
import SocialIcons from "./components/main/socialIcons/socialIcons";
import Home from "./components/home/home";
import AboutMe from "./components/aboutMe/aboutMe";
import Education from "./components/aboutMe/education/education";
import Projects from "./components/projects/projects";
import PORs from "./components/experience/PORs/PORs";
import Internships from "./components/experience/interships/internships";
import ContactUs from "./components/contactUs/contactUs";
import RightDecoration from "./components/main/rightDecoration/rightDecoration";
import LeftDecoration from "./components/main/leftDecoration/leftDecoration";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* SocialIcons */}
      <SocialIcons />

      {/* Component */}
      <div className="component-container">
        <Home />
        <AboutMe />
        <Education />
        <Projects />
        <PORs />
        <Internships />
        <ContactUs />
      </div>

      {/* Right Decoration Line */}
      <RightDecoration />

      {/* Left Decoration Line */}
      <LeftDecoration />
    </div>
  );
}

export default App;
