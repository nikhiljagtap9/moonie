// src/pages/Welcome.js
import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div>
      <style>{`
        .pc-sidebar, .pc-header, .pc-container, .pc-footer {
          display: none;
        }
      `}</style>

      <div className="mone_wrp_text">
        <div className="logo_main">
          <img src="/assets/images/Logo.png" className="wle_logo" alt="Logo" />
        </div>

        <div className="hand_wrp">
          <span className="wave">👋</span>
          <div className="welcom_text1">Welcome</div>
          <div className="welcom_text2">Let's setup your account</div>
          <div className="clear"></div>

          <Link to="/create-app" className="right_btn">
            <span>Let's Go </span>
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-square-rounded-arrow-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 16l4 -4l-4 -4" />
              <path d="M8 12h8" />
              <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
            </svg>
          </Link>
        </div>

        <div className="clear"></div>
      </div>

      <div className="clear"></div>
    </div>
  );
};

export default Welcome;
