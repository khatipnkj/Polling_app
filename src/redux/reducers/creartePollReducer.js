import * as constant from '../constants/index'

const InitialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  
};

const createPollReducer = (state = InitialState , action) => {
    // console.log(action)
    switch (action.type) {
      case constant.ADD_POLL_REQUEST:
        return {
          ...state,
          isLoading: true,
          isSuccess: false,
          isError: false,
        };
        case constant.ADD_POLL_SUCCESS:
        return {
          isLoading: false,
          isSuccess: true,
          isError: false,
          ...action.payload.response.data
        };
      case constant.ADD_POLL_ERROR:
        return {
          ...state,
          isLoading: false,
          isSuccess: false,
          isError: true,
          ...action.payload.error
        };
      default:
        return {
            ...state
        }
    }
  }

  export default createPollReducer;