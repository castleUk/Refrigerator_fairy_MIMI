import { useNavigate } from "react-router-dom";
import FreezerCreateForm from "./FreezerCreateForm";
import axios from "axios";
import { instance } from "../api/Api";

const FreezerCreateContainer = (props) => {
  const navigate = useNavigate();

  //등록처리
  const onRegister = async (freezerName) => {
    const data = {
      name: freezerName,
    };
    try {
      const response = await instance.post(
        "/api/freezer/add",
        JSON.stringify(data)
      );
      props.onChange();
      navigate("/freezer");
    } catch (error) {
      console.log(error);
    }
  };

  return <FreezerCreateForm onRegister={onRegister} />;
};

export default FreezerCreateContainer;
