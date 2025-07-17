
import { resetUserDetails, setAuth, setIsUploading, setUserDetails } from "../slices/userSlice";
import * as Api from "../services/authService"
import { setIsLoading } from "../slices/commonSlice";
import { toast } from "react-toastify";
import { ROUTESCONSTANTS } from "../constants/authConstants";
export const setInitialAuthState = (navigate) => async (dispatch) => {
    await dispatch(resetUserDetails());
    navigate("/login");
  };

  export const initializeAuth = () => async (dispatch) => {
    const accessToken = JSON.parse(localStorage.getItem("profile"))?.accessToken||JSON.parse(sessionStorage.getItem("profile"))?.accessToken;
        
    const userData=JSON.parse(localStorage.getItem("profile"))?.accessToken?JSON.parse(localStorage.getItem("profile")):JSON.parse(sessionStorage.getItem("profile"))
  
    if (accessToken ) {
     
        
        dispatch(setUserDetails(userData?.user));
      } else {
        // await dispatch(refreshTokenAction(refreshToken));
      }
    }
  
  // Login
  export const signInAction = (formData, navigate) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    
    const response = await Api.signIn(formData);
    const { data, error } = response;
    let twoFactorMethod = '';

    if (error) {
      toast.error(error);
      dispatch(setIsLoading(false));
      return;
    }

    const { user, access_token, expires_in,'2fa_methods': twoFA } = data?.data;

     // Otherwise, continue normal login
    const profile = {
      user,
      accessToken: access_token,
      refreshToken: null, // Or use if you get it from another source
      accessTokenUpdatedAt: Date.now() + expires_in * 1000, // optional
    };

    // If 2FA is enabled for email
    if(twoFA?.email?.is_enabled){
      twoFactorMethod = "email";
      const profile = {
        user,
        accessToken: access_token,
        refreshToken: null, // Or use if you get it from another source
        accessTokenUpdatedAt: Date.now() + expires_in * 1000, // optional
        twoFactorMethod: twoFactorMethod
      };
      sessionStorage.setItem("profile", JSON.stringify(profile));

       // Dispatch resend code here
      await dispatch(resend2FAEmailCodeAction());

      dispatch(setIsLoading(false));
      return navigate("/2fa-verification",{state: {method:twoFactorMethod}});
    }

    // If 2FA is enabled for google_auth
    if(twoFA?.google_auth?.is_enabled){
      twoFactorMethod = "google_auth";
      const profile = {
        user,
        accessToken: access_token,
        refreshToken: null, // Or use if you get it from another source
        accessTokenUpdatedAt: Date.now() + expires_in * 1000, // optional
        twoFactorMethod: twoFactorMethod
      };
      sessionStorage.setItem("profile", JSON.stringify(profile));

      dispatch(setIsLoading(false));
      return navigate("/2fa-verification",{state: {method:twoFactorMethod}});
    }

    if (formData?.remember_me) {
      localStorage.setItem("profile", JSON.stringify(profile));
    } else {
      sessionStorage.setItem("profile", JSON.stringify(profile));
    }

    dispatch(setUserDetails(user));
    dispatch(setIsLoading(false));
    navigate("/welcome");

  } catch (err) {
    dispatch(setIsLoading(false));
    toast.error("Something went wrong. Please try again.");
    navigate("/login");
  }
};


  export const signUpAction =
  (formData, navigate) =>
  async (dispatch) => {
    try {
      dispatch(setIsLoading(true))
      localStorage.removeItem("profile");
      sessionStorage.removeItem("profile");
      const response = await Api.signUp(formData);
      const { error,data } = response;
      if (error) {
        toast.error(response?.error)
        dispatch(setIsLoading(false))
      } else {
        toast.success(response?.data?.message)
        dispatch(setIsLoading(false))
        navigate("/login")
      }
    } catch (error) {
        dispatch(setIsLoading(false))
   
    }
  };

  export const isSession = () => {
    const profileStr = sessionStorage.getItem("profile");
    if (!profileStr) return false;

    try {
      const profile = JSON.parse(profileStr);
      return !!profile?.accessToken;
    } catch {
      return false;
    }
  };

  export const logoutAction=(navigate)=>async(dispatch)=>{
    try{
     dispatch(setIsLoading(true))
     await dispatch(setUserDetails(null))
     localStorage.removeItem("profile");
     sessionStorage.removeItem("profile")
     dispatch(setIsLoading(false))
     navigate(ROUTESCONSTANTS.LOGIN)
    }
    catch(error){

    }
  }

  export const createApplicationAction = (formData, navigate) => async (dispatch) => {
    try {
      dispatch(setIsLoading(true));

      const response = await Api.createApplication(formData);
      const { data, error } = response;

      if (error) {
        toast.error(error);
        dispatch(setIsLoading(false));
        return;
      }

      toast.success(data?.message || "Application created successfully!");
      dispatch(setIsLoading(false));
      navigate("/listing");

    } catch (err) {
      dispatch(setIsLoading(false));
      toast.error("Something went wrong while creating the application.");
    }
  };

  export const getApplicationsAction = () => async (dispatch) => {
    try {
      dispatch(setIsLoading(true));

      const response = await Api.getApplications();
      const { data, error } = response;

      if (error) {
        toast.error(error);
        dispatch(setIsLoading(false));
        return null;
      }

    //  toast.success(data?.message || "Application fetched successfully!");
      dispatch(setIsLoading(false));
      return data?.data || []; // return the application list

    } catch (err) {
      dispatch(setIsLoading(false));
      toast.error("Something went wrong while fetching applications.");
      return null;
    }
  };

   export const updateUserProfileAction = (formData, navigate) => async (dispatch) => {
    try {
      dispatch(setIsLoading(true));

      const response = await Api.updateUserProfile(formData);
      const { data, error } = response;

      if (error) {
        toast.error(error);
        dispatch(setIsLoading(false));
        return;
      //  return { success: false, error };
      }

      toast.success(data?.message);
      dispatch(setIsLoading(false));
    //  navigate("/listing");
    //  return { success: true, data };
    } catch (err) {
      dispatch(setIsLoading(false));
      toast.error("Something went wrong while update user profile");
    //  return { success: false, error: "Unexpected error" };
    }
  };

  export const forgotPasswordAction = (formData, navigate) => async (dispatch) => {
    try {
      dispatch(setIsLoading(true));

      const response = await Api.sendPasswordResetLink(formData);
      const { data, error } = response;

      if (error) {
        toast.error(error);
        dispatch(setIsLoading(false));
        return;
      }

      toast.success(data?.message);
      dispatch(setIsLoading(false));

    } catch (err) {
      dispatch(setIsLoading(false));
      toast.error("Something went wrong while Forgot Password");
    }
  };

  export const resetPasswordAction = (formData, navigate) => async (dispatch) => {
    try { 
      const response = await Api.resetPassword(formData);
      const { data, error } = response;
      if (error) {
        toast.error(error);
        dispatch(setIsLoading(false));
        return;
      }

      toast.success(data?.message);
      dispatch(setIsLoading(false));
      navigate("/login"); // Redirect to login after reset
    } catch (error) {
      dispatch(setIsLoading(false));
      toast.error("Something went wrong while Reset Password");
    }
  };

  export const sendVerificationEmailAction = (formData, navigate) => async (dispatch) => {
    try {
      dispatch(setIsLoading(true));

      const response = await Api.sendVerificationEmail(formData);
      const { data, error } = response;

      if (error) {
        toast.error(error);
        dispatch(setIsLoading(false));
        return;
      }

      toast.success(data?.message);
      dispatch(setIsLoading(false));
    } catch (err) {
      dispatch(setIsLoading(false));
      toast.error("Something went wrong while Send Verification Email");
    }
  };

  export const verifyEmailAction = (formData, navigate) => async (dispatch) => {
    try {
      dispatch(setIsLoading(true));

      const response = await Api.verifyEmail(formData);
      const { data, error } = response;

      if (error) {
        toast.error(error);
        dispatch(setIsLoading(false));
        return;
      }

      toast.success(data?.message);
      navigate("/profile");
      dispatch(setIsLoading(false));
    } catch (err) {
      dispatch(setIsLoading(false));
      toast.error("Something went wrong while Verify Email");
    }
  };

  export const resend2FAEmailCodeAction = () => async (dispatch) => {
    try {
      dispatch(setIsLoading(true));
      const response = await Api.resend2FAEmailCode();
      const { data, error } = response;

      if (error) {
        toast.error(error);
      } else {
        toast.success(data?.message || "Verification code resent to your email.");
      }

      dispatch(setIsLoading(false));
    } catch (err) {
      dispatch(setIsLoading(false));
      toast.error("Something went wrong while resending the email code.");
    }
  };


  export const verify2FACodeAction = (formData, navigate) => async (dispatch) => {
    try {
      dispatch(setIsLoading(true));
      
      const response = await Api.verify2FACode(formData);
      const { data, error } = response;
       
      if (error) {  
        toast.error(error);
        dispatch(setIsLoading(false));
        return;
      }

      const { user, access_token, expires_in,'2fa_methods': twoFA } = data?.data;

       // Otherwise, continue normal login
      const profile = {
        user,
        accessToken: access_token,
        refreshToken: null, // Or use if you get it from another source
        accessTokenUpdatedAt: Date.now() + expires_in * 1000, // optional
      };

      if (formData?.remember_me) {
        localStorage.setItem("profile", JSON.stringify(profile));
      } else {
        sessionStorage.setItem("profile", JSON.stringify(profile));
      }

      toast.success(data?.message);
      navigate("/welcome");
      dispatch(setIsLoading(false));
    } catch (error) {
      dispatch(setIsLoading(false));
      toast.error("Something went wrong while verify 2FA Code");
    }
  };

  
  export const getAll2FAMethodsAction = () => async (dispatch) => {
    try {
      dispatch(setIsLoading(true));

      const response = await Api.getAll2FAMethods();
      const { data, error } = response;

      if (error) {
        toast.error(error);
        dispatch(setIsLoading(false));
        return null;
      }

      dispatch(setIsLoading(false));
      return data?.data || []; // return the  list

    } catch (err) {
      dispatch(setIsLoading(false));
      toast.error("Something went wrong while fetching list.");
      return null;
    }
  };

  export const start2FASetupAction = (formData, navigate) => async (dispatch) => {
    try {
      dispatch(setIsLoading(true));

      const response = await Api.start2FASetup(formData);
      const { data, error } = response;

      if (error) {
        toast.error(error);
        return null;
      }

      return data?.data || [];

    } catch (err) {
      toast.error("Something went wrong while 2FA Setup ");
      return null;
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  export const complete2FASetupAction = (formData, navigate) => async (dispatch) => {
    try {
      dispatch(setIsLoading(true));

      const response = await Api.complete2FASetup(formData);
      const { data, error } = response;

      if (error) {
        toast.error(error);
        return null;
      }

      toast.success(data?.message || "2FA has been enabled successfully!");
      return data?.data || [];

    } catch (err) {
      toast.error("Something went wrong while Complete 2FA Setup");
      return null;
    } finally {
      dispatch(setIsLoading(false));
    }
  };

    export const disable2FAMethodAction = (formData, navigate) => async (dispatch) => {
    try {
      dispatch(setIsLoading(true));

      const response = await Api.disable2FAMethod(formData);
      const { data, error } = response;

      if (error) {
        toast.error(error);
        return null;
      }

      toast.success(data?.message);
      return data?.data || [];

    } catch (err) {
      toast.error("Something went wrong while Disable 2FA Method");
      return null;
    } finally {
      dispatch(setIsLoading(false));
    }
  };


  
  
  