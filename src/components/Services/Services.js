import React, {useState} from "react";
import './Services.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faLineChart, faPaintbrush } from "@fortawesome/free-solid-svg-icons";

// normal thing becomes an issue
// I am talking about return, opening parentheses must be present after one space of return

// Function based component

function Services() {
  const [hover1, setHover1] = useState('crimson');
  const [hover2, setHover2] = useState('crimson');
  const [hover3, setHover3] = useState('crimson');
  return (
    <section className="services" id="services">
      <div className="max-width">
        <h2 className="title">My services</h2>

        <div className="services-content">
          <div className="card" onMouseEnter={() => {setHover1('white')}} onMouseLeave={() => {setHover1('crimson')}}>
            <div className="box">
              {/* <i className="fa fa-paint-brush"></i> */}
              <FontAwesomeIcon
                  icon={faPaintbrush}
                  style={{ color: hover1, fontSize: "50px", transition: "color 0.3s ease"}}
                />
              <div className="text">Web Design</div>
              <p>
              Experience of working in multiple industries i.e. Healthcare, E-commerce, E-learning systems, News portals, ERP systems etc, Restaurant and Fintech.
              </p>
            </div>
          </div>

          <div className="card" onMouseEnter={() => {setHover2('white')}} onMouseLeave={() => {setHover2('crimson')}}>
            <div className="box">
              {/* <i className="fa fa-line-chart"></i> */}
              <FontAwesomeIcon
                  icon={faLineChart}
                  style={{ color: hover2, fontSize: "50px", transition: "color 0.3s ease"}}
                />
              <div className="text">Advertising</div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                magnam distinctio, temporibus laboriosam magni ab!
              </p>
            </div>
          </div>

          <div className="card" onMouseEnter={() => {setHover3('white')}} onMouseLeave={() => {setHover3('crimson')}}>
            <div className="box">
              {/* <i className="fa fa-code"></i> */}
              <FontAwesomeIcon
                  icon={faCode}
                  style={{ color: hover3, fontSize: "50px", transition: "color 0.3s ease"}}
                />
              <div className="text">Apps Design</div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                magnam distinctio, temporibus laboriosam magni ab!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
