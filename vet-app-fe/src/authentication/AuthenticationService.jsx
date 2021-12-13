import axios from "axios";
import { SERVER_URL } from "../constants.js";

const signup = (username, active, email, password, activationDate, role) => {
  return axios.post(`${SERVER_URL}auth/signup`, {
    username,
    active,
    email,
    password,
    activationDate,
    role,
  });
};

const signin = (username, password) => {
  return axios
    .post(`${SERVER_URL}auth/signin`, {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("isAuthenticated", "true");
      }
      console.log(response.data);
      return response.data;
    });
};

const logout = () => {
  //   localStorage.removeItem("user");
  //   localStorage.removeItem("isAuthenticated");
  localStorage.clear();
  window.location.reload();
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const auth = {
  signin,
  signup,
  logout,
  getCurrentUser,
};

export default auth;
