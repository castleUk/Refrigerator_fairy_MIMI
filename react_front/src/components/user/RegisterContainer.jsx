import React from "react";
import RegisterForm from "./RegisterForm";
import axios from "axios";

const RegisterContainer = () => {
  //등록처리
  const onRegister = async (userEmail, userPw, userName) => {
    const data = {
      userEmail: userEmail,
      userPw: userPw,
      userName: userName,
    };
    try {
      const response = await axios.post("/auth/signup", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      alert(" 등록이 완료되었습니다");

      window.location.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  return <RegisterForm onRegister={onRegister} />;
};

export default RegisterContainer;
