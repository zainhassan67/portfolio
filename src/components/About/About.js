import React from "react";
import './About.css';
import profile1 from './profile-1.jpeg'
import Typed from "typed.js";
import { useEffect, useRef } from "react";


function About() 
{
  // Create Ref element.
  const element = useRef(null);

  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"], // Strings to display
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
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">About me</h2>
        <div className="about-content">
          <div className="column left">
            <img src={profile1} alt="profile-1.jpeg"/>
          </div>
          <div className="column right">
            <div className="text">
              I'm Zain and I'm a <span ref={element}></span>
            </div>
            <p>
            I am a FrontEnd developer with the love of a UI/UX design. Listed skills include all things JavaScript, such as React, Next.js, Vue.js as well as UI/UX design through Figma and Adobe XD.
            <br/>
            Sometimes simple is best, and the slick black branding, typography, and copy show off personality as well as skills. This online portfolio is a good example of an SPA, where clicking a menu item scrolls you to the relevant section
            </p>
            <a
              href=""
              target="_blank"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About