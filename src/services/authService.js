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
     return { error: null, data: res.data };
  } catch(error){
     return handleApiError(error);
  }
}

export const resend2FAEmailCode = async () => {
  try {
    const res = await authInterceptor.post(APICONSTANTS.resend2FAEmailCode, {}, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return { error: null, data: res.data };
  } catch (error) {
    return handleApiError(error);
  }
};


export const verify2FACode = async (formData) => {
  try{
     const res =  await authInterceptor.post(APICONSTANTS.verify2FACode(formData),formData,{
        headers: {
          "Content-Type": "application/json",
        },
     });
     return { error: null, data: res.data };
  } catch(error){
     return handleApiError(error);
  }
}

export const getAll2FAMethods = async () => {
  try{
    const res = await authInterceptor.get(APICONSTANTS.getAll2FAMethods,{
      headers: {
        "Content-Type": "application/json",
      },
    });
    return {error: null, data:res.data};
  }catch(error){
    return handleApiError(error);
  }
}

export const start2FASetup = async (formData) => {
  try{
    const res = await authInterceptor.post(APICONSTANTS.start2FASetup(formData),formData,{
      headers:{
        "Content-Type": "application/json",
      },
    });
    return {error:null,data:res.data};
  }catch(error){
    return handleApiError(error);
  }
}

export const complete2FASetup = async (formData) => {
  try{
    const res = await authInterceptor.post(APICONSTANTS.complete2FASetup(formData),formData,{
      headers:{
        "Content-Type": "application/json",
      },
    });
    return {error:null,data:res.data};
  }catch(error){
    return handleApiError(error);
  }
}

export const disable2FAMethod = async(formData) => {
  try{
   const res = await authInterceptor.post(APICONSTANTS.disable2FAMethod(formData),formData,{
     headers:{
      "Content-Type" : "application/json",
     }
   });
   return {error:null,data:res.data};
  }catch(error){
    return handleApiError(error);
  }
}

export const showApplicationDetails = async(formData) => {
  try{
    const res = await authInterceptor.get(APICONSTANTS.showApplicationDetails(formData),formData,{
      headers:{
        "Content-Type":"application/json"
      }
    });
    return {error:null,data:res.data};
  }catch(error){
    return handleApiError(error);
  }
}

export const updateApplication = async(formData) => {
  try{
    const res = await authInterceptor.patch(APICONSTANTS.updateApplication(formData),formData,{
      headers:{
        "Content-Type":"application/json"
      }
    });
    return {error:null,data:res.data};
  }catch(error){
    return handleApiError(error);
  }
}

export const deleteApplication = async(formData) => {
  try{
    const res = await authInterceptor.delete(APICONSTANTS.deleteApplication(formData),formData,{
      headers:{
        "Content-Type":"application/json"
      }
    });
    return {error:null,data:res.data};
  }catch(error){
    return handleApiError(error);
  }
}











  