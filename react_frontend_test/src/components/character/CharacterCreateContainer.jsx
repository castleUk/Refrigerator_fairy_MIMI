import { useNavigate } from "react-router-dom";
import CharacterCreateForm from "./CharacterCreateForm";
import axios from "axios";

const CharacterCreateContainer = (props) => {
  const navigate = useNavigate();

  //등록처리
  const onRegister = async (freezerName) => {
    const data = {
      name: freezerName,
    };
    const token = localStorage.getItem("accessToken");
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    };

    try {
      const response = await axios.post(
        "/api/freezer/add",
        JSON.stringify(data),
        {
          headers: headers,
        }
      );
      props.onChange();
      navigate("/freezer");
    } catch (error) {
      console.log(error);
    }
  };

  return <CharacterCreateForm onRegister={onRegister} />;
};

export default CharacterCreateContainer;