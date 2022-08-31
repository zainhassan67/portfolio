import React from "react";
import "./Teams.css";
import profile1 from "./profile-1.jpeg";
import profile2 from "./profile-2.jpeg";
import profile3 from "./profile-3.jpeg";
import profile4 from "./profile-4.jpeg";
import profile5 from "./profile-5.jpeg";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

// function based component
function Teams() {
  return (
    <section class="teams" id="teams">
      <div class="max-width">
        <h2 class="title">My teams</h2>
        <div class="carousel owl-carousel">
          <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={5}
          >
            <Slider>
              <Slide index={0}>
            <div class="card">
            <div class="box">
              <img src={profile1} alt="profile-1.jpeg" />
              <div class="text">Martin</div>
              <p>Great to work with.</p>
            </div>
          </div>
          </Slide>
          <Slide index={1}>
          <div class="card">
            <div class="box">
              <img src={profile2} alt="profile-2.jpeg" />
              <div class="text">Ahmad Ali</div>
              <p>Go</p>
            </div>
          </div>
          </Slide>
          <Slide index={2}>
          <div class="card">
            <div class="box">
              <img src={profile3} alt="profile-3.jpeg" />
              <div class="text">Someone name</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          </Slide>
          <Slide index={3}>
          <div class="card">
            <div class="box">
              <img src={profile4} alt="profile-4.jpeg" />
              <div class="text">Someone name</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          </Slide>
          <Slide index={4}>
          <div class="card">
            <div class="box">
              <img src={profile5} alt="profile-5.jpeg" />
              <div class="text">Someone name</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          </Slide>
          </Slider>
          </CarouselProvider>
        </div>
      </div>
    </section>
  );
}

export default Teams;
