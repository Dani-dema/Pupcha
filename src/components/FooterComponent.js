import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="punoi">
            <div>
              <h6>Punoi:</h6>
              <i className="fa fa-user fa-lg"></i> Ramadan Dema
              <br />
            </div>
            <div className="text-center">
              <h6>Follow us: </h6>
              <div>
                <a
                  className="btn btn-social-icon "
                  href="https://www.facebook.com/ramadan.dema.7"
                  target="_blank">
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  className="btn btn-social-icon"
                  href="https://www.linkedin.com/in/%F0%9F%91%A8%E2%80%8D%F0%9F%92%BBramadan-dema-128b49193/"
                  target="_blank">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a
                  className="btn btn-social-icon "
                  href="https://www.instagram.com/dani__dema/"
                  target="_blank">
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>© Copyright 2023 R.D</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
