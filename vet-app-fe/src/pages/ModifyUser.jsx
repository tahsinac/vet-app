import ModifyUserForm from "../components/ModifyUserForm";
import { useHistory } from "react-router-dom";
import auth from "../authentication/AuthenticationService";

export default function ModifyUser() {
  return <ModifyUserForm />;
}
