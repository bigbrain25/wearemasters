import axios from "axios";
import { spinnerService } from "@chevtek/react-spinners";
import {
  CLEAR_ERRORS,
  GET_ETH_RATE,
  ETH_RATE_LOADING,
  GET_ASSETS,
  GET_ASSET,
  GET_ALL_ASSETS,
  ASSET_LOADING,
  GET_ERRORS,
} from "./types";
import swal from "@sweetalert/with-react";

// Get Assets
export const getAssets = () => (dispatch) => {
  dispatch(setAssetLoading());
  axios
    .get("/api/assets")
    .then((res) =>
      dispatch({
        type: GET_ASSETS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ASSETS,
        payload: null,
      })
    );
};

// Get Assets
export const getAllAssets = () => (dispatch) => {
  dispatch(setAssetLoading());
  axios
    .get("/api/assets/all")
    .then((res) =>
      dispatch({
        type: GET_ALL_ASSETS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ALL_ASSETS,
        payload: null,
      })
    );
};

// Get Assets By Username
export const getAssetsByUsername = () => (dispatch) => {
  dispatch(setAssetLoading());
  axios
    .get("/api/assets")
    .then((res) =>
      dispatch({
        type: GET_ASSETS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ASSETS,
        payload: null,
      })
    );
};

// Get Assets By ID
export const getAssetByID = (id) => (dispatch) => {
  dispatch(setAssetLoading());
  axios
    .get(`/api/assets/${id}`)
    .then((res) =>
      dispatch({
        type: GET_ASSET,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ASSET,
        payload: null,
      })
    );
};

// GET ETH RATE
export const getETHRate = () => (dispatch) => {
  dispatch(setETHRateLoading());
  axios
    .get("/api/assets/rate/get-eth-rate/")
    .then((res) => {
      console.log(res);
      dispatch({
        type: GET_ETH_RATE,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ETH_RATE,
        payload: {},
      });
    });
};

// Upload Art
export const uploadArt = (uploadData, history) => (dispatch) => {
  spinnerService.hide("uploadNotLoading");
  spinnerService.show("uploadLoading");
  dispatch(clearErrors());

  axios
    .post("/api/assets/upload-digital-art", uploadData)
    .then((res) => {
      spinnerService.hide("uploadLoading");
      spinnerService.show("uploadNotLoading");
      swal(
        "Upload Successful!",
        "Your upload was successful, you will get a notification when your submission is approved.",
        "success"
      ).then(() => {
        history.push("/account");
      });
    })
    .catch((err) => {
      spinnerService.show("uploadNotLoading");
      spinnerService.hide("uploadLoading");
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

// Update Asset
export const updateAsset = (assetData, history) => (dispatch) => {
  spinnerService.hide("updateAssetNotLoading");
  spinnerService.show("updateAssetLoading");
  dispatch(clearErrors());

  axios
    .post("/api/assets/update-asset", assetData)
    .then((res) => {
      spinnerService.hide("updateAssetLoading");
      spinnerService.show("updateAssetNotLoading");
      swal(
        "Update Successful!",
        "Asset update was successful!",
        "success"
      ).then(() => {
        history.push("/assets");
      });
    })
    .catch((err) => {
      spinnerService.show("updateAssetNotLoading");
      spinnerService.hide("updateAssetLoading");
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
      window.scrollTo(0, 1);
    });
};

// Set Asset Loading State
export const setAssetLoading = () => {
  return {
    type: ASSET_LOADING,
  };
};

// ETH Rate Loading
export const setETHRateLoading = () => {
  return {
    type: ETH_RATE_LOADING,
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
