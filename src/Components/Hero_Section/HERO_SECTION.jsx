import React from "react";
import "./HERO.css";
import { TypingHeading } from "./Typing";
import img from '../../IMAGES/haroon-niaz-CgqIfmD0k_Y-unsplash-removebg-preview.jpg'

export default function HERO_SECTION() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-between">
        <div className="col-lg-6 col-md-6 col-sm-12">
          {/* Content for the left column */}
          <div className=" p-3 text-dark mt-5"><TypingHeading/></div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          {/* Content for the right column */}
          <div className=" p-3 ">
            <img className="img" src={img} width='100%' height='400px' alt="Arbab Ahmad Khan" />
          </div>
        </div>
      </div>
    </div>
  );
}
