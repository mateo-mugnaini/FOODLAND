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
import Axios from "axios";
import Swal from "sweetalert2"


const URL = process.env.REACT_APP_URL ?? "http://localhost:5000";


export const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: email, password });
  try {
    const { data } = await Axios.post(`${URL}/api/users/signin`, {
      email,
      password,
    });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_SIGNOUT });
};

export const signIn = (user) => (dispatch) => {
  if (user.name && user.email) {
    dispatch({
      type: USER_SIGNIN_REQUEST,
      payload: { email: user.email, password: user.email },
    });
    Axios.post(`${URL}/api/users/signin`, {
      email: user.email,
      password: user.email,
    })
      .then(({ data }) => {
        if (data._id) {
          dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
          localStorage.setItem("userInfo", JSON.stringify(data));
        }
      })
      .catch((error) => {
        Axios.post(`${URL}/api/users/signup`, {
          name: user.name,
          email: user.email,
          password: user.email,
        })
          .then(({ data }) => {
            dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
            localStorage.setItem("userInfo", JSON.stringify(data));
          })
          .catch((error) =>
            dispatch({
              type: USER_SIGNIN_FAIL,
              payload:
                error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message,
            })
          );
      });
  } else {
    dispatch({ type: USER_SIGNIN_FAIL, payload: "Third party login failure" });
  }
};

//Acción para crear un usuario
export const register = (name, email, password) => async (dispatch) => {
	dispatch({ type: USER_REGISTER_REQUEST, payload: name, email, password });
	try {
		const { data } = await Axios.post(`${URL}/api/users/signup`, {
			name,
			email,
			password,
		});
		dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
		dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
		localStorage.setItem("userInfo", JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_REGISTER_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

//action para obtener la lista de usuarios:
export const get_users= (token) => {
  return async (dispatch) => {
    try {
      const response = await Axios.get(`${URL}/api/users`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch({
        type: GET_USERS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_USERS,
        payload: error,
      });
    }
  };
};

export const put_user = ({ id, isAdmin, token }) => {
  return async (dispatch) => {
    try {
      const updateUser = await Axios.put(`${URL}/api/users/${id}`, {isAdmin}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch({
        type: GET_USERS,
        payload: updateUser.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_USERS,
        payload: error,
      });
    }
  };
};

export const delete_user = (id, token) => async (dispatch) => {
  dispatch({ type: USER_DELETE_REQUEST });
  try {
    const { data } = await Axios.delete(`/api/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data)
    dispatch({ type: USER_DELETE_SUCCESS, payload: id });
    Swal.fire("User Deleted!", "The user has been deleted.", "success");
  } catch (error) {
    dispatch({
      type: USER_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    Swal.fire("Error", error.message, "error");
  }
};

export const set_users = (payload) => {
  return {
  type: SET_USERS,
  payload,
};
}

export const sort_user = ({value, users}) =>{
let datasort;

if(value === "all") {
  datasort = users
} else if(value === "NameAsc") {
  datasort = users.slice().sort(function(a, b) {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return 0;
    }
  });
} else if(value === "NameDsc") {
  datasort = users.slice().sort(function(a, b) {
    if (a.name < b.name) {
      return 1;
    } else if (a.name > b.name) {
      return -1;
    } else {
      return 0;
    }
  });
// } else if(value === "IdAsc") {
//   datasort = users.slice().sort(function(a, b) {
//     return a._id - b._id;
//   });
// } else if(value === "IdDsc") {
//   datasort = users.slice().sort(function(a, b) {
//     return b._id - a._id;
//   });
} else if(value === "EmailAsc") {
  datasort = users.slice().sort(function(a, b) {
    if (a.email < b.email) {
      return -1;
    } else if (a.email > b.email) {
      return 1;
    } else {
      return 0;
    }
  });
} else if(value === "EmailDsc") {
  datasort = users.slice().sort(function(a, b) {
    if (a.email < b.email) {
      return 1;
    } else if (a.email > b.email) {
      return -1;
    } else {
      return 0;
    }
  });
} else if(value === "Users") {
  datasort = users.slice().sort(function(a, b) {
    return a.isAdmin === b.isAdmin ? 0 : a.isAdmin ? -1 : 1;
  }).filter(function(u) {
    return !u.isAdmin;
  });
} else if(value === "Admin") {
  datasort = users.slice().sort(function(a, b) {
    return a.isAdmin === b.isAdmin ? 0 : a.isAdmin ? -1 : 1;
  }).filter(function(u) {
    return u.isAdmin;
  });
}

return {
  type: SORT_USER,
  payload: datasort
};
}