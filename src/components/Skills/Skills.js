import React from "react";
import './Skills.css'

// function based component

function Skills() 
{
  return (
    <section className="skills" id="skills">
      <div className="max-width">
        <h2 className="title">My skills</h2>
        <div className="skills-content">
          <div className="column left">
            <div className="text">My creative skills & experiences</div>
            <p>
            I value simple content structure, clean design patterns, and thoughtful interactions.
            I like to code things from scratch, and enjoy bringing ideas to life in the browser.
            I genuinely care about people, and love helping fellow designers work on their craft.
            </p>
            <a href="#">Read more</a>
          </div>

          <div className="column right">
            <div className="bars">
              <div className="info">
                <span> HTML </span>
                <span> 90% </span>
              </div>

              <div className="line html"></div>
            </div>

            <div className="bars">
              <div className="info">
                <span> CSS </span>
                <span> 70% </span>
              </div>

              <div className="line css"></div>
            </div>

            <div className="bars">
              <div className="info">
                <span> JavaScript </span>
                <span> 80% </span>
              </div>

              <div className="line js"></div>
            </div>

            <div className="bars">
              <div className="info">
                <span> SASS </span>
                <span> 60% </span>
              </div>

              <div className="line cSharp"></div>
            </div>

            <div className="bars">
              <div className="info">
                <span> REACT </span>
                <span> 70% </span>
              </div>

              <div className="line ssms"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills