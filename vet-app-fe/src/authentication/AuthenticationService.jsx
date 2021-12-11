import axios from "axios";
import { SERVER_URL } from "../constants.js";

const signup = (username, email, password, activationDate) => {
  return axios.post(`${SERVER_URL}auth/signup`, {
    username,
    email,
    password,
    activationDate,
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
      }
      console.log(response.data);
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
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
