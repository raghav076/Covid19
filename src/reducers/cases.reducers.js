import { caseConstants } from "../actions/constants";

const initialState = {
  confirmed: "",
  active: "",
  recovered: "",
  deceased: "",
  lastUpdated: "",
  loading: false,
};

const cases = (state = initialState, action) => {
  switch (action.type) {
    case caseConstants.GET_CASES_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case caseConstants.GET_CASES_SUCCESS:
      state = {
        ...state,
        confirmed: action.payload.confirmed,
        active: action.payload.active,
        recovered: action.payload.recovered,
        deceased: action.payload.deceased,
        lastUpdated: action.payload.lastUpdated,
        loading: false,
      };
      break;
    case caseConstants.GET_CASES_FAILURE:
      state = {
        ...state,
        loading: false,
      };
      break;
  }
  return state;
};

export default cases;
