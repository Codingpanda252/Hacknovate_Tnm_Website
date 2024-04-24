import React, { useState, useEffect } from "react";
import "./App.css";
import Countdown from "./components/Countdown";
import Prizes from "./components/Prizes";
import Sponsors from "./components/Sponsors";
import Timeline from "./components/Timeline";
import ProjectThemes from "./components/ProjectThemes";
import FAQ from "./components/FAQ";
import Judges from "./components/Judges";
import Carousel from "./components/Carousel";
import BigHeading from "./components/BigHeading";
import "./components/BigHeading.css";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "countdown", label: "Countdown" },
    { id: "prizes", label: "Prizes" },
    { id: "sponsors", label: "Sponsors" },
    { id: "timeline", label: "Timeline" },
    { id: "themes-tracks", label: "Themes & Tracks" },
    { id: "judges", label: "Judges" },
    { id: "faq", label: "FAQ" },
  ];

  const blurAmount = scrollPosition / 100;

  return (
    <div>
      <div
        className="parallax-bg"
        style={{ filter: `blur(${blurAmount}px)` }}
      ></div>

      <header className="p-4 flex justify-start items-start">
        <a
          href="https://www.mait.ac.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="logo-link"
        >
          <img src="logo3.png" alt="Logo 1" className="logo" />
        </a>
        <a
          href="https://www.mait.ac.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="logo-link"
        >
          <img src="logo4.png" alt="Logo 2" className="logo" />
        </a>
        <a
          href="https://tnm.mait.ac.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="logo-link"
        >
          <img src="logo1.jpg" alt="Logo 3" className="logo" />
        </a>
        <a
          href="https://www.instagram.com/edcell.mait/"
          target="_blank"
          rel="noopener noreferrer"
          className="logo-link"
        >
          <img src="logo2.jpg" alt="Logo 4" className="logo" />
        </a>
      </header>

      <header className="bg-blue-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <nav className={`hidden md:flex ${isMenuOpen ? "flex" : "hidden"}`}>
            <div className="container mx-auto text-white p-4">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="mr-4 mb-2 md:mb-0"
                  onClick={() => scrollToSection(item.id)}
                  aria-label={item.label.trim()}
                >
                  {item.label.trim()}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </header>

      <BigHeading />

      <h2
        className="text-center text-3xl font-bold mb-4 heading-3d"
        style={{ textAlign: "center" }}
      >
        Techsurge & Mridang 2K24
      </h2>

      <Carousel />

      <section id="countdown" className="bg-gray-200 p-8">
        <Countdown />
      </section>

      <section id="prizes" className="bg-white p-8">
        <Prizes />
      </section>

      <section id="sponsors" className="bg-gray-200 p-8">
        <Sponsors />
      </section>

      <section id="timeline" className="bg-white p-8">
        <Timeline />
      </section>

      <section id="themes-tracks" className="bg-gray-200 p-8">
        <ProjectThemes />
      </section>

      <section id="faq" className="bg-gray-200 p-8">
        <FAQ />
      </section>

      <section id="judges" className="bg-white p-8">
        <Judges />
      </section>

      <footer className="bg-gray-800 text-white p-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-4 md:mb-0 md:order-1">
            <p className="mb-2">
              Maharaja Agrasen Institute of Technology, PSP Area, Plot No. 1,
              Sector-22, New Delhi, Delhi 110086
            </p>
            <p>Email: info@edcmait.ac.in</p>
            <a
              href="https://maps.app.goo.gl/dxrbBtFzmrX3uGBi6"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 mb-2 md:mb-0 map-image"
            >
              <img src="map-image.png" alt="Map Location" className="w-6 h-6" />
            </a>
          </div>
          <div className="md:w-1/2 text-center md:text-right md:order-2">
            <div className="footer-section flex justify-between items-center">
              {menuItems.map((item, index) => (
                <React.Fragment key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="mr-4 mb-2 md:mb-0"
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label.trim()}
                  </a>
                  {index !== menuItems.length - 1 && (
                    <span className="mr-4"> </span>
                  )}
                </React.Fragment>
              ))}

              <p>Made by ❤️ Subhasish Panda EDC MAIT</p>
              <p className="mb-2">
                &copy; 2024 HACKNOVATE. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
