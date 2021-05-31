import axios from "axios";

import {
  CLEAR_ERRORS,
  GET_TRANSACTIONS,
  GET_RECENT_TRANSACTIONS,
  GET_ALL_TRANSACTIONS,
  TRANSACTION_LOADING,
} from "./types";

// Get Transactions
export const getTransactions = () => (dispatch) => {
  dispatch(setTransactionLoading());
  axios
    .get("/api/transactions")
    .then((res) =>
      dispatch({
        type: GET_TRANSACTIONS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_TRANSACTIONS,
        payload: null,
      })
    );
};

// Get Recent Transactions
export const getRecentTransactions = () => (dispatch) => {
  dispatch(setTransactionLoading());
  axios
    .get("/api/transactions/recent-transactions")
    .then((res) =>
      dispatch({
        type: GET_RECENT_TRANSACTIONS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_RECENT_TRANSACTIONS,
        payload: null,
      })
    );
};

// System Transactions
export const getAllTransactions = () => (dispatch) => {
  dispatch(setTransactionLoading());
  axios
    .get("/api/transactions/get-all-transactions")
    .then((res) =>
      dispatch({
        type: GET_ALL_TRANSACTIONS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ALL_TRANSACTIONS,
        payload: null,
      })
    );
};

// Set Transaction Loading State
export const setTransactionLoading = () => {
  return {
    type: TRANSACTION_LOADING,
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
