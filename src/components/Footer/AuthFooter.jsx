// src/components/Footer/AuthFooter.js
import React from 'react';

const AuthFooter = () => {
  return (
    <>
      {/* Footer */}
      <footer className="site-footer style-1">
        <div className="footer-top style-1">
          <div className="container">
            <div className="row sp20">
              <div className="col-xl-4 col-md-9 col-12">
                <div className="widget widget-logo style-1">
                  <div className="logo-footer style-1 logo-dark">
                    <img src="/images/logo.png" alt="" />
                  </div>
                  <div className="logo-footer style-1 logo-white">
                    <img src="/images/logo-white.png" alt="" />
                  </div>
                  <p className="m-b30">
                    MooniePay is a modern payment aggregator platform designed to simplify how businesses collect and manage payments across Africa,
                  </p>
                </div>
              </div>
              <div className="col-xl-2 col-md-3 col-sm-4">
                <div className="widget widget-links style-1 border-0">
                  <h5 className="m-b15">Useful Links</h5>
                  <ul className="list-line">
                    <li><a href="#">Register</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Privacy & Policy</a></li>
                    <li><a href="#">Testimonial</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-md-3 col-sm-4">
                <div className="widget widget-social style-1 border-0">
                  <h5 className="m-b15">Follow Us</h5>
                  <ul className="list-line m-a0">
                    <li><a href="#">Linked In</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Dribbble</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-12">
                <div className="widget widget-newsletter style-1 border-0">
                  <h5 className="m-b15">Newsletter</h5>
                  <p className="m-b20">Sign up to our archi. point to recent updates & office</p>
                  <div className="subscribe-form m-b20">
                    <form className="dzSubscribe style-1" method="post">
                      <div className="dzSubscribeMsg"></div>
                      <div className="input-group style-1">
                        <input
                          className="form-control"
                          placeholder="Enter an Email"
                          type="email"
                          required
                        />
                        <span className="input-group-btn">
                          <button
                            name="submit"
                            value="Submit"
                            type="submit"
                            className="site-button style-1"
                          >
                            Send
                          </button>
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom style-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <span>
                  Copyright © 2025 <a href="#">Moonie</a>. All rights reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll Top Button */}
      <button className="scroltop fa fa-arrow-up"></button>
    </>
  );
};

export default AuthFooter;
