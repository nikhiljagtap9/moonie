import React, { useState } from 'react';
import { Formik } from "formik";
import { signUpAction } from "../actions/authAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUpSchema } from "../validationSchema/validationSchema";

function Registration() {
  const [showPass, setShowPass] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('login');

  const handleSubmitForm = async (values, { setSubmitting, resetForm }) => {
    try {
      console.log("Form values inside handleSubmitForm:", values); // Debugging the form values
      debugger;
      // Dispatch the action to handle the signup API call
      await dispatch(signUpAction(values, navigate));

      // Reset the form fields after successful submission
      resetForm();

      // Optionally, navigate to another page (e.g., dashboard, login)
      navigate("/dashboard"); // Replace "/dashboard" with the desired route
    } catch (error) {
      console.error("Error during form submission:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setSubmitting(false); // Stop loading state
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
                  <a href="/" className="logo-white">
                    <img src="/assets/home/images/logo-white.png" alt="Logo White" />
                  </a>
                </div>

                <div className="clearfix"></div>

                <div className="tab-content nav p-b30 tab">
                  {/* LOGIN TAB */}
                  {activeTab === 'login' && (
                    <div className="tab-pane active">
                      <Formik
                        initialValues={{
                          FirstName: "",
                          LastName: "",
                          Email: "",
                          Password: "",
                          CPassword: ""
                        }}
                        validationSchema={signUpSchema}
                        onSubmit={async (values, { setSubmitting, resetForm }) => {
                          console.log("Form values from Formik onSubmit:", values); // Log the values here
                          setSubmitting(true);
                          await handleSubmitForm(values, { setSubmitting, resetForm });
                          setSubmitting(false);
                        }}
                      >
                        {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleSubmit, // Ensure this is provided
                        }) => (
                          <form className="dez-form p-b30" onSubmit={handleSubmit}> {/* Ensure this is here */}
                            <h3 className="form-title m-t0">Create your account</h3>
                            <div className="dez-separator-outer m-b5">
                              <div className="dez-separator bg-primary style-liner"></div>
                            </div>

                            <div className="form-group half_inp1">
                              <input
                                required
                                className="form-control"
                                placeholder="First Name"
                                type="text"
                                id="firstname"
                                name="FirstName"
                                value={values.FirstName}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="form-group half_inp2">
                              <input
                                required
                                className="form-control"
                                placeholder="Last Name"
                                id="lastname"
                                type="text"
                                name="LastName"
                                value={values.LastName}
                                onChange={handleChange}
                              />
                            </div>

                            <div className="form-group">
                              <input
                                required
                                className="form-control"
                                placeholder="Email ID"
                                id="email"
                                type="email"
                                name="Email"
                                value={values.Email}
                                onChange={handleChange}
                              />
                            </div>

                            <div className="form-group half_inp1">
                              <input
                                required
                                className="form-control"
                                placeholder="Enter Password"
                                id="password"
                                name="Password"
                                type="password"
                                value={values.Password}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="form-group half_inp2">
                              <input
                                required
                                className="form-control"
                                placeholder="Re-enter Password"
                                id="cpassword"
                                name="CPassword"
                                type="password"
                                value={values.CPassword}
                                onChange={handleChange}
                              />
                            </div>

                            <div className="text-center bottom">
                              <button
                                type="submit"
                                className="site-button button-md btn-block text-white cret_ac_text"
                              >
                                Create an account
                              </button>
                            </div>
                          </form>
                        )}
                      </Formik>
                    </div>
                  )}

                  {/* Other tabs (forgot password, registration, etc.) */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default Registration;
