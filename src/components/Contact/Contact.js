import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarker, faUser } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <section class="contact" id="contact">
      <div class="max-width">
        <h2 class="title">Contact me</h2>

        <div class="contact-content">
          <div class="column left">
            <div class="text">Get in Touch</div>
            <p>
              
            </p>
            <div class="icons">
              <div class="row">
              {/* <i class="fa fa-user"></i> */}
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ color: "crimson", fontSize: "25px" }}
                />
                <div class="info">
                  <div class="head">Name</div>
                  <div class="sub-title">Zain Ul Hassan</div>
                </div>
              </div>

              <div class="row">
                {/* <i class="fa fa-map-marker"></i> */}
                <FontAwesomeIcon
                  icon={faMapMarker}
                  style={{ color: "crimson", fontSize: "25px" }}
                />
                <div class="info">
                  <div class="head">Address</div>
                  <div class="sub-title">Lahore, Pakistan</div>
                </div>
              </div>

              <div class="row">
                {/* <i class="fa fa-envelope"></i> */}
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "crimson", fontSize: "25px" }}
                />
                <div class="info">
                  <div class="head">Email</div>
                  <div class="sub-title">zainulhassan866@gmail.com</div>
                </div>
              </div>
            </div>
          </div>

          <div class="column right">
            <div class="text">Message me</div>
            <form action="#">
              <div class="fields">
                <div class="field name">
                  <input type="text" placeholder="Name" required />
                </div>
                <div class="field email">
                  <input type="email" placeholder="Email" required />
                </div>
              </div>
              <div class="field subject">
                <input type="text" placeholder="Subject" required />
              </div>
              <div class="field textarea">
                <textarea
                  placeholder="Describe project..."
                  rows="30"
                  cols="10"
                  required
                ></textarea>
              </div>
              <div class="button">
                <button type="submit">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
