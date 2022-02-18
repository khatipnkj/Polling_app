import { put, call } from "@redux-saga/core/effects";
import { deletePollSuccess , deletePollError, allPollRequest } from "../actions/actions";
import axios from "axios";

export function* DeletePollSaga(action) {
//   console.log(action.payload)
  const url = `https://secure-refuge-14993.herokuapp.com/delete_poll?id=${action.payload}`
//   const apiCall = () => {
//     return axios.delete(url)
//   }
  try {
    const response = yield call(axios.delete, url);
    if (response) {
    //   console.log(response)
      yield put(deletePollSuccess({ response: response }));
      yield put (allPollRequest())
    } else {
      yield put(deletePollError({ error: "Invalid  details" }));
    }
  } catch (error) {
    console.log(error)
    yield put(deletePollError({ error: error }));
  }
}