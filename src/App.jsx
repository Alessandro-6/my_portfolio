import { useEffect, useState } from "react";
import Menu from "./Layout/Menu";
import About from "./Layout/About";
import Projects from "./Layout/Projects";
import Contact from "./Layout/Contact";
import Footer from "./Layout/Footer";
import Features from "./Layout/Features";

function App() {
  const [toggleColorTheme, setToggleColorTheme] = useState(false);

  useEffect(
    function () {
      if (toggleColorTheme)
        document.querySelector("body").classList.add("dark-mode");
      else document.querySelector("body").classList.remove("dark-mode");
    },
    [toggleColorTheme]
  );
  return (
    <>
      <Menu
        toggleColorTheme={toggleColorTheme}
        setToggleColorTheme={setToggleColorTheme}
      />
      <About />
      <Projects />
      <Features />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
