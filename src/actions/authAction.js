
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
  
  export const signInAction = (formData, navigate) => async (dispatch) => {
  
    try {
        dispatch(setIsLoading(true))
      const response = await Api.signIn(formData);
      const { error, data } = response;
      console.log({response:response?.data?.model})
      if (error) {
        // dispatch({
        //   type: types.SIGNIN_FAIL,
        //   payload: error,
        // });
        toast.error(response?.error)
        dispatch(setIsLoading(false))
      } else {
        const { Token, refreshToken:
          RefreshToken
           } = data?.model;
        const profile = {
          user:response?.data?.model,
          accessToken:Token[0]?.access_token,
          refreshToken:RefreshToken,
          accessTokenUpdatedAt:Token[0]?.expires_in,
        };
        if(formData?.remember_me){
            localStorage.setItem("profile", JSON.stringify(profile));

        }
        else{
          sessionStorage.setItem("profile", JSON.stringify(profile))
        }
        // dispatch({
        //   type: types.SIGNIN_SUCCESS,
        //   payload: profile,
        // });
        dispatch(setUserDetails({...profile?.user}));
        dispatch(setIsLoading(false))
        navigate("/");
      }
    } catch (error) {
        
    //   await dispatch({
    //     type: types.SIGNIN_FAIL,
    //     payload: types.ERROR_MESSAGE,
    //   });
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