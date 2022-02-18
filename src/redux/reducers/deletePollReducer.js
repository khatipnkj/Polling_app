import * as constant from '../constants/index'

const InitialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  
};

const DeletePollReducer = (state = InitialState , action) => {
    // console.log(action)
    switch (action.type) {
      case constant.DELETE_POLL_REQUEST:
        return {
          ...state,
          isLoading: true,
          isSuccess: false,
          isError: false,
        };
        case constant.DELETE_POLL_SUCCESS:
        return {
          isLoading: false,
          isSuccess: true,
          isError: false,
          ...action.payload.response.data
        };
      case constant.DELETE_POLL_ERROR:
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

  export default DeletePollReducer;