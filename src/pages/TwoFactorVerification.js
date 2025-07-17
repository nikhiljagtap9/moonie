import React, {useState,useEffect} from 'react';
import { Formik } from "formik";
import { verify2FACodeAction,resend2FAEmailCodeAction } from "../actions/authAction";
import {otpSchema} from '../validationSchema/validationSchema';
import LocalError from "../components/Error/validationError";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function TwoFactorVerification(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [defaultMethod, setDefaultMethod] = useState('email');

    useEffect(() => {
        const profileStr = sessionStorage.getItem('profile');
        if (profileStr) {
            const profile = JSON.parse(profileStr);
            if (profile?.twoFactorMethod) {
                setDefaultMethod(profile.twoFactorMethod);
            }
        }
    }, []);

    const handleSubmitForm = async (values, {setSubmitting}) => {
      try{
         await dispatch(verify2FACodeAction(values,navigate));
      }catch(error){
         console.error("Error during form submission:", error);
      }finally{
         setSubmitting(false);
      }
    }
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
                    <div className="tab-pane active">
                      {/*You can force Formik to reinitialize when 
                      defaultMethod changes by using the enableReinitialize prop on the <Formik> component.*/}
                    <Formik
                        enableReinitialize={true} 
                        initialValues={{
                            method: defaultMethod,
                            otp: "",
                        }}
                        validationSchema={otpSchema}
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
                            <h3 className="form-title m-t0">Verify Your Email</h3>
                            <div className="dez-separator-outer m-b5">
                            <div className="dez-separator bg-primary style-liner"></div>
                            </div>

                            <div className="form-group">
                                <input type="hidden" name="method" value={values.method} />    
                                <input
                                    required
                                    className="form-control"
                                    placeholder="Enter OTP"
                                    id="otp"
                                    type="text"
                                    name="otp"
                                    value={values.otp}
                                    onChange={handleChange}
                                />
                                <LocalError touched={touched.otp} error={errors.otp} />
                            </div>

                            {values.method === "email" && (
                                <button
                                type="button"
                                className="btn btn-link mt-2"
                                onClick={() => dispatch(resend2FAEmailCodeAction())}
                                >
                                Resend Code
                                </button>
                            )}

                            <div className="text-center bottom">
                            <button
                                type="submit"
                                className="site-button button-md btn-block text-white cret_ac_text"
                            >
                                Verify
                            </button>
                            </div>
                        </form>
                        )}
                    </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
    );
}

export default TwoFactorVerification;