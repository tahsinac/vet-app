import ProfileGrid from "../components/ProfileGrid";
import { useHistory } from "react-router-dom";


export default function ProfileGridPage() {

  const history = useHistory();

  const addViewProfileHandler = (profileID) => {
    console.log(profileID);
      history.push("/animal-profile");
      window.location.reload();
  };

  return (
    <div>
      <ProfileGrid/>
      {/* <ProfileGrid sendAnimal={addViewProfileHandler} /> */}
    </div>
  );
}