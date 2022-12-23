import React from "react";
import LoginForm from "./LoginForm";
import * as api from "../../lib/api";
import { useNavigate } from "react-router-dom";

const LoginContainer = () => {
  const navigate = useNavigate();
  //등록처리
  const onLogin = async (account) => {
    try {
      await api.login(account);

      alert(" 로그인 해또");

      navigate("/freezer");
    } catch (e) {
      alert("로그인실패 :" + e.response.data)

    }
  };

  return <LoginForm onLogin={onLogin} />;
};

export default LoginContainer;
