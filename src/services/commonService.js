import { APICONSTANTS } from "../constants/authConstants";
import commonInterceptor from "../interceptor/commonInterceptor";
import { handleApiError } from "./utils";

export const getCategories = async () => {
  try{
     const res =  await commonInterceptor.get(APICONSTANTS.applicationCategories,{
        headers: {
          "Content-Type": "application/json",
        },
     });
     return { error: null, data: res.data };
  } catch(error){
     return handleApiError(error);
  }
}

export const getCountries = async () => {
  try{
     const res =  await commonInterceptor.get(APICONSTANTS.getCountries,{
        headers: {
          "Content-Type": "application/json",
        },
     });
     return { error: null, data: res.data };
  } catch(error){
     return handleApiError(error);
  }
}

  