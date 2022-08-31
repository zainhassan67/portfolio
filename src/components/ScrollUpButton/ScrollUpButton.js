import React from "react";
import "./ScrollUpButton.css";
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

function ScrollUpButton() {
  return (
    <div className="scroll-up-button">
      {/* <i class="fa fa-angle-up"></i> */}
      <FontAwesomeIcon
        icon={faAngleUp}
      />
    </div>
  );
}

$(document).ready
(
  function () 
  {
    $(window).scroll
    (
      function () 
      {
        if(this.scrollY > 500)
        {
          $('.scroll-up-button').addClass("show");
        }
        else
        {
          $('.scroll-up-button').removeClass("show");
        }
      }
  );


  $('.scroll-up-button').click
  (
      function ()
      {
        $('html').animate
        (
            {
                scrollTop: 0
            }
        );
      }
  );



});






export default ScrollUpButton;
