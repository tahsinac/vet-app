import AnimalProfile from "../components/AnimalProfile";
import { useHistory } from "react-router-dom";

export default function AnimalProfilePage() {
  //   const history = useHistory();

  //   const addViewProfileHandler = (profileID) => {
  //     console.log(profileID);
  //     history.push("/animal-profile");
  //   };
  // const history = useHistory();

  // const addViewProfileHandler = (profileID) => {
  //   console.log(profileID);
  //     history.push("/animal-profile");
  //     window.location.reload();
  // };

  return (
    <div>
      <AnimalProfile />
      {/* <ProfileGrid sendAnimal={addViewProfileHandler} /> */}
    </div>
  );
}
