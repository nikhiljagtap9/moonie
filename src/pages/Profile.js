import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { forgotPasswordAction, sendVerificationEmailAction, getAll2FAMethodsAction, start2FASetupAction, complete2FASetupAction, disable2FAMethodAction } from "../actions/authAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LocalError from "../components/Error/validationError";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [methods, setMethods] = useState(null);
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [kycTier, setKycTier] = useState('');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState('');
  const [emailVerifiedAt, setEmailVerifiedAt] = useState('');
  // const [tier2VerifiedAt, setTier2VerifiedAt] = useState('');
  // const [tier3VerifiedAt, setTier3VerifiedAt] = useState('');
  const [setupData, setSetupData] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [code, setCode] = useState("");
  const [disablePassword, setDisablePassword] = useState("");
  const [disablingMethod, setDisablingMethod] = useState(null); // method key like "google_auth"


  const openModal = async () => {
    setIsModalOpen(true);
    setLoading(true);
    const data = await dispatch(getAll2FAMethodsAction());
    console.log("Fetched 2FA methods:", data);
    if (data) {
      setMethods(data);
    }
    setLoading(false);
  }
  const closeModal = () => {
    setIsModalOpen(false);
    setMethods(null);
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

  // Start 2FA setup
  const handleStartSetup = async (method) => {
    const formData = { method };

    const result = await dispatch(start2FASetupAction(formData, navigate));
    if (result) {
      setSetupData(result);
      setSelectedMethod(method);
    }
  };

  // Complete 2FA setup
  const handleVerify2FACode = async () => {
    const payload = {
      method: selectedMethod, // e.g. "google_auth"
      otp: code,
    };

    const data = await dispatch(complete2FASetupAction(payload, navigate));
    if (data) {
      // Clear form and go back to method list view
      setCode('');
      setSetupData(null);
      setSelectedMethod(null);
      // refresh methods list
      openModal();
    }
  }

  // Disable 2FA method
  const handleDisable2FAMethod = async (methodKey) => {
    const payload = {
      method: methodKey,
      password: disablePassword,
    };

    const response = await dispatch(disable2FAMethodAction(payload)); // your disable logic
    if (response) {
      setDisablePassword('');
      setDisablingMethod(null);
      // refresh methods list
      openModal();
    }
  };



  useEffect(() => {
    const profileString = sessionStorage.getItem('profile') || localStorage.getItem('profile');

    if (profileString) {
      try {
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
      } catch {

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
                <button className={`nav-link list-group-item list-group-item-action ${activeTab === "verifyEmail" ? "active" : ""}`} onClick={() => setActiveTab("verifyEmail")}>Verify Email</button>
                {/* <button className={`nav-link list-group-item list-group-item-action ${activeTab === "password" ? "active" : ""}`} onClick={() => setActiveTab("password")}>Change Password</button> */}
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
                  }) => (
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
                                <input type="email" readOnly name="email" className="form-control" value={email} onChange={handleChange} />
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
              width: "50%",
              position: "relative",
              textAlign: "center",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div className="modal-header" style={{ fontSize: 20, fontWeight: "bold", textAlign: "left" }}>
              Select 2FA Method
              <span className="close" onClick={closeModal} style={{ position: "absolute", right: 20, cursor: "pointer", color: "#f33" }}>
                &times;
              </span>
            </div>
            {/* here object is retrun that way Object.entries used it*/}
            <div className="modal-body">
              {loading && <p>Loading...</p>}

              {!loading && !setupData && methods && Object.entries(methods).length > 0 && (
                Object.entries(methods).map(([key, method]) => (
                  <div key={key} className="mb-3 p-3 border rounded">
                    <h6>{method.name}</h6>
                    <p>{method.description}</p>
                    <p>
                      <strong>Enabled:</strong> {method.is_enabled ? "Yes" : "No"}<br />
                      <strong>Default:</strong> {method.is_default ? "Yes" : "No"}
                    </p>
                    {method.is_enabled ? (
                      <>
                        {disablingMethod === key ? (
                          <div className="mt-2">
                            <div className="d-flex justify-content-center">
                              <input
                                type="password"
                                className="form-control mb-2"
                                placeholder="Enter your password to disable"
                                style={{ width: "50%" }}
                                value={disablePassword}
                                onChange={(e) => setDisablePassword(e.target.value)}
                              />
                            </div>
                            <button
                              onClick={() => handleDisable2FAMethod(key)}
                              className="btn btn-sm btn-danger me-2"
                            >
                              Confirm Disable {method.name}
                            </button>
                            <button
                              className="btn btn-sm btn-secondary"
                              onClick={() => {
                                setDisablingMethod(null);
                                setDisablePassword("");
                              }}
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => setDisablingMethod(key)}
                          >
                            Disable {method.name}
                          </button>
                        )}
                      </>
                    ) : (
                      <button onClick={() => handleStartSetup(key)} className="btn btn-sm btn-primary">
                        Enable {method.name}
                      </button>
                    )}

                  </div>
                ))
              )}

              {!loading && (!methods || Object.entries(methods).length === 0) && (
                <p>No 2FA methods available.</p>
              )}

              {/* display google auth scanner*/}
              {setupData && (
                <div className="mt-4 p-3">
                  <button
                    className="btn btn-secondary mb-3"
                    onClick={() => {
                      setSetupData(null);
                      setSelectedMethod(null);
                    }}
                  >
                    ← Back to 2FA Methods
                  </button>
                  <h5>{selectedMethod === 'google_auth' ? "Google Authenticator Setup" : "Email Verification Setup"}</h5>

                  {selectedMethod === 'google_auth' && (
                    <>
                      <img
                        src={`data:image/png;base64,${setupData.qr_code_url}`}
                        alt="QR Code"
                        className="mb-3"
                        style={{ width: '200px', height: '200px' }}
                      />
                      <p><strong>Manual Entry Key:</strong> {setupData.manual_entry_key}</p>
                    </>
                  )}

                  <h6>Instructions:</h6>
                  <ul className="list-unstyled ps-4">
                    {setupData.instructions.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                  <p><strong>Expires At:</strong> {setupData.expires_at}</p>

                 

                </div>
              )}

              {/* display email auth screen*/}
              {selectedMethod === 'email' && (
                <>
                  <h5>Email Verification Setup</h5>
                  <p>A verification code has been sent to your registered email address.</p>
                 
                </>
              )}
              
              {selectedMethod && (
                <>
                <div className="d-flex justify-content-center">
                   <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Enter verification code"
                    style={{ width: "50%" }}
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                   </div>
                  <button onClick={handleVerify2FACode}
                    className="btn btn-success"
                  >
                    Verify Code
                  </button>
                </>
               
              )}
            </div>


          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
