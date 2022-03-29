import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

function FooterPage() {
  return (
    <MDBFooter className="bg-dark text-white text-center text-md-start">
      <div className="container p-4">
        <MDBRow>
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <img
              src="/image/cr7blackwhite.png"
              style={{ filter: "brightness(0.5) invert(1)", width: "80px" }}
            />

            <p style={{ paddingRight: "200px" }}>
              Cristiano Ronaldo dos Santos Aveiro is a Portuguese professional
              footb and four European Golden Shoes, the most by a European
              player.aller who plays as a forward for Premier League club
              Manchester United and captains the Portugal national team. Often
              considered the best player in the world and widely regarded as one
              of the greatest players of all time, Ronaldo has won five Ballon
              d'Or awards
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Services</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-white">
                  Trowsers
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Jerseys
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Shorts
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Soccer Shoes
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0">Contact</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-white">
                  (+93)3785883477
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Address
                </a>
              </li>
              <li>Karachi Site Area Orangi Town</li>
              <li>
                <a href="#!" className="text-white">
                  Link 4
                </a>
              </li>
            </ul>
          </div>
        </MDBRow>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: "black" }}>
        © 2020 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;
