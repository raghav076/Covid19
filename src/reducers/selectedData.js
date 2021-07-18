import { stateConstants } from "../actions/constants";

const initialState = {
  state: "",
  dist: "",
};

const state = (state = initialState, action) => {
  switch (action.type) {
    case stateConstants.SET_STATE:
      state = {
        ...state,
        state: action.payload,
      };
      break;
    case stateConstants.SET_DIST:
      state = {
        ...state,
        dist: action.payload,
      };
      break;
  }
  return state;
};

export default state;
