import React from 'react';
import { Link } from 'react-router-dom';

const CreateApp = () => {
  return (
    <>
      <style>{`
        .pc-sidebar, .pc-header, .pc-container, .pc-footer {
          display: none;
        }
      `}</style>

      <div className="mone_wrp_text">
        <div className="step_svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-checklist"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8" />
            <path d="M14 19l2 2l4 -4" />
            <path d="M9 8h4" />
            <path d="M9 12h2" />
          </svg>
        </div>

        <div className="clear"></div>

        <div className="app_titl">Create Your First App</div>

        <div className="hand_wrp">
          <div className="form_wrp">
            <div className="singl_input">
              <div className="labl_input">App Name</div>
              <input type="text" placeholder="Enter App Name" className="input_text" />
            </div>

            <div className="singl_input">
              <div className="labl_input">Website URL</div>
              <input type="text" placeholder="Enter Website URL" className="input_text" />
            </div>

            <div className="singl_input">
              <div className="labl_input">Select Category</div>
              <select className="input_text">
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
                <option>Category 4</option>
              </select>
            </div>

            <div className="clear"></div>
          </div>

          <Link to="/listing" className="right_btn">
            <span>Create App</span>
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
    </>
  );
};

export default CreateApp;
