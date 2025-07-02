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


  