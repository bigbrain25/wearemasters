import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { spinnerService } from "@chevtek/react-spinners";
import swal from "@sweetalert/with-react";

// import Noty from "noty";
// import "noty/lib/noty.css";
// import "noty/lib/themes/mint.css";

import {
  GET_ERRORS,
  GET_MESSAGES,
  SET_CURRENT_USER,
  CLEAR_ERRORS,
} from "./types";

// Register User
export const registerUser = (userData) => (dispatch) => {
  dispatch(clearErrors());
  spinnerService.hide("registerNotLoading");
  spinnerService.show("registerLoading");
  axios
    .post("/api/users/register", userData)
    .then((res) => {
      spinnerService.hide("registerLoading");

      swal(
        "Account Created Successfully!",
        "Your account have been created sucessfully!",
        "success"
      );

      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) => {
      spinnerService.hide("registerLoading");
      spinnerService.show("registerNotLoading");

      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

// Login - User Login
export const loginUser = (userData, history) => (dispatch) => {
  dispatch(clearErrors());
  spinnerService.hide("loginNotLoading");
  spinnerService.show("loginLoading");
  axios
    .post("/api/users/login", userData)
    .then((res) => {
      spinnerService.hide("loginLoading");
      spinnerService.show("loginNotLoading");

      // Save to LocalStorage
      const { token } = res.data;
      // Set token to Local Storage
      localStorage.setItem("jwtToken", token);
      // Set token to Auth Header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set Current User
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) => {
      console.log(err);
      spinnerService.hide("loginLoading");
      spinnerService.show("loginNotLoading");

      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

// Register Shipper
export const registerAsset = (assetData, history) => (dispatch) => {
  dispatch(clearErrors());
  spinnerService.hide("assetRegistrationNotLoading");
  spinnerService.show("assetRegistrationLoading");
  axios
    .post("/api/users/register-asset", assetData)
    .then((res) => {
      spinnerService.hide("assetRegistrationLoading");

      swal(
        "Success!",
        "New asset registration was successful!",
        "success"
      ).then(() => {
        history.push("/account");
      });
    })
    .catch((err) => {
      spinnerService.hide("assetRegistrationLoading");
      spinnerService.show("assetRegistrationNotLoading");

      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

// Account Activation
export const activateAccount = (codeData, history) => (dispatch) => {
  spinnerService.hide("activationNotLoading");
  spinnerService.show("activationLoading");
  axios
    .post(`/api/users/activate-account`, codeData)
    .then((res) => {
      spinnerService.show("activationNotLoading");
      spinnerService.hide("activationLoading");

      dispatch(logoutUser());

      swal(
        "Activation Successful!",
        "Your account activation was successful, kindly proceed to Login.",
        "success"
      );

      // new Noty({
      //   type: "success",
      //   text: "Activation successful, Please Login.",
      //   timeout: 7500,
      //   progressBar: true,
      // }).show();

      dispatch({
        type: GET_MESSAGES,
        payload: res.data,
      });

      history.push("/account");
    })
    .catch((err) => {
      spinnerService.show("activationNotLoading");
      spinnerService.hide("activationLoading");
      swal("Error!", "Account activation unsuccessful", "error");
      // new Noty({
      //   type: "error",
      //   text: "Account activation unsuccessful!",
      //   timeout: 5000,
      //   progressBar: true,
      // }).show();

      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });

      history.push("/account");
    });
};

// Resend Activation Token
export const resendActivationToken = (history) => (dispatch) => {
  spinnerService.hide("resendActivationNotLoading");
  spinnerService.show("resendActivationLoading");

  axios
    .post("/api/users/resend-activation-token")
    .then((res) => {
      spinnerService.show("resendActivationNotLoading");
      spinnerService.hide("resendActivationLoading");

      swal(
        "Success!",
        "We sent a new verification code to your email address. Kindly proceed to activate your account.",
        "success"
      ).then(() => {
        history.push("/account");
      });
    })
    .catch((err) => {
      spinnerService.show("resendActivationNotLoading");
      spinnerService.hide("resendActivationLoading");

      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

// Update Personal Information
export const updatePersonalInfo = (personalInfo, history) => (dispatch) => {
  spinnerService.hide("updatePersonalInfoNotLoading");
  spinnerService.show("updatePersonalInfoLoading");
  axios
    .post("/api/users/update-personal-information", personalInfo)
    .then((res) => {
      // Save to LocalStorage
      const { token } = res.data;
      // Set token to Local Storage
      localStorage.setItem("jwtToken", token);
      // Set token to Auth Header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set Current User
      dispatch(setCurrentUser(decoded));

      spinnerService.hide("updatePersonalInfoLoading");
      spinnerService.show("updatePersonalInfoNotLoading");
      swal("Success!", "Personal information updated successfully!", "success");
      // .then(() => {
      //   logoutUser();
      //   history.push("/login");
      // });
    })
    .catch((err) => {
      spinnerService.hide("updatePersonalInfoLoading");
      spinnerService.show("updatePersonalInfoNotLoading");

      // new Noty({
      //   type: "error",
      //   text: "Error updating Personal Info",
      //   timeout: 5000,
      //   progressBar: true,
      // }).show();

      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

// Change Password
export const updatePassword = (passwordData, history) => (dispatch) => {
  spinnerService.hide("updatePasswordNotLoading");
  spinnerService.show("updatePasswordLoading");
  axios
    .post("/api/users/change-password", passwordData)
    .then((res) => {
      spinnerService.hide("updatePasswordLoading");
      spinnerService.show("updatePasswordNotLoading");
      swal(
        "Success!",
        "You have successfully changed your password",
        "success"
      ).then(() => {
        dispatch(logoutUser());
        history.push("/login");
      });
    })
    .catch((err) => {
      spinnerService.hide("updatePasswordLoading");
      spinnerService.show("updatePasswordNotLoading");

      swal("Error!", err.response.data.error, "error");

      // new Noty({
      //   type: "error",
      //   text: err.response.data.error,
      //   timeout: 5000,
      //   progressBar: true,
      // }).show();

      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

// Forget Password
export const forgotPassword = (emailData, history) => (dispatch) => {
  spinnerService.hide("forgotPasswordNotLoading");
  spinnerService.show("forgotPasswordLoading");
  axios
    .post("/api/users/forgot-password", emailData)
    .then((res) => {
      spinnerService.hide("forgotPasswordLoading");
      spinnerService.show("forgotPasswordNotLoading");
      swal("Success!", res.data.msg, "success").then(() => {
        history.push("/login");
      });
    })
    .catch((err) => {
      spinnerService.hide("forgotPasswordLoading");
      spinnerService.show("forgotPasswordNotLoading");
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

// Reset Password
export const resetPassword = (passwordData, history) => (dispatch) => {
  spinnerService.hide("resetPasswordNotLoading");
  spinnerService.show("resetPasswordLoading");
  axios
    .post("/api/users/reset-password", passwordData)
    .then((res) => {
      spinnerService.hide("resetPasswordLoading");
      spinnerService.show("resetPasswordNotLoading");

      swal("Success!", res.data.msg, "success").then(() => {
        history.push("/login");
      });
    })
    .catch((err) => {
      spinnerService.hide("resetPasswordLoading");
      spinnerService.show("resetPasswordNotLoading");
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

// Set Logged in User
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

export const clearErrorMessages = () => (dispatch) => {
  dispatch(clearErrors());
};

// Clear Errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

// Log User Out
export const logoutUser = () => (dispatch) => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
