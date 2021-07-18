import axios from "../helpers/axios";
import { stateConstants } from "./constants";

export const getAllStates = () => {
  return async (dispatch) => {
    dispatch({ type: stateConstants.GET_ALL_STATES_REQUEST });
    const res = await axios.get(
      "https://raw.githubusercontent.com/raghav076/Indian-States-And-Districts/master/states-and-districts.json"
    );
    if (res.status === 200) {
      dispatch({
        type: stateConstants.GET_ALL_STATES_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: stateConstants.GET_ALL_STATES_FAILURE,
        payload: res.error,
      });
    }
  };
};
