import axios from "axios";
import { SERVER_URL } from "../constants.js";

export default function AuthenticationService() {
  function executeAuthenticationService(username, password) {
    return axios.post(`${SERVER_URL}/api/signin`, {
      username,
      password,
    });
  }
}
