import React from "react";
import "./contact.css";
export default function CONTACT() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div class="parallax3">
            <div className="col-sm-12">
              <div className="container h-100">
                <div className="row h-100 justify-content-center align-items-center">
                  <div className="col-md-6">
                    <h1 className="text-center mb-4">Contact Me!</h1>
                    <form>
                      <div className="mb-3">
                       
                        <input
                          type="text"
                          placeholder="Name"
                          className="form-control"
                          id="username"
                          name="username"
                          required=""
                        />
                      </div>
                      <div className="mb-3">
                       
                        <input
                          type="email"
                          placeholder="Email"
                          className="form-control"
                         
                          required=""
                        />
                      </div>
                      <div className="mb-3">
                       
                        <input
                          type="text"
                          placeholder="Country"
                          className="form-control"
                         
                          required=""
                        />
                      </div>
                      <textarea name="" id="" cols="70" rows="8"></textarea>
                      <div className="btns">
                      <button type="submit" className="cv_btn">
                        Submit
                      </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
