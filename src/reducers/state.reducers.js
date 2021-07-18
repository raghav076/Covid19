import { stateConstants } from "../actions/constants";

const initialState = {
  states: [
    {
      key: "",
      name: "",
      districts: [],
    },
  ],
  loading: false,
  error: null,
  message: "",
};

const state = (state = initialState, action) => {
  switch (action.type) {
    case stateConstants.GET_ALL_STATES_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case stateConstants.GET_ALL_STATES_SUCCESS:
      state = {
        ...state,
        states: action.payload.states,
        loading: false,
        message: action.payload.message,
      };
      break;
    case stateConstants.GET_ALL_STATES_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
  }
  return state;
};

export default state;
