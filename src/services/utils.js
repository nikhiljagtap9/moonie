// Improved error handler
export const handleApiError = async (error) => {
  try {
    // Check if error contains the response and message
    const errorMessage =
      error?.response?.data?.errors?.message || error?.response?.data?.message || "An unexpected error occurred.";
    return { error: errorMessage, data: null };
  } catch (err) {
    return { error: "An unexpected error occurred while processing the error.", data: null };
  }
};

// Improved Base64 conversion function
export const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    
    // Check if the file is valid
    if (!file) {
      reject("Invalid file input.");
    }

    // Convert to base64
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result); // Return the complete base64 string
    };

    fileReader.onerror = (error) => {
      reject("Error reading file.");
    };
  });
};
