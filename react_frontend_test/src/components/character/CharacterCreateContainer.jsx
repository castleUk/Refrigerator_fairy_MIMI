import { useNavigate } from "react-router-dom"
import CharacterCreateForm from "./CharacterCreateForm";
import * as api from "../../lib/api";

const CharacterCreateContainer = () => {
  const navigate = useNavigate();

  //등록처리
  const onRegister = async (freezerName) => {
    console.log(freezerName)
    try {
      await api.freezerAdd(freezerName);

      alert(" 등록이 완료되었습니다");

      navigate("/freezer");
    } catch (e) {
      alert(e.response.data);
    }
  };

  return <CharacterCreateForm onRegister={onRegister} />;
};


export default CharacterCreateContainer;