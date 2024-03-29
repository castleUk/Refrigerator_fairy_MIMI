import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginContainer = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  //로그인
  const onLogin = async (account) => {
    const loginInfo = {
      userEmail: account.userEmail,
      userPw: account.userPw,
    };

    try {
      const response = await axios.post(
        "/auth/login",
        JSON.stringify(loginInfo),
        { headers: { "Content-Type": "application/json" } }
      );
      const data = await response.data;
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      navigate("/freezer", { replace: true });
    } catch (error) {
      if (error.response.status === 400) {
        setError("아이디 or 비밀번호를 확인하세요");
      }
    }
  };
  return <LoginForm onLogin={onLogin} onError={error} />;
};

export default LoginContainer;
