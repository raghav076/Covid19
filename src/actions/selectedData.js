import { stateConstants } from "./constants";

export const setState = (state) => {
  return async (dispatch) => {
    dispatch({ type: stateConstants.SET_STATE, payload: state });
  };
};

export const setDist = (dist) => {
  return async (dispatch) => {
    dispatch({ type: stateConstants.SET_DIST, payload: dist });
  };
};
