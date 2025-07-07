import React, { useState,useEffect } from "react";
import { Formik } from "formik";
import { forgotPasswordAction,sendVerificationEmailAction } from "../actions/authAction";
import { forgotPasswordSchema } from "../validationSchema/validationSchema";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LocalError from "../components/Error/validationError";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [kycTier, setKycTier] = useState('');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState('');
  const [emailVerifiedAt, setEmailVerifiedAt] = useState('');
  // const [tier2VerifiedAt, setTier2VerifiedAt] = useState('');
  // const [tier3VerifiedAt, setTier3VerifiedAt] = useState('');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmitForm = async (values, { setSubmitting, resetForm }) => {
      try {
        // Dispatch the action to handle the signup API call
        await dispatch(forgotPasswordAction(values, navigate));
  
        // Reset the form fields after successful submission
        resetForm();
      } catch (error) {
        console.error("Error during form submission:", error);
        alert("There was an error submitting the form. Please try again.");
      } finally {
        setSubmitting(false); // Stop loading state
      }
  };

  const handleSubmitSendVerificationEmail = async (values, { setSubmitting, resetForm }) => {
      try {
        // Dispatch the action to handle the signup API call
        await dispatch(sendVerificationEmailAction(values, navigate));

      } catch (error) {
        console.error("Error during form submission:", error);
        alert("There was an error submitting the form. Please try again.");
      } finally {
        setSubmitting(false); // Stop loading state
      }
  };

  useEffect(()=> {
    const profileString = sessionStorage.getItem('profile') || localStorage.getItem('profile');

    if(profileString){
      try{
        const profile = JSON.parse(profileString);
        const first_name = profile?.user?.first_name || '';
        const last_name = profile?.user?.last_name || '';
        const mail = profile?.user?.email || '';
        const kyc_tier = profile?.user?.kyc_tier || '';
        const two_factor_enabled = profile?.user?.two_factor_enabled || '';
        const email_verified_at = profile?.user?.email_verified_at || '';
        // const tier_2_verified_at = profile?.user?.tier_2_verified_at || '';
        // const tier_3_verified_at = profile?.user?.tier_3_verified_at || '';
        setFirstName(first_name);
        setLastName(last_name);
        setEmail(mail);
        setKycTier(kyc_tier);
        setTwoFactorEnabled(two_factor_enabled);
        setEmailVerifiedAt(email_verified_at);
        // setTier2VerifiedAt(tier_2_verified_at);
        // setTier3VerifiedAt(tier_3_verified_at);
      }catch{

      }
    }
  })

  return (
    <div className="pc-container">
      <div className="pc-content">
        <div className="row">
          <div className="col-lg-5 col-xxl-3">
            <div className="card overflow-hidden">
              <div className="card-body text-center">
                <div className="chat-avtar d-inline-flex mx-auto">
                  <img
                    className="rounded-circle img-fluid wid-90 img-thumbnail"
                    src="https://html.phoenixcoded.net/light-able/bootstrap/assets/images/user/avatar-1.jpg"
                    alt="User"
                  />
                  <i className="chat-badge bg-success me-2 mb-2"></i>
                </div>
                <h5 className="mb-0">{firstName} {lastName}</h5>
              </div>

              <div className="nav flex-column nav-pills list-group list-group-flush account-pills mb-0">
                <button className={`nav-link list-group-item list-group-item-action ${activeTab === "overview" ? "active" : ""}`} onClick={() => setActiveTab("overview")}>Profile Overview</button>
                <button className={`nav-link list-group-item list-group-item-action ${activeTab === "info" ? "active" : ""}`} onClick={() => setActiveTab("info")}>Forgot Password</button>
                <button className={`nav-link list-group-item list-group-item-action ${activeTab === "verifyEmail" ? "active" : ""}`} onClick={() => setActiveTab("verifyEmail")}>Verify Email</button>
                <button className={`nav-link list-group-item list-group-item-action ${activeTab === "password" ? "active" : ""}`} onClick={() => setActiveTab("password")}>Change Password</button>
                <button className={`nav-link list-group-item list-group-item-action ${activeTab === "2fa" ? "active" : ""}`} onClick={() => setActiveTab("2fa")}>Two Factor Authentication</button>
              </div>
            </div>
          </div>

          <div className="col-lg-7 col-xxl-9">
            <div className="tab-content">
              {activeTab === "overview" && (
                <div className="card">
                  <div className="card-header">
                    <h5>Personal Details</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item px-0 pt-0">
                        <div className="row">
                          <div className="col-md-6">
                            <p className="mb-1 text-muted">Full Name</p>
                            <p className="mb-0">{firstName} {lastName}</p>
                          </div>
                          <div className="col-md-6">
                            <p className="mb-1 text-muted">Email</p>
                            <p className="mb-0">{email}</p>
                          </div>
                        </div>
                      </li>

                      <li className="list-group-item px-0">
                        <div className="row">
                          <div className="col-md-6">
                            <p className="mb-1 text-muted">KYC</p>
                            <p className="mb-0">{kycTier}</p>
                          </div>
                          <div className="col-md-6">
                            <p className="mb-1 text-muted">Two Factor Enabled</p>
                            <p className="mb-0">{twoFactorEnabled ? 'Yes' : 'No'}</p>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item px-0">
                        <div className="row">
                          <div className="col-md-6">
                            <p className="mb-1 text-muted">Email Verified</p>
                            <p className="mb-0">{emailVerifiedAt ? 'Yes' : 'No'}</p>
                          </div>
                          {/* <div className="col-md-6">
                            <p className="mb-1 text-muted">Tier 2 Verified</p>
                            <p className="mb-0">{tier2VerifiedAt ? 'Yes' : 'No'}</p>
                          </div> */}
                        </div>
                      </li>
                      {/* <li className="list-group-item px-0 pb-0">
                        <p className="mb-1 text-muted">Tier 3 Verified</p>
                        <p className="mb-0">{tier3VerifiedAt ? 'Yes' : 'No'}</p>
                      </li> */}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab == 'info' && (
                <Formik
                            initialValues={{
                                email: "",
                            }}
                            validationSchema={forgotPasswordSchema}
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
                handleSubmit,
            })=> (
                <form onSubmit={handleSubmit}>       
                  <div className="card">
                    <div className="card-header">
                      <h5>Forgot Password</h5>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="mb-3">
                            <label className="form-label">Email <span className="text-danger">*</span></label>
                            <input type="email" name="email" className="form-control" value={values.email} onChange={handleChange}/>
                             <LocalError touched={touched.email} error={errors.email} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-end btn-page">
                    <button type="submit" className="btn btn-primary">Send Reset Link</button>
                  </div>
                </form>
                 )}
                </Formik>
              )}

              {activeTab == 'verifyEmail' && (
                <Formik
                            initialValues={{
                                email: "",
                            }}
                            onSubmit={async (values, { setSubmitting, resetForm }) => {
                                console.log("Form values from Formik onSubmit:", values); // Log the values here
                                setSubmitting(true);
                                await handleSubmitSendVerificationEmail(values, { setSubmitting, resetForm });
                                setSubmitting(false);
                            }}
                        >
                          {({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,
            })=> (
                <form onSubmit={handleSubmit}>       
                  <div className="card">
                    <div className="card-header">
                      <h5>Verify Email</h5>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="mb-3">
                            <label className="form-label">Email <span className="text-danger">*</span></label>
                            <input type="email" readOnly name="email" className="form-control" value={email} onChange={handleChange}/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-end btn-page">
                    <button type="submit" className="btn btn-primary">Send Verification Email</button>
                  </div>
                </form>
                 )}
                </Formik>
              )}

              {activeTab === "password" && (
                <div>
                  <div className="card">
                    <div className="card-header">
                      <h5>Change Password</h5>
                    </div>
                    <div className="card-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item pt-0 px-0">
                          <div className="row mb-0">
                            <label className="col-form-label col-md-4 col-sm-12 text-md-end">
                              Current Password <span className="text-danger">*</span>
                            </label>
                            <div className="col-md-8 col-sm-12">
                              <input type="password" className="form-control" />
                              {/* <div className="form-text">
                                Forgot password?{" "}
                                <a href="#" className="link-primary">
                                  Click here
                                </a>
                              </div> */}
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item px-0">
                          <div className="row mb-0">
                            <label className="col-form-label col-md-4 col-sm-12 text-md-end">
                              New Password <span className="text-danger">*</span>
                            </label>
                            <div className="col-md-8 col-sm-12">
                              <input type="password" className="form-control" />
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item pb-0 px-0">
                          <div className="row mb-0">
                            <label className="col-form-label col-md-4 col-sm-12 text-md-end">
                              Confirm Password <span className="text-danger">*</span>
                            </label>
                            <div className="col-md-8 col-sm-12">
                              <input type="password" className="form-control" />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                    <div className="card-body text-end">
                      <button className="btn btn-outline-secondary me-2">Cancel</button>
                      <button className="btn btn-primary">Change Password</button>
                    </div>
                </div>
              )}



              {activeTab === "2fa" && (
                <div className="card">
                  <div className="card-header">
                    <h5>Two Factor Authentication</h5>
                  </div>
                  <div className="card-body">
                    <p>
                      Two-factor authentication is an enhanced security measure.
                      Once enabled, you'll be required to give two types of identification when logging in.
                    </p>
                    <button className="btn btn-primary" onClick={openModal}>
                      Enable Security
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 2FA Modal */}
      {isModalOpen && (
        <div
          className="modal"
          style={{
            display: "block",
            position: "fixed",
            zIndex: 9999,
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            overflow: "auto",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
          onClick={(e) => {
            if (e.target.className === "modal") closeModal();
          }}
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: "#fff",
              margin: "10% auto",
              padding: "20px",
              borderRadius: "10px",
              width: "500px",
              position: "relative",
              textAlign: "center",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div className="modal-header" style={{ fontSize: 20, fontWeight: "bold", textAlign: "left" }}>
              2FA Setup
              <span className="close" onClick={closeModal} style={{ position: "absolute", right: 20, cursor: "pointer", color: "#f33" }}>
                &times;
              </span>
            </div>
            <button className="btn btn-secondary mt-3">Generate 2FA QR Code</button>
            <div className="mt-3">Scan the QR code using Google Authenticator or Authy app.</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
