import { caseConstants } from "./constants";
import axios from "../helpers/axiosCovid";
import { setStateCode } from "../stateCodes";
import { res } from "./cases";

export const getCases = (state, dist) => {
  return async (dispatch) => {
    // const res = await axios.get();
    let data = {};
    let last_updated = "";
    // if (res.status === 200) {
    if (state !== "") {
      const key = setStateCode(state);
      data = res[key];
      last_updated = data.meta.last_updated;
      if (dist !== "") {
        data = data.districts[dist];
      } else {
      }
    } else {
      data = res.TT;
      last_updated = data.meta.last_updated;
    }
    // }

    dispatch({
      type: caseConstants.GET_CASES_SUCCESS,
      payload: {
        confirmed: data.total.confirmed,
        recovered: data.total.recovered,
        deceased: data.total.deceased,
        active:
          data.total.confirmed - data.total.recovered - data.total.deceased,
        lastUpdated: last_updated,
      },
    });
  };
};
