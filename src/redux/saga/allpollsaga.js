import { put, call } from "@redux-saga/core/effects";
import { allPollSuccess , allPollError } from "../actions/actions";
import axios from "axios";

export function* AllPollSaga(action) {
  const url = `https://secure-refuge-14993.herokuapp.com/list_polls`
  // const apiCall = () => {
  //   return axios.post(url)
  // }
  try {
    const response = yield call(axios.get, url);
    // console.log(response)
    if (response) {
      yield put(allPollSuccess({ response: response }));
    } else {
      yield put(allPollError({ error: "Invalid  details" }));
    }
  } catch (error) {
    console.log(error)
    yield put(allPollError({ error: error }));
  }
}

