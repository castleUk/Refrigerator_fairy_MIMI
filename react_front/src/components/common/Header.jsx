import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { instance } from "../api/Api";
import Logo from "../../assets/images/logo.png";
// icon
import { BsFillBellFill } from "react-icons/bs";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { RiBook2Fill } from "react-icons/ri";
// template

// component
import FreezerChangeComponent from "../Freezer/FreezerChangeComponent";
import FreezerNoticeComponent from "../notice/FreezerNoticeComponent";

const Header = () => {
  const navigate = useNavigate();
  const [noticeShow, setNoticeShow] = useState(false);
  const [changeShow, setChangeShow] = useState(false);
  const [myInfo, setMyInfo] = useState([]);

  //로그인 상태 관리
  const [isLogin, setIsLogin] = useState(false);

  //조회처리
  const onMyInfo = async () => {
    try {
      const response = await instance.get("/api/member/me");
      const data = response.data;
      setMyInfo(data);
    } catch (error) {
      console.log(error);
      setMyInfo([]);
    }
  };

  useEffect(() => {
    onMyInfo();
    if (localStorage.getItem("accessToken") === null) {
    } else {
      setIsLogin(true);
    }
  }, [isLogin]);

  const logoutHandler = (e) => {
    e.preventDefault();
    setIsLogin(false);
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  const noticeHandleClick = (e) => {
    e.preventDefault();
    setNoticeShow((current) => !current);
  };

  const changeHandleClick = (e) => {
    e.preventDefault();
    setChangeShow((current) => !current);
  };

  const myPageHandler = () => {
    navigate("/mypage", { state: myInfo });
  };

  return (
    <>
      <header className="header">
        <div className="left">
          <Link to="/freezer">
            <h1 className="logo"><img src={Logo} alt="로고" /></h1>
          </Link>
        </div>

        <div className="right">
          <ul className="sub-nav">
            <li className="sub-item">
              <Link to="/freezer" className="sub-link">
                <FaHome className="icon" />
              </Link>
            </li>
            <li className="sub-item">
              <Link to="/recipe" className="sub-link">
                <RiBook2Fill className="icon" />
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
                  <HiOutlineLogout className="icon" />
                </Link>
              </li>
            )}
            <li className="sub-item">
              <div className="user-profil" onClick={myPageHandler}>
                {myInfo.userName} 님
              </div>
            </li>
          </ul>
        </div>
      </header>
      {noticeShow && <FreezerNoticeComponent onClick={noticeHandleClick} />}
      {changeShow && <FreezerChangeComponent onClick={changeHandleClick} />}
      {/* {myPageShow && (
        <MyPageModal
          show={myPageHandler}
          onHide={myPageHandler}
          myInfo={myInfo}
        />
      )} */}
    </>
  );
};

export default Header;
