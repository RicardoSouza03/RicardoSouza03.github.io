import About from "./Components/About";
import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";
import Tecnologies from "./Components/Tecnologies";

export default function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <About />
      <Projects />
      <Tecnologies />
      <Contact />
    </div>
  )
}