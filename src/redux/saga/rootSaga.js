import * as constant from "../constants/index";
import { fork, all, takeLatest, takeEvery } from "redux-saga/effects";
import { AllPollSaga } from "./allpollsaga";
import {CreatePollSaga} from './createpollsaga'
import {DeletePollSaga} from './deletepollsaga'

function* AllPollRootSaga() {
  yield takeLatest(constant.ALLPOLLREQUEST, AllPollSaga);
}

function* CreatePollRootSaga() {
  yield takeLatest(constant.ADD_POLL_REQUEST, CreatePollSaga);
}

function* DeleteRootSaga() {
  yield takeEvery(constant.DELETE_POLL_REQUEST, DeletePollSaga);
}

export default function* rootSaga() {
  yield all([fork(AllPollRootSaga), fork(CreatePollRootSaga), fork(DeleteRootSaga)]);
}
