import React, { useState } from 'react';

export default function Register() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="page-wraper">
      {/* <div id="loading-area"></div> */}

      <div className="browse-job login-style3">
        <div
          className="bg-img-fix"
          style={{
            backgroundImage: 'url(/assets/home/images/background/bg6.jpg)',
            height: '100vh',
          }}
        >
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12 bg-white z-index2 relative p-a0 content-scroll skew-section left-bottom">
              <div className="login-form style-2">
                <div className="logo-header text-center p-tb30">
                  <a href="/" className="logo">
                    <img src="/assets/home/images/logo.png" alt="Logo" />
                  </a>
                  <a href="/" className="logo-white">
                    <img src="/assets/home/images/logo-white.png" alt="Logo White" />
                  </a>
                </div>

                <div className="clearfix"></div>

                <div className="tab-content nav p-b30 tab">
                  {/* LOGIN TAB */}
                  {activeTab === 'login' && (
                    <div className="tab-pane active">
                      <form className="dez-form p-b30">
                        <h3 className="form-title m-t0">Create your account</h3>
                        <div className="dez-separator-outer m-b5">
                          <div className="dez-separator bg-primary style-liner"></div>
                        </div>

                        <div className="form-group half_inp1">
                          <input required className="form-control" placeholder="First Name" type="text" />
                        </div>
                        <div className="form-group half_inp2">
                          <input required className="form-control" placeholder="Last Name" type="text" />
                        </div>

                        <div className="form-group">
                          <input required className="form-control" placeholder="Email ID" type="email" />
                        </div>

                        <div className="form-group half_inp1">
                          <input required className="form-control" placeholder="Enter Password" type="password" />
                        </div>
                        <div className="form-group half_inp2">
                          <input required className="form-control" placeholder="Re-enter Password" type="password" />
                        </div>
                      </form>

                      <div className="text-center bottom">
                        <a
                          href="welcome"
                          className="site-button button-md btn-block text-white cret_ac_text"
                        >
                          Create an account
                        </a>
                      </div>
                    </div>
                  )}

                  {/* FORGOT PASSWORD TAB */}
                  {/* {activeTab === 'forgot' && (
                    <div className="tab-pane fade">
                      <form className="dez-form">
                        <h3 className="form-title m-t0">Forget Password ?</h3>
                        <div className="dez-separator-outer m-b5">
                          <div className="dez-separator bg-primary style-liner"></div>
                        </div>
                        <p>Enter your e-mail address below to reset your password. </p>
                        <div className="form-group">
                          <input required className="form-control" placeholder="Email Address" type="email" />
                        </div>
                        <div className="form-group clearfix text-left">
                          <button
                            type="button"
                            className="site-button outline gray"
                            onClick={() => setActiveTab('login')}
                          >
                            Back
                          </button>
                          <button className="site-button float-end">Submit</button>
                        </div>
                      </form>
                    </div>
                  )} */}

                  {/* REGISTRATION TAB */}
                  {/* {activeTab === 'register' && (
                    <div className="tab-pane fade">
                      <form className="dez-form">
                        <h3 className="form-title m-t0">Sign Up</h3>
                        <div className="dez-separator-outer m-b5">
                          <div className="dez-separator bg-primary style-liner"></div>
                        </div>
                        <p>Enter your personal details below: </p>

                        <div className="form-group">
                          <input required className="form-control" placeholder="Full Name" type="text" />
                        </div>
                        <div className="form-group">
                          <input required className="form-control" placeholder="User Name" type="text" />
                        </div>
                        <div className="form-group">
                          <input required className="form-control" placeholder="Email Address" type="email" />
                        </div>
                        <div className="form-group">
                          <input required className="form-control" placeholder="Password" type="password" />
                        </div>
                        <div className="form-group">
                          <input required className="form-control" placeholder="Re-type Your Password" type="password" />
                        </div>

                        <div className="m-b30">
                          <span className="form-check float-start m-r5">
                            <input type="checkbox" className="form-check-input" id="check2" />
                            <label className="form-check-label" htmlFor="check2">
                              I agree to the
                            </label>
                          </span>
                          <label>
                            <a href="#">Terms of Service </a>& <a href="#">Privacy Policy</a>
                          </label>
                        </div>

                        <div className="form-group clearfix text-left">
                          <button
                            type="button"
                            className="site-button outline gray"
                            onClick={() => setActiveTab('login')}
                          >
                            Back
                          </button>
                          <button className="site-button float-end">Submit</button>
                        </div>
                      </form>
                    </div>
                  )} */}

                  {/* Tab Switcher (Optional UI Buttons) */}
                  {/* <div className="text-center mt-3">
                    <button onClick={() => setActiveTab('login')} className="btn btn-link">
                      Login
                    </button>
                    <button onClick={() => setActiveTab('forgot')} className="btn btn-link">
                      Forgot Password
                    </button>
                    <button onClick={() => setActiveTab('register')} className="btn btn-link">
                      Sign Up
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}
