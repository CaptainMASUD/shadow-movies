import React from "react";
import masudImage from "./img/s.png"; // Import the image file

export default function About() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 style={{textAlign:"center",color:"#D24545"}}>Development info</h3>
            <div className="adtmega">
              <div className="adts1">
                <p>
                  "Shadow Movies" is an innovative online platform catering to
                  movie enthusiasts, offering a diverse array of films sourced
                  from various websites. Users can effortlessly navigate
                  through the site, clicking on the "watch" link to instantly
                  view their desired movies or download them directly. The
                  standout feature of Shadow Movies lies in its interactive
                  functionality; users seeking specific movies or series not
                  currently available on the platform can submit requests after
                  logging in. Once a request is made, the platform's
                  administrators promptly add the requested content, ensuring
                  a continuously expanding library. Users receive notifications
                  upon the addition of requested content, enhancing their
                  overall experience and fostering a dynamic community of film
                  aficionados. With its seamless interface and responsive
                  approach to user feedback, Shadow Movies redefines the online
                  movie-watching experience, providing unparalleled convenience
                  and satisfaction to its users.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="aboutf">
              <div className="acard">
                <div className="lines"></div>
                <div className="imgBx">
                  {/* Use the imported image directly */}
                  <img src={masudImage} alt="Masud" className="img-fluid" />
                </div>
                <div className="acontent">
                  <div className="adetails">
                    <h2>
                      Masudul Alam <br />
                      <span>Web & App Developer</span>
                    </h2>
                    <div className="adata">
                      <h3>
                        5<br />
                        <span>Projects</span>
                      </h3>
                      <h3>
                        201 <br />
                        <span>Followers</span>
                      </h3>
                      <h3>
                        2 <br />
                        <span>Following</span>
                      </h3>
                    </div>
                    <div className="abactionbtn">
                      <button className="btn btn-primary">Follow</button>
                      <button className="btn btn-secondary">Message</button>
                    </div>
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
