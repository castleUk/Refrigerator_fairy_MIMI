import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// icon
import { BsFillBellFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { HiOutlineLogout } from "react-icons/hi";
import { ImProfile } from "react-icons/im";
// template
import Dropdown from "react-bootstrap/Dropdown";

// component
import CharacterChangeComponent from "../character/CharacterChangeComponent";
import FredgeNoticeComponent from "../notice/FredgeNoticeComponent";

const Header = () => {
  const navigate = useNavigate();
  const [noticeShow, setNoticeShow] = useState(false);
  const [changeShow, setChangeShow] = useState(false);
  const [myInfo, setMyInfo] = useState([]);

  //로그인 상태 관리
  const [isLogin, setIsLogin] = useState(false);


  //조회처리
  const onMyInfo = async () => {
    console.log("onMyInfo 작동")
    const token = localStorage.getItem("accessToken");
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    };

    try {
      const response = await axios.get("/api/member/me", {
        headers: headers,
      });
      const data = await response.data;
      setMyInfo(data);
      console.log("내정보" + data.userName);
      
    } catch (error) {
      console.log(error);
      setMyInfo([]);
    }
  };


  useEffect(() => {
    onMyInfo();
    if (localStorage.getItem("accessToken") === null) {
      console.log("isLogin ?? :: ", isLogin);
    } else {
      setIsLogin(true);
      console.log("isLogin ?? :: ", isLogin);
    }
  }, [isLogin]);

  const logoutHandler = (e) => {
    e.preventDefault();
    setIsLogin(false);
    localStorage.removeItem("accessToken");
    navigate("/")
  };

  const noticeHandleClick = (e) => {
    e.preventDefault();
    setNoticeShow((current) => !current);
  };

  const changeHandleClick = (e) => {
    e.preventDefault();
    setChangeShow((current) => !current);
  };

  return (
    <>
      <header className="header">
        <div className="left">
          <Link to="/">
            <h1 className="logo">미미</h1>
          </Link>
        </div>

        <div className="right">
          <ul className="sub-nav">
            <li className="sub-item">
              <Link to="/" className="sub-link">
                <FaHome className="icon" />
              </Link>
            </li>
            <li className="sub-item">
              <Link className="sub-link" onClick={noticeHandleClick}>
                <BsFillBellFill className="icon" />
              </Link>
            </li>
            <li className="sub-item">
              <Link className="sub-link" onClick={changeHandleClick}>
                <CgSmartHomeRefrigerator className="icon" />
              </Link>
            </li>
            {!isLogin && (
              <li className="sub-item">
                <Link to="/" className="sub-link">
                  로그인
                </Link>
              </li>
            )}
            {isLogin && (
              <li className="sub-item" onClick={logoutHandler}>
                <Link to="/" className="sub-link">
                  로그아웃
                </Link>
              </li>
            )}
            <li className="sub-item">
              <Dropdown className="user-dropdown">
                <Dropdown.Toggle id="userDropdown">{myInfo.userName} 님</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <ImProfile className="icon" /> 내정보
                  </Dropdown.Item>
                  {isLogin && (
                    <Dropdown.Item onClick={logoutHandler}>
                      <HiOutlineLogout className="icon" />
                      로그아웃
                    </Dropdown.Item>
                  )}
                  {!isLogin && (
                    <Dropdown.Item>
                      <HiOutlineLogout className="icon" />
                      로그인
                    </Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </header>
      {noticeShow && <FredgeNoticeComponent />}
      {changeShow && <CharacterChangeComponent />}
    </>
  );
};

export default Header;
