import { combineReducers } from "redux";
import  allpollsReducer  from "./addPollsReducer";
import createPollReducer from "./creartePollReducer";
import DeletePollReducer from "./deletePollReducer";

const rootReducer = combineReducers({
    allPolls: allpollsReducer,
    addPoll: createPollReducer,
    deletePoll: DeletePollReducer,
}) 

export default rootReducer;