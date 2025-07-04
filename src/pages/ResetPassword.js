import React from "react";
import { useFormik } from "formik";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetPasswordAction } from "../actions/authAction";
import { resetPasswordSchema } from "../validationSchema/validationSchema";
import LocalError from "../components/Error/validationError";



const ResetPassword = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const email = searchParams.get("email");
    const token = searchParams.get("token");
    
    const formik = useFormik({
    initialValues: {
      email: email || "",
      token: token || "",
      password: "",
      password_confirmation: "",
    },
    validationSchema: resetPasswordSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        await dispatch(resetPasswordAction(values, navigate));
        resetForm();
      } catch (error) {
        alert("Reset failed. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  const { values, handleChange, handleBlur, touched, errors } = formik;

    return (
        <div className="container mt-5">
            <h3>Reset Password</h3>

            <form onSubmit={formik.handleSubmit}>
                <input type="hidden" name="email" value={formik.values.email} />
                <input type="hidden" name="token" value={formik.values.token} />

                <div className="mb-3">
                    <label>New Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    <LocalError touched={touched.password} error={errors.password} />
                </div>

                <div className="mb-3">
                    <label>Confirm New Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password_confirmation"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password_confirmation}
                    />
                    <LocalError touched={touched.password_confirmation} error={errors.password_confirmation} />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={formik.isSubmitting}
                >
                    {formik.isSubmitting ? "Resetting..." : "Reset Password"}
                </button>
            </form>
        </div>
    );
};

export default ResetPassword;