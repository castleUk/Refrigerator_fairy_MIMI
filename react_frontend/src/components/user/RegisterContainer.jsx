import React from "react";
import { useNavigate } from "react-router-dom";
import * as api from "../../lib/api";
import RegisterForm from "./RegisterForm";


const RegisterContainer = () => {
  const navigate = useNavigate();
  //등록처리
  const onRegister = async (userId, userEmail, userPw, userPhone, userName) => {
    try {
      await api.adminSetup(userId, userEmail, userPw, userName, userPhone);

      alert(" 등록이 완료되었습니다");

      navigate("/login");
    } catch (e) {
      alert(e.response.data);
    }
  };

  return <RegisterForm onRegister={onRegister} />;
};

export default RegisterContainer;
