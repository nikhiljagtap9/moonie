import React, { useState } from 'react';
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInAction, forgotPasswordAction } from "../actions/authAction";
import { loginSchema, forgotPasswordSchema } from "../validationSchema/validationSchema";
import LocalError from "../components/Error/validationError";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('login');

  const handleLoginFormSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await dispatch(signInAction(values, navigate));
      resetForm();
    } catch (error) {
      console.error("Login error:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleForgotPasswordFormSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await dispatch(forgotPasswordAction(values, navigate));
      resetForm();
    } catch (error) {
      console.error("Forgot password error:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="page-wraper">
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
                </div>

                <div className="tab-content nav p-b30 tab">
                  {/* LOGIN TAB */}
                  {activeTab === 'login' && (
                    <div className="tab-pane active">
                      <Formik
                        initialValues={{ email: "", password: "" }}
                        validationSchema={loginSchema}
                        onSubmit={handleLoginFormSubmit}
                      >
                        {({ values, errors, touched, handleChange, handleSubmit }) => (
                          <form className="dez-form p-b30" onSubmit={handleSubmit}>
                            <h3 className="form-title m-t0">Login</h3>
                            <div className="dez-separator-outer m-b5">
                              <div className="dez-separator bg-primary style-liner"></div>
                            </div>

                            <div className="form-group">
                              <input
                                className="form-control"
                                placeholder="Email ID"
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                required
                              />
                              <LocalError touched={touched.email} error={errors.email} />
                            </div>

                            <div className="form-group">
                              <input
                                className="form-control"
                                placeholder="Enter Password"
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                required
                              />
                              <LocalError touched={touched.password} error={errors.password} />
                            </div>

                            <div className="text-end mb-3">
                              <button
                                type="button"
                                className="btn btn-link mt-2"
                                onClick={() => setActiveTab('forgot')}
                              >
                                Forgot Password?
                              </button>
                              
                            </div>

                            <div className="text-center">
                              <button
                                type="submit"
                                className="site-button button-md btn-block text-white cret_ac_text"
                              >
                                Login
                              </button>
                            </div>
                          </form>
                        )}
                      </Formik>
                    </div>
                  )}

                  {/* FORGOT PASSWORD TAB */}
                  {activeTab === 'forgot' && (
                    <div className="tab-pane active">
                      <Formik
                        initialValues={{ email: "" }}
                        validationSchema={forgotPasswordSchema}
                        onSubmit={handleForgotPasswordFormSubmit}
                      >
                        {({ values, errors, touched, handleChange, handleSubmit }) => (
                          <form onSubmit={handleSubmit}>
                            <h3 className="form-title m-t0">Forgot Password</h3>
                            <div className="dez-separator-outer m-b5">
                              <div className="dez-separator bg-primary style-liner"></div>
                            </div>

                            <div className="form-group">
                              <label>Email <span className="text-danger">*</span></label>
                              <input
                                type="email"
                                name="email"
                                className="form-control"
                                value={values.email}
                                onChange={handleChange}
                              />
                              <LocalError touched={touched.email} error={errors.email} />
                            </div>

                            <div className="text-end mb-3">
                              <button
                                type="button"
                                className="btn btn-link mt-2"
                                onClick={() => setActiveTab('login')}
                              >
                                Back to Login
                              </button>
                            </div>

                            <div className="text-center">
                              <button type="submit" className="site-button button-md btn-block text-white cret_ac_text">
                                Send Reset Link
                              </button>
                            </div>
                          </form>
                        )}
                      </Formik>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default Login;
