import React, { useRef, useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../constants.js";

import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import AuthenticationService from "../authentication/AuthenticationService";

import LockIcon from "@mui/icons-material/Lock";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function LoginForm() {
  const paperStyle = {
    padding: 20,
    height: "40vh",
    width: 280,
    margin: "20px auto",
  };

  const avatarStyle = { backgroundColor: "#9c27b0" };
  const btnstyle = { margin: "8px 0" };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameInputChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordInputChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const loginOnSubmit = (event) => {
    event.preventDefault(); //To prevent losing state
    console.log(username);
    console.log(password);

    executeAuthenticationService(username, password).then((response) =>
      console.log(response)
    );
  };

  function executeAuthenticationService(username, password) {
    return axios.post(`${SERVER_URL}auth/signin`, {
      username,
      password,
    });
  }

  return (
    <Grid>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockIcon />
            </Avatar>
            <Typography variant="h4" color="primary" sx={{ p: 3 }}>
              Sign In
            </Typography>
          </Grid>
          <TextField
            label="Username"
            placeholder="Enter username"
            fullWidth
            required
            onChange={usernameInputChangeHandler}
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
            onChange={passwordInputChangeHandler}
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
            onClick={loginOnSubmit}
          >
            Sign in
          </Button>
          <Typography>
            <Link href="#">Forgot password ?</Link>
          </Typography>
        </Paper>
      </div>
    </Grid>
  );
}
