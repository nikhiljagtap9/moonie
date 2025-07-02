
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

    if (error) {
      toast.error(error);
      dispatch(setIsLoading(false));
      return;
    }

    const { user, access_token, expires_in } = data?.data;

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

      toast.success(data?.message || "Application fetched successfully!");
      dispatch(setIsLoading(false));
      return data?.data || []; // return the application list

    } catch (err) {
      dispatch(setIsLoading(false));
      toast.error("Something went wrong while fetching applications.");
      return null;
    }
  };
