import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { instance } from "../api/Api";
import Logo from "../../assets/images/logo.png";
import { useMediaQuery } from 'react-responsive';
// component
import FreezerChangeComponent from "../Freezer/FreezerChangeComponent";
import FreezerNoticeComponent from "../notice/FreezerNoticeComponent";
import MobileMenu from "./MobileMenu";
import Menu from "./Menu";

const Header = () => {
  const navigate = useNavigate();
  const [noticeShow, setNoticeShow] = useState(false);
  const [changeShow, setChangeShow] = useState(false);
  const [myInfo, setMyInfo] = useState([]);
  const [isToggle, setIsToggle] = useState(false);

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
    localStorage.removeItem("refreshToken");
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

  // 반응형
  const isDesktop = useMediaQuery ({ query: '(min-width: 981px)' });
  const isMobile = useMediaQuery ({ query: '(max-width: 980px)' });

  // menu 버튼
  const onMenuClick = () => {
    setIsToggle(!isToggle);
  }

  return (
    <>
    <header className="header">
      <div className="left">
        <Link to="/freezer">
          <h1 className="logo"><img src={Logo} alt="로고" /></h1>
        </Link>
      </div>

      {
        isDesktop &&
        <div className="right">
          <Menu 
            isLogin={isLogin}
            myPageHandler={myPageHandler}
            myInfo={myInfo}
            noticeHandleClick={noticeHandleClick}
            changeHandleClick={changeHandleClick}
            logoutHandler={logoutHandler}
          />
        </div>
      }

      {
        isMobile &&
        <MobileMenu 
          isToggle={isToggle}
          isLogin={isLogin}
          onMenuClick={onMenuClick}
          myPageHandler={myPageHandler}
          myInfo={myInfo}
          noticeHandleClick={noticeHandleClick}
          changeHandleClick={changeHandleClick}
          logoutHandler={logoutHandler}
        />
      }
    </header>

    {noticeShow && <FreezerNoticeComponent onClick={noticeHandleClick} setNoticeShow={setNoticeShow}/>}
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
