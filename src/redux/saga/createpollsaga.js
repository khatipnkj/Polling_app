import { put, call } from "@redux-saga/core/effects";
import { addPollSuccess , addPollError } from "../actions/actions";
import axios from "axios";

export function* CreatePollSaga(action) {
//   console.log(action)
  const url = `https://secure-refuge-14993.herokuapp.com/add_poll?title=${action.payload.Title}%20&options=${action.payload.opt1}____${action.payload.opt2}____${action.payload.opt3}____${action.payload.opt4}`
//   const apiCall = () => {
//     return axios.post(url)
//   }
  try {
    const response = yield call(axios.post, url);
    if (response) {
    //   console.log(response)
      yield put(addPollSuccess({ response: response }));
    } else {
      yield put(addPollError({ error: "Invalid  details" }));
    }
  } catch (error) {
    console.log(error)
    yield put(addPollError({ error: error }));
  }
}