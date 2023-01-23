import React from "react";
import Header from "../components/common/Header";
import MyPageComponent from "../components/user/MyPageComponent";
import { useLocation } from "react-router-dom";
const MyPage = () => {
  const location = useLocation();
  console.log("state", location.state);

  return (
    <div className="page character-page">
      <Header />
      <MyPageComponent myInfo={location.state} />
    </div>
  );
};

export default MyPage;
