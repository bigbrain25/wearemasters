import { GET_ETH_RATE, ETH_RATE_LOADING } from "../actions/types";

const initialState = {
  ethPrice: null,
  ethPriceLoading: false,
};

export default function getETHRate(state = initialState, action) {
  switch (action.type) {
    case ETH_RATE_LOADING:
      return {
        ...state,
        ethPriceLoading: true,
      };
    case GET_ETH_RATE:
      return {
        ...state,
        ethPrice: action.payload,
        ethPriceLoading: false,
      };
    default:
      return state;
  }
}
