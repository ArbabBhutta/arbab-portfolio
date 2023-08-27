import React from "react";
import "./HERO.css";
import { TypingHeading } from "./Typing";

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
            <img className="img" src="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym95fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" width='90%' height='400px' alt="Arbab Ahmad Khan" />
          </div>
        </div>
      </div>
    </div>
  );
}
