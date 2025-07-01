
// import * as Yup from "yup";
// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

import * as Yup from "yup";
const phoneRegExp = /^(\+?[1-9]{1,4})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

export const loginSchema = Yup.object().shape({
  PhoneNumber: Yup.string()
    .min(9, "too short")
    .matches(phoneRegExp, 'Phone number is not valid')
    .required("Enter Valid Phone Number"),
  Password: Yup.string().required("Enter Your Password Here")
});


export const signUpSchema = Yup.object().shape({
  FirstName: Yup.string().required("First Name is required"),
  LastName: Yup.string().required("Last Name is required"),
  Email: Yup.string().email("Invalid email").required("Email is required"),
  Password: Yup.string().min(6, "Password is too short").required("Password is required"),
  CPassword: Yup.string()
    .oneOf([Yup.ref('Password'), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export const userSchema = Yup.object().shape({
  Name: Yup.string().required("Name is Required"),
  Email: Yup.string().email("Enter a Valid Email").required("A Valid Email is Required"),

  PhoneKey: Yup.string().max(4, "Enter a Valid Country Code").required("Select a Country Code"),

  // IdentityNumber:"1064860119",
  PhoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
    .required("Enter Valid Phone Number"),
  DateOfBirth: Yup.date("Enter a Valid Date").required("Enter Date of Birth"),
  // CityId:18,
  // Gender:true,
})

export const NumberSchema = Yup.object().shape({
  PhoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
    .required("Enter Valid Phone Number")
})
export const OtpSchema = Yup.object().shape({
  otp: Yup.string().min(4, "Enter a Valid Otp")
    .required("Enter a 4 digit OTP")
  // IdentityNumber:"1064860119",
  // CityId:18,
  // Gender:true,
})
export const updatePasswordSchema = Yup.object().shape({
  NewPassword: Yup.string().required("Password is Required"),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref('NewPassword'), null], 'Passwords must match')

})