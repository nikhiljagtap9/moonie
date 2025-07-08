export const LOGOUT = "LOGOUT";

export const APICONSTANTS = {
    loginpath: 'auth/login',
    sigupPath: 'auth/register',
    applicationCategories: 'resources/application-categories',
    createApplication: 'applications/create',
    getApplications: 'applications',
    updateUserProfile: 'user/update',
    getCountries: 'resources/countries',
    sendPasswordResetLink: 'auth/password/forgot',
    resetPassword: "auth/password/reset",
    sendVerificationEmail: 'auth/email/verification-notification',
    verifyEmail: ({ id, hash, expires, signature }) => 
                `auth/email/verify/${id}/${hash}?expires=${expires}&signature=${signature}`, 
    resend2FAEmailCode: 'auth/2fa/email/request-code',
    verify2FACode: ({method}) => `auth/2fa/${method}/verify`
}
export const ROUTESCONSTANTS = {
    LOGIN: "/login",
    LOGOUT: "/logout",
    REGISTER: "/registration",
    FORGOT_PASSWORD: "/forget-password",
    NEW_PASSWORD: "/new-password",
    UPDATE_KYC: "/update-kyc",
    PROFILE: "/profile",
    RESET_PASSWORD: "/reset-password",
    VERIFY_EMAIL: "/verify-email",
}