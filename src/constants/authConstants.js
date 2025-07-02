export const LOGOUT = "LOGOUT";

export const APICONSTANTS = {
    loginpath: 'auth/login',
    sigupPath: 'auth/register',
    applicationCategories: 'resources/application-categories',
    createApplication: 'applications/create',
    getApplications: 'applications',
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
    NEW_PASSWORD: "/new-password",
    UPDATE_KYC: "/update-kyc"
}