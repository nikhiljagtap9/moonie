import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getCategories,
} from "../services/commonService"; // Assume getApplicationById returns app details
import {
   showApplicationDetailsAction,
   updateApplicationAction
} from "../actions/authAction";
import { applicationSchema } from "../validationSchema/validationSchema";
import LocalError from "../components/Error/validationError";

const EditApp = () => {

  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState(null);
  const dispatch = useDispatch();
  const { ref } = useParams(); // app ref from URL

  useEffect(() => {
    fetchCategories();
    fetchAppDetails();
  }, []);

  const fetchCategories = async () => {
    const { data } = await getCategories();
    setCategories(data?.data || []);
  };

  const fetchAppDetails = async () => {
    const app  = await dispatch(showApplicationDetailsAction({ref})); // Fetch single app
    
    setInitialValues({
      name: app?.name || "",
      website: app?.website || "",
      description: app?.description || "",
      category_id: app?.category.id || "",
    });
  };

  const handleSubmitForm = async (values, { setSubmitting }) => {
    const finalValues = {
      ref, // ensure ref is passed with values
      ...values,
    };
    try {
      await dispatch(updateApplicationAction(finalValues,navigate));
    } catch (error) {
      console.error("Update error:", error);
      alert("Something went wrong during update.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!initialValues) return <p>Loading...</p>;

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
            className="icon icon-tabler icon-tabler-checklist"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8" />
            <path d="M14 19l2 2l4 -4" />
            <path d="M9 8h4" />
            <path d="M9 12h2" />
          </svg>
        </div>

        <div className="app_titl">Edit Your App</div>

        <div className="hand_wrp">
          <div className="form_wrp">
            <Formik
              initialValues={initialValues}
              validationSchema={applicationSchema}
              enableReinitialize={true}
              onSubmit={handleSubmitForm}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,
              }) => (
                <form className="dez-form p-b30" onSubmit={handleSubmit}>
                  <input type="hidden" name="ref" value={ref} />
                  <div className="dez-separator-outer m-b5">
                    <div className="dez-separator bg-primary style-liner"></div>
                  </div>

                  <div className="singl_input">
                    <div className="labl_input">App Name</div>
                    <input
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      placeholder="Enter App Name"
                      className="input_text"
                    />
                    <LocalError touched={touched.name} error={errors.name} />
                  </div>

                  <div className="singl_input">
                    <div className="labl_input">Website URL</div>
                    <input
                      type="text"
                      name="website"
                      value={values.website}
                      onChange={handleChange}
                      placeholder="Enter Website URL"
                      className="input_text"
                    />
                    <LocalError touched={touched.website} error={errors.website} />
                  </div>

                  <div className="singl_input">
                    <div className="labl_input">Description</div>
                    <textarea
                      id="description"
                      name="description"
                      value={values.description}
                      placeholder="Enter Description"
                      onChange={handleChange}
                      rows="4"
                      className="form-control"
                    />
                    <LocalError touched={touched.description} error={errors.description} />
                  </div>

                  <div className="singl_input">
                    <div className="labl_input">Select Category</div>
                    <select
                      className="input_text"
                      name="category_id"
                      value={values.category_id}
                      onChange={handleChange}
                    >
                      <option value="">-- Select Category --</option>
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                    <LocalError touched={touched.category_id} error={errors.category_id} />
                  </div>

                  <div className="text-center bottom">
                    <button type="submit" className="right_btn">
                      <span>Update App</span>
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
                        className="icon icon-tabler icon-tabler-square-rounded-arrow-right"
                      >
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
    )
}

export default EditApp;