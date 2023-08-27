import React from "react";
import './NAV.css'
import HERO_SECTION from './../Hero_Section/HERO_SECTION';
export default function NAVBAR() {
  return (
    <div className="NavHolder">
      <nav className="navbar navbar-expand-lg " >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Arbab Ahmad Khan
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" style={{color:'wheat'}} aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <HERO_SECTION/>
    </div>
  );
}
