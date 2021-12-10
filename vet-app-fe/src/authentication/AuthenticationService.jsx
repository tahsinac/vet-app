import axios from "axios";
import { SERVER_URL } from "../constants.js";

class AuthenticationService {
  executeAuthenticationService(username, password) {
    return axios.post(`${SERVER_URL}auth/signin`, {
      username,
      password,
    });
  }
}
