import React, { useState } from "react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="pc-container">
      <div className="pc-content">
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-lg-5 col-xxl-3">
                <div className="card overflow-hidden">
                  <div className="card-body position-relative">
                    <div className="text-center mt-3">
                      <div className="chat-avtar d-inline-flex mx-auto">
                        <img
                          className="rounded-circle img-fluid wid-90 img-thumbnail"
                          src="https://html.phoenixcoded.net/light-able/bootstrap/assets/images/user/avatar-1.jpg"
                          alt="User"
                        />
                        <i className="chat-badge bg-success me-2 mb-2"></i>
                      </div>
                      <h5 className="mb-0">William Bond</h5>
                    </div>
                  </div>
                  <div className="nav flex-column nav-pills list-group list-group-flush account-pills mb-0">
                    <button
                      className={`nav-link list-group-item list-group-item-action ${
                        activeTab === "overview" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("overview")}
                    >
                      <span className="f-w-500">
                        <i className="ph-duotone ph-user-circle m-r-10"></i>
                        Profile Overview
                      </span>
                    </button>
                    <button
                      className={`nav-link list-group-item list-group-item-action ${
                        activeTab === "info" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("info")}
                    >
                      <span className="f-w-500">
                        <i className="ph-duotone ph-clipboard-text m-r-10"></i>
                        Personal Information
                      </span>
                    </button>
                    <button
                      className={`nav-link list-group-item list-group-item-action ${
                        activeTab === "password" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("password")}
                    >
                      <span className="f-w-500">
                        <i className="ph-duotone ph-key m-r-10"></i>
                        Change Password
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-lg-7 col-xxl-9">
                <div className="tab-content">
                  {activeTab === "overview" && (
                    <div className="tab-pane show active">
                      <div className="card">
                        <div className="card-header">
                          <h5>Personal Details</h5>
                        </div>
                        <div className="card-body">
                          <ul className="list-group list-group-flush">
                            {/* Overview content... */}
                            <li className="list-group-item">Full Name: Anshan Handgun</li>
                            <li className="list-group-item">Email: demo@sample.com</li>
                            <li className="list-group-item">Phone: (+1-876) 8654 239 581</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "info" && (
                    <div className="tab-pane show active">
                      <div className="card">
                        <div className="card-header">
                          <h5>Personal Information</h5>
                        </div>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-sm-6">
                              <label className="form-label">First Name</label>
                              <input type="text" className="form-control" defaultValue="Anshan" />
                            </div>
                            <div className="col-sm-6">
                              <label className="form-label">Last Name</label>
                              <input type="text" className="form-control" defaultValue="Handgun" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-end btn-page">
                        <button className="btn btn-outline-secondary">Cancel</button>
                        <button className="btn btn-primary">Update Profile</button>
                      </div>
                    </div>
                  )}

                  {activeTab === "password" && (
                    <div className="tab-pane show active">
                      <div className="card">
                        <div className="card-header">
                          <h5>Change Password</h5>
                        </div>
                        <div className="card-body">
                          <div className="mb-3">
                            <label>Current Password</label>
                            <input type="password" className="form-control" />
                          </div>
                          <div className="mb-3">
                            <label>New Password</label>
                            <input type="password" className="form-control" />
                          </div>
                          <div className="mb-3">
                            <label>Confirm Password</label>
                            <input type="password" className="form-control" />
                          </div>
                          <div className="text-end">
                            <button className="btn btn-outline-secondary me-2">Cancel</button>
                            <button className="btn btn-primary">Change Password</button>
                          </div>
                        </div>
                      </div>
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
};

export default Profile;
