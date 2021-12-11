import { useState } from "react";
import SecurityContext from "./SecurityContext";
import axios from "axios";
import { SERVER_URL } from "../constants.js";
import auth from "../authentication/AuthenticationService";

// const SecurityProvider = (props) => {
//   const [loggedIn, setLoggedIn] = useState(false);

//   return (
//       <SecurityContext.Provider
//         value={{
//             login: axios.post
//         }}

//   )

// const signup = (username, email, password, activationDate) => {
//     return axios.post(`${SERVER_URL}auth/signup`, {
//       username,
//       email,
//       password,
//       activationDate,
//     });
//   };Î

//   const signin = (username, password) => {
//     return axios
//       .post(`${SERVER_URL}auth/signin`, {
//         username,
//         password,
//       })
//       .then((response) => {
//         if (response.data.accessToken) {
//           localStorage.setItem("user", JSON.stringify(response.data));
//         }
//         console.log(response.data);
//         return response.data;
//       });
//   };

//   const logout = () => {
//     localStorage.removeItem("user");
//   };

//   const getCurrentUser = () => {
//     return JSON.parse(localStorage.getItem("user"));
//   };

//   const auth = {
//     signin,
//     signup,
//     logout,
//     getCurrentUser,
//   };

// export default SecurityProvider;
