import * as constant from "../constants/index";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const allPollsReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.ALLPOLLREQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case constant.ALLPOLLSUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
        response: action.payload.response.data.data,
      };
    case constant.ALLPOLLERROR:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default allPollsReducer;
