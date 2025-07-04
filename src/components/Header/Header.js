import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { ROUTESCONSTANTS } from "../../constants/authConstants";




const Header = () => {
  return (
    <>
      <div className="loader-bg">
         <div className="loader-track">
            <div className="loader-fill"></div>
         </div>
      </div>
      <Sidebar />

     <header className="pc-header">
      <div className="header-wrapper">
        {/* [Mobile Media Block] start */}
        <div className="me-auto pc-mob-drp">
          <ul className="list-unstyled">
            <li className="pc-h-item pc-sidebar-collapse">
              <a href="#" className="pc-head-link ms-0" id="sidebar-hide">
                <i className="ti ti-menu-2"></i>
              </a>
            </li>
            <li className="pc-h-item pc-sidebar-popup">
              <a href="#" className="pc-head-link ms-0" id="mobile-collapse">
                <i className="ti ti-menu-2"></i>
              </a>
            </li>
            <li className="dropdown pc-h-item d-inline-flex d-md-none">
              <a
                className="pc-head-link dropdown-toggle arrow-none m-0"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <i className="ph-duotone ph-magnifying-glass"></i>
              </a>
              <div className="dropdown-menu pc-h-dropdown drp-search">
                <form className="px-3">
                  <div className="mb-0 d-flex align-items-center">
                    <input
                      type="search"
                      className="form-control border-0 shadow-none"
                      placeholder="Search..."
                    />
                    <button className="btn btn-light-secondary btn-search">
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </li>
            <li className="pc-h-item d-none d-md-inline-flex">
              <form className="form-search">
                <i className="ph-duotone ph-magnifying-glass icon-search"></i>
                <input type="search" className="form-control" placeholder="Search..." />
                <button className="btn btn-search" style={{ padding: 0 }}>
                  <kbd>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icon-tabler-search"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                      <path d="M21 21l-6 -6" />
                    </svg>
                  </kbd>
                </button>
              </form>
            </li>
          </ul>
        </div>
        {/* [Mobile Media Block end] */}

        <div className="ms-auto">
          <ul className="list-unstyled d-flex align-items-center">
            {/* Theme Toggle */}
            <li className="dropdown pc-h-item d-none d-md-inline-flex">
              <a
                className="pc-head-link dropdown-toggle arrow-none me-0"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <i className="ph-duotone ph-sun-dim"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-end pc-h-dropdown">
                <a href="#!" className="dropdown-item">
                  <i className="ph-duotone ph-moon"></i>
                  <span>Dark</span>
                </a>
                <a href="#!" className="dropdown-item">
                  <i className="ph-duotone ph-sun-dim"></i>
                  <span>Light</span>
                </a>
                <a href="#!" className="dropdown-item">
                  <i className="ph-duotone ph-cpu"></i>
                  <span>Default</span>
                </a>
              </div>
            </li>

            {/* Notification */}
            <li className="dropdown pc-h-item">
              <a
                className="pc-head-link dropdown-toggle arrow-none me-0"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <i className="ph-duotone ph-bell"></i>
                <span className="badge bg-success pc-h-badge">3</span>
              </a>
              <div className="dropdown-menu dropdown-notification dropdown-menu-end pc-h-dropdown">
                {/* Notification Items */}
                <div className="dropdown-header d-flex align-items-center justify-content-between">
                  <h5 className="m-0">Notifications</h5>
                  <ul className="list-inline ms-auto mb-0">
                    <li className="list-inline-item">
                      <a href="#" className="avtar avtar-s btn-link-hover-primary">
                        <i className="ti ti-link f-18"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  className="dropdown-body text-wrap header-notification-scroll position-relative"
                  style={{ maxHeight: 'calc(100vh - 235px)' }}
                >
                  <ul className="list-group list-group-flush">
                    {/* Notification Item */}
                    <li className="list-group-item">
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                           {/* {profile_photo} */}
                          <img src="assets/images/user/avatar-2.jpg" alt="user" className="user-avtar avtar avtar-s" />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <div className="d-flex justify-content-between">
                            <h6 className="mb-0 text-truncate">New Member Subscribed</h6>
                            <span className="text-sm">2 min ago</span>
                          </div>
                          <p className="mt-1 mb-2 text-truncate">
                            Lorem Ipsum has been the industry's standard dummy text.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="dropdown-footer">
                  <div className="row g-3">
                    <div className="col-6">
                      <div className="d-grid">
                        <button className="btn btn-primary">Archive all</button>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-grid">
                        <button className="btn btn-outline-secondary">Mark all as read</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* Profile */}
            <li className="dropdown pc-h-item header-user-profile">
              <a
                className="pc-head-link dropdown-toggle arrow-none me-0"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                <img src="assets/images/user/avatar-2.jpg" alt="user" className="user-avtar" />
              </a>
              <div className="dropdown-menu dropdown-user-profile dropdown-menu-end pc-h-dropdown">
                <div className="dropdown-header d-flex align-items-center justify-content-between">
                  <h5 className="m-0">Profile</h5>
                </div>
                <div className="dropdown-body">
                  <ul className="list-group list-group-flush w-100">
                    <li className="list-group-item">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <img src="assets/images/user/avatar-2.jpg" alt="user" className="wid-50 rounded-circle" />
                        </div>
                        <div className="flex-grow-1 mx-3">
                          <h5 className="mb-0">User</h5>
                          <a className="link-primary" href="#">
                            info@company.io
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <a href={ROUTESCONSTANTS?.UPDATE_KYC} class="dropdown-item">
                        <span class="d-flex align-items-center">
                          <i class="ph-duotone ph-newspaper-clipping"></i>
                          <span>Update KYC</span>
                        </span>
                      </a>
                      {/* <a href="#" class="dropdown-item">
                        <span class="d-flex align-items-center">
                        <i class="ph-duotone ph-key"></i>
                        <span>Change password</span>
                        </span>
                      </a> */}
                       <a href={ROUTESCONSTANTS?.PROFILE} class="dropdown-item">
                        <span class="d-flex align-items-center">
                        <i class="ph-duotone ph-user-circle"></i>
                        <span>Edit profile</span>
                        </span>
                      </a>
                      <a href={ROUTESCONSTANTS?.LOGOUT } class="dropdown-item">
                        <span class="d-flex align-items-center">
                        <i class="ph-duotone ph-power"></i>
                        <span>Logout</span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
