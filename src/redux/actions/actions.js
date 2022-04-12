import * as constant from '../constants/index'
import {createAction} from "redux-actions";

// all poll actions....
export const allPollRequest = createAction(constant.ALLPOLLREQUEST)
export const allPollSuccess = createAction(constant.ALLPOLLSUCCESS)
export const allPollError = createAction(constant.ALLPOLLERROR) 

// create poll actions .......
export const addPollRequest = createAction(constant.ADD_POLL_REQUEST)
export const addPollSuccess = createAction(constant.ADD_POLL_SUCCESS)
export const addPollError = createAction(constant.ADD_POLL_ERROR)

// delete poll actions.....
export const deletePollRequest = createAction(constant.DELETE_POLL_REQUEST)
export const deletePollSuccess = createAction(constant.DELETE_POLL_SUCCESS)
export const deletePollError = createAction(constant.DELETE_POLL_ERROR)