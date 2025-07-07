import { APICONSTANTS } from "../constants/authConstants";
import authInterceptor from "../interceptor/authinterceptor";
import commonInterceptor from "../interceptor/commonInterceptor";
import { handleApiError } from "./utils";

export const signIn = async (formData) => {
    try {
      const res = await commonInterceptor.post(APICONSTANTS.loginpath,formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return { error: null, data: res.data };
    } catch (error) {
      return handleApiError(error);
    }
  };
export const signUp = async (formData) => {
    try {
      const res = await commonInterceptor.post(APICONSTANTS.sigupPath,formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log('ResultData ',res.data);
      return { error: null, data: res.data };
    } catch (error) {
      return handleApiError(error);
    }
  };
export const createApplication = async (formData) => {
  try{
     const res =  await authInterceptor.post(APICONSTANTS.createApplication,formData,{
        headers: {
          "Content-Type": "application/json",
        },
     });
     return { error: null, data: res.data };
  } catch(error){
     return handleApiError(error);
  }
}

export const getApplications = async () => {
  try{
     const res =  await authInterceptor.get(APICONSTANTS.getApplications,{
        headers: {
          "Content-Type": "application/json",
        },
     });
     return { error: null, data: res.data };
  } catch(error){
     return handleApiError(error);
  }
}

export const updateUserProfile = async (formData) => {
  try{
     const res =  await authInterceptor.patch(APICONSTANTS.updateUserProfile,formData,{
        headers: {
          "Content-Type": "application/json",
        },
     });
     return { error: null, data: res.data };
  } catch(error){
     return handleApiError(error);
  }
}

export const sendPasswordResetLink = async (formData) => {
  try{
     const res =  await authInterceptor.post(APICONSTANTS.sendPasswordResetLink,formData,{
        headers: {
          "Content-Type": "application/json",
        },
     });
     return { error: null, data: res.data };
  } catch(error){
     return handleApiError(error);
  }
}

export const resetPassword = async (formData) => {
  try{
     const res =  await commonInterceptor.post(APICONSTANTS.resetPassword,formData,{
        headers: {
          "Content-Type": "application/json",
        },
     });
     return { error: null, data: res.data };
  } catch(error){
     return handleApiError(error);
  }
}

export const sendVerificationEmail = async () => {
  try{
     const res =  await authInterceptor.post(APICONSTANTS.sendVerificationEmail,{
        headers: {
          "Content-Type": "application/json",
        },
     });
     return { error: null, data: res.data };
  } catch(error){
     return handleApiError(error);
  }
}

export const verifyEmail = async (formData) => {
  
  try{
     const res =  await commonInterceptor.get(APICONSTANTS.verifyEmail(formData),{
        headers: {
          "Content-Type": "application/json",
        },
     });
     console.log("res " + JSON.stringify(res.data));
     return { error: null, data: res.data };
  } catch(error){
     return handleApiError(error);
  }
}






  