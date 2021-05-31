import {
  GET_ASSETS,
  GET_RECENT_ASSETS,
  GET_ALL_ASSETS,
  GET_ASSET,
  ASSET_LOADING,
} from "../actions/types";

const initialState = {
  assets: [],
  recentAssets: [],
  allAssets: [],
  asset: {},
  assetLoading: false,
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case ASSET_LOADING:
      return {
        ...state,
        assetLoading: true,
      };
    case GET_ASSETS:
      return {
        ...state,
        assets: action.payload,
        assetLoading: false,
      };
    case GET_RECENT_ASSETS:
      return {
        ...state,
        recentAssets: action.payload,
        assetLoading: false,
      };
    case GET_ALL_ASSETS:
      return {
        ...state,
        allAssets: action.payload,
        assetLoading: false,
      };
    case GET_ASSET:
      return {
        ...state,
        asset: action.payload,
        assetLoading: false,
      };
    default:
      return state;
  }
}
