import axios from "axios";
import { spinnerService } from "@chevtek/react-spinners";
import swal from "@sweetalert/with-react";
// import Noty from "noty";
// import "../../node_modules/noty/lib/noty.css";
// import "../../node_modules/noty/lib/themes/mint.css";

import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  SET_CURRENT_USER,
  CLEAR_ERRORS,
} from "./types";

// Get current profile
export const getCurrentProfile = () => (dispatch) => {
  dispatch(setProfileLoading());
  axios
    .get("/api/profile")
    .then((res) =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      })
    )
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_PROFILE,
        payload: {},
      });
    });
};

// Get profile by username
export const getProfileByUsername = (username) => (dispatch) => {
  dispatch(setProfileLoading());
  axios
    .get(`/api/profile/username/${username}`)
    .then((res) =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_PROFILE,
        payload: null,
      })
    );
};

// Update Profile
export const updateProfile = (profileData, history) => (dispatch) => {
  dispatch(clearErrors());
  spinnerService.hide("updateProfileNotLoading");
  spinnerService.show("updateProfileLoading");

  axios
    .post("/api/profile", profileData)
    .then((res) => {
      spinnerService.hide("updateProfileLoading");
      spinnerService.show("updateProfileNotLoading");

      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });

      swal("Success!", "Profile Updated Successfully.", "success").then(() => {
        history.push("/account");
      });
    })
    .catch((err) => {
      spinnerService.show("updateProfileNotLoading");
      spinnerService.hide("updateProfileLoading");
      window.scrollTo(0, 1);

      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

// Get all profiles
export const getProfiles = () => (dispatch) => {
  dispatch(setProfileLoading());
  axios
    .get("/api/profile/all")
    .then((res) =>
      dispatch({
        type: GET_PROFILES,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_PROFILES,
        payload: null,
      })
    );
};

// Delete account & profile
export const deleteAccount = () => (dispatch) => {
  if (window.confirm("Are you sure? This can NOT be undone!")) {
    axios
      .delete("/api/profile")
      .then((res) =>
        dispatch({
          type: SET_CURRENT_USER,
          payload: {},
        })
      )
      .catch((err) =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
        })
      );
  }
};

// Set Logged in User
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

// Profile Loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING,
  };
};

// Clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE,
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
