import NewAnimalForm from "../components/NewAnimalForm";
import { useHistory } from "react-router-dom";
import authToken from "../authentication/DataService";
import axios from "axios";
import { SERVER_URL } from "../constants.js";

export default function AnimalForm() {
  const history = useHistory();

  const addNewAnimalHandler = (animalData) => {
    // console.log(animalData);
    axios
      .post(
        `${SERVER_URL}animals`,
        {
          species: animalData.species,
          weight: parseInt(animalData.weight),
          tattooNum: parseInt(animalData.tattoo),
          breed: animalData.breed,
          sex: animalData.sex,
          animalName: animalData.animalName,
        },
        { headers: authToken() }
      )
      // .then((response) => response.json())
      .then((response) => response.data.animalId)
      .then((data) => {
        history.push({ pathname: "/animal-profile", state: data });
      });
    // .then(() => {
    //   history.push("/animal-profile");
    //   // window.location.reload();
    // });
  };

  return (
    <div>
      <NewAnimalForm onNewAnimalSubmit={addNewAnimalHandler} />
    </div>
  );
}
