import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  GET_USERS,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  SET_USERS,
  SORT_USER,
} from "../constants/userConstants";

//Reducer para usuario que se loguea
export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    case USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_SIGNOUT:
      return {};

    default:
      return state;
  }
};


//Reducer para usuario que se crea una cuenta
export const userRegisterReducer = (state, action) => {
	switch (action.type) {
		case USER_REGISTER_REQUEST:
			return { loading: true };
		case USER_REGISTER_SUCCESS:
			return { loading: false, userInfo: action.payload };
		case USER_REGISTER_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

export const users = (
  state = { users: [], loading: false, listLoading: true }, action) => {
    switch (action.type) {
      case GET_USERS:
        return {
          ...state,
          users: action.payload,
          listLoading: false,
        };
      case USER_DELETE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case USER_DELETE_SUCCESS:
        return {
          ...state,
          loading: false,
          deletedUser: action.payload,
        };
      case USER_DELETE_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
        case SET_USERS:
          return{
            ...state,
            users:action.payload,
          }
        case SORT_USER: 
        return{
          ...state,
          users:action.payload,
        }
      default:
        return state;
    }
  };