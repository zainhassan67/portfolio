import React from "react";
import './Home.css';
import Typed from "typed.js";
import { useEffect, useRef } from "react";

function Home() {

  // Create Ref element.
  const element = useRef(null);

  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: ["Software Engineer", "Developer", "Designer", "Freelancer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);





  return (
    <>
    <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">Hello, my name is</div>
          <div className="text-2">Zain Ul Hassan</div>
          <div className="text-3">
            And I'm a <span ref={element}></span>
          </div>
          <a href="#"> Hire me </a>
        </div>
      </div>
    </section>
    </>
  );
}

export default Home
