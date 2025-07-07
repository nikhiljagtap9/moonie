import React, {useState,useEffect} from "react";
import { Formik } from "formik";
import { updateUserProfileAction } from "../actions/authAction";
import { getCountries } from "../services/commonService";

import { updateUserProfileSchema } from "../validationSchema/validationSchema";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LocalError from "../components/Error/validationError";

const BasicProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [countries, setCountries] = useState([]);
    const handleSubmitForm = async (values, { setSubmitting, resetForm }) => {
        try {
          console.log("Form values inside handleSubmitForm:", values); // Debugging the form values
          // Dispatch the action to handle the signup API call
          const response = await dispatch(updateUserProfileAction(values, navigate));
          // Reset the form fields after successful submission
        //  resetForm(); 
        //    if (response?.success) {
        //     resetForm(); // Reset only on success
        //     }
        } catch (error) {
          console.error("Error during form submission:", error);
          alert("There was an error submitting the form. Please try again.");
        } finally {
          setSubmitting(false); // Stop loading state
        }
    };
    useEffect(() => {
      fetchCountries();
    },[])

    const fetchCountries = async () => {
        const { data } = await getCountries();
        setCountries(data?.data || []);
    };

    return (
        <Formik
            initialValues={{
                first_name: "",
                last_name: "",
                phone:"",
                dob:"",
                country_id:"",
                state:"",
                city:"",
                address:""
            }}
            validationSchema={updateUserProfileSchema}
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
                handleBlur,
                handleSubmit,
            })=> (
            <form onSubmit={handleSubmit}>
            <div className="col-md-4" bis_skin_checked="1">
                <label for="EveTitle" className="form-label" >First Name</label>
                <input type="text" name="first_name" value={values.first_name}
                className="form-control" placeholder="Enter first name" onChange={handleChange}/>
                <LocalError touched={touched.first_name} error={errors.first_name} />
            </div>
            <div className="col-md-4" bis_skin_checked="1">
                <label for="EveTitle" className="form-label" >Last Name</label>
                <input type="text" name="last_name" value={values.last_name}
                className="form-control" placeholder="Enter Last Name " onChange={handleChange}/>
                <LocalError touched={touched.last_name} error={errors.last_name} />
            </div>
            <div className="col-md-4" bis_skin_checked="1">
                <label for="EveTitle" className="form-label" >Phone</label>
                <input type="text" name="phone" value={values.phone}
                className="form-control" placeholder="Enter Phone " onChange={handleChange}/>
                <LocalError touched={touched.phone} error={errors.phone} />
            </div>
            <div className="col-md-4" bis_skin_checked="1">
                <label for="EveTitle" className="form-label" >Date Of Birth</label>
                <input type="date" name="dob" value={values.dob}
                className="form-control" placeholder="Enter Date Of Birth " onChange={handleChange}/>
                <LocalError touched={touched.dob} error={errors.dob} />
            </div>
            <div className="col-md-4" bis_skin_checked="1">
                <label for="EveTitle" className="form-label" >Country</label>
                <select className="form-control" name="country_id" value={values.country_id}
                    onChange={handleChange} onBlur={handleBlur}>
                    <option>Select Country</option>
                    {countries.map((country)=>(
                        <option key={country.id} value={country.id}> {country.name} </option>
                    ))}
                </select>
                <LocalError touched={touched.country_id} error={errors.country_id} />
            </div>
            <div className="col-md-4" bis_skin_checked="1">
                <label for="EveTitle" className="form-label" >State</label>
                <input type="text" name="state" className="form-control" value={values.state}
                placeholder="Enter State " onChange={handleChange}/>
                <LocalError touched={touched.state} error={errors.state} />
            </div>
            <div className="col-md-4" bis_skin_checked="1">
                <label for="EveTitle" className="form-label" >City</label>
                <input type="text" name="city" className="form-control" value={values.city}
                placeholder="Enter City " onChange={handleChange}/>
                <LocalError touched={touched.city} error={errors.city} />
            </div>
            <div className="col-md-4" bis_skin_checked="1">
                <label for="EveTitle" className="form-label" >Address</label>
                <input type="text" name="address" className="form-control" value={values.address}
                placeholder="Enter Address " onChange={handleChange}/>
                <LocalError touched={touched.address} error={errors.address} />
            </div>
            <div className="clear"></div>
            <button type="submit" className="btn btn-primary mb-4 submi_movi"  >Update</button>
            </form>
            )}
        </Formik>
    );
};

export default BasicProfile;
