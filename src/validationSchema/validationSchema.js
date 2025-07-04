
// import * as Yup from "yup";
// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

import * as Yup from "yup";
const phoneRegExp = /^(\+?[1-9]{1,4})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

// Password regex: 8+ characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Enter Your Password Here")
});


export const signUpSchema = Yup.object().shape({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .matches(
      passwordRules,
      "Must be at least 8 characters and include uppercase, lowercase, number, and symbol."
    )
    .required("Password is required"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], "Passwords must match")
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

export const applicationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .max(255, "Name must not exceed 255 characters"),

  category_id: Yup.string()
    .required("Category is required"),

  description: Yup.string()
    .required("Description is required")
    .max(500, "Description must not exceed 500 characters"),

  website: Yup.string()
    .required("Website URL is required")
    .url("Enter a valid URL")
    .max(255, "Website URL must not exceed 255 characters"),

  logo: Yup.mixed()
    .test("fileType", "Only JPG, PNG, JPEG, WEBP files are allowed", (value) => {
      if (!value) return true; // optional
      const supportedFormats = ["image/jpg", "image/jpeg", "image/png", "image/webp"];
      return supportedFormats.includes(value.type);
    })
    .test("fileSize", "Logo must be less than 10MB", (value) => {
      if (!value) return true; // optional
      return value.size <= 10 * 1024 * 1024; // 10MB
    }),
});

export const updateUserProfileSchema = Yup.object().shape({
  first_name: Yup.string()
    .max(255, "First name must not exceed 255 characters")
    .required("First name is required"),

  last_name: Yup.string()
    .max(255, "Last name must not exceed 255 characters")
    .required("Last name is required"),

  phone: Yup.string()
    .matches(/^\+\d{6,15}$/, "Phone number must be in international format (e.g. +237652123456)")
    .required("Phone number is required"),

  dob: Yup.date()
    .max(new Date(), "Date of birth must be before today")
    .typeError("Invalid date format. Use YYYY-MM-DD")
    .required("Date of birth is required"),

  country_id: Yup.string()
    .required("Country is required"),

  state: Yup.string()
    .max(255, "State must not exceed 255 characters")
    .required("State is required"),

  city: Yup.string()
    .max(255, "City must not exceed 255 characters")
    .required("City is required"),

  address: Yup.string()
    .required("Address is required"),
});

export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

export const resetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .matches(
      passwordRules,
      "Must be at least 8 characters and include uppercase, lowercase, number, and symbol."
    )
    .required("Password is required"),
    password_confirmation: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
});