import React, { useState, useEffect } from 'react';
import { Formik } from "formik";
import { Link, useNavigate } from 'react-router-dom';
import { getCategories } from '../services/commonService'
import { createApplicationAction } from '../actions/authAction'
import { useDispatch } from "react-redux";
import { applicationSchema } from "../validationSchema/validationSchema";
import LocalError from "../components/Error/validationError";

const CreateApp = () => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const { data } = await getCategories();
    setCategories(data?.data || []);
  };

  const handleSubmitForm = async (values, { setSubmitting, resetForm }) => {
    try {
      // Dispatch the action to handle the signup API call
      await dispatch(createApplicationAction(values, navigate));

      // Reset the form fields after successful submission
      resetForm();
      navigate("/listing"); // Replace "/dashboard" with the desired route
    } catch (error) {
      console.error("Error during form submission:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setSubmitting(false); // Stop loading state
    }
  };


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
            <Formik
              initialValues={{
                name: "",
                category_id: "",
                description: "",
                website: ""
              }}
              validationSchema={applicationSchema}
              onSubmit={handleSubmitForm}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit, // Ensure this is provided
              }) => (
                <form className="dez-form p-b30" onSubmit={handleSubmit}> {/* Ensure this is here */}

                  <div className="dez-separator-outer m-b5">
                    <div className="dez-separator bg-primary style-liner"></div>
                  </div>

                  <div className="singl_input">
                    <div className="labl_input">App Name</div>
                    <input type="text" name="name"
                      value={values.name}
                      onChange={handleChange} placeholder="Enter App Name" className="input_text" />
                    <LocalError touched={touched.name} error={errors.name} />
                  </div>

                  <div className="singl_input">
                    <div className="labl_input">Website URL</div>
                    <input type="text" name="website"
                      value={values.website}
                      onChange={handleChange} placeholder="Enter Website URL" className="input_text" />
                    <LocalError touched={touched.website} error={errors.website} />
                  </div>

                  <div className="singl_input">
                    <div className="labl_input">Description</div>
                    <input type="text" name="description"
                      value={values.description}
                      onChange={handleChange} placeholder="Enter Website URL" className="input_text" />
                    <LocalError touched={touched.description} error={errors.description} />
                  </div>

                  <div className="singl_input">
                    <div className="labl_input">Select Category</div>
                    <select className="input_text" name="category_id" onChange={handleChange}>
                      <option value="">-- Select Category --</option>
                      {categories.map((cat, index) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                    <LocalError touched={touched.category_id} error={errors.category_id} />
                  </div>

                  <div className="text-center bottom">
                    <button
                      type="submit"
                      className="right_btn"
                    >
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
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>

        <div className="clear"></div>
      </div>
    </>
  );
};

export default CreateApp;
