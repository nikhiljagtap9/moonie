export const LOGOUT = "LOGOUT";

export const APICONSTANTS = {
    loginpath: ({ PhoneNumber, Password }) => `/Users/Login?PhoneNumber=${PhoneNumber}&Password=${Password}`,
    sigupPath: 'auth/register',
    forgotPassPath: ({ PhoneNumber }) => `/forgetPassword?PhoneNumber=${PhoneNumber}`,
    ResendOtpPath: ({ PhoneNumber }) => `/ResendPhoneVerification?phone=${PhoneNumber}`,
    verifyOtp: ({ PhoneNumber, Vcode }) => `/Users/Verify?PhoneNumber=${PhoneNumber}&Vcode=${Vcode}`,
    verifyEmail: ({ Vcode }) => `/VerifyEmail?vcode=${Vcode}`,
    updatePasswordPath: "verifyOtpAndResetPassword"
}
export const ROUTESCONSTANTS = {
    LOGIN: "/login",
    LOGOUT: "/logout",
    REGISTER: "/registration",
    FORGOT_PASSWORD: "/forget-password",
    NEW_PASSWORD: "/new-password"
}