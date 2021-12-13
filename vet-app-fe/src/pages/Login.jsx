import LoginForm from "../components/LoginForm";
import { useHistory } from "react-router-dom";
import auth from "../authentication/AuthenticationService";

export default function Login() {
  const history = useHistory();

  const addLoginHandler = (loginData) => {
    console.log(loginData);
    auth.signin(loginData.username, loginData.password).then(() => {
      history.push("/welcome");
      window.location.reload();
    });
  };

  return (
    <div
      style={{
        backgroundImage: "url(/images/calgary.jpg)",
        backgroundSize: "cover",
      }}
    >
      <LoginForm onLogin={addLoginHandler} />
    </div>
  );
}
