import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNOUT,
} from "../constants/userConstants";
import Axios from "axios";

const URL = process.env.REACT_APP_URL ?? "http://localhost:5000";
// const URL = "https://foodland-production.up.railway.app/";

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
