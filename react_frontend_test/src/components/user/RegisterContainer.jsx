import React from "react";
import { useNavigate } from "react-router-dom";
import * as api from "../../lib/api";
import RegisterForm from "./RegisterForm";


const RegisterContainer = () => {
  const navigate = useNavigate();
  //등록처리
  const onRegister = async (userEmail, userPw, userName) => {
    try {
      await api.adminSetup(userEmail, userPw, userName);

      alert(" 등록이 완료되었습니다");

      navigate("/");
    } catch (e) {
      alert(e.response.data);
    }
  };

  return <RegisterForm onRegister={onRegister} />;
};

export default RegisterContainer;
