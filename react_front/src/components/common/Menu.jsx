import React from "react";
import { useMediaQuery } from 'react-responsive';
import { Link } from "react-router-dom";
// icon
import { BsFillBellFill } from "react-icons/bs";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { RiBook2Fill } from "react-icons/ri";
// template

const Menu = ({isLogin, myPageHandler, myInfo, noticeHandleClick, changeHandleClick, logoutHandler}) => {

  const isMobile = useMediaQuery ({ query: '(max-width: 980px)' });

  return (
    <ul className={"sub-nav" + (isMobile ? ' m-nav': '')}>
      <li className="sub-item">
        <Link to="/freezer" className="sub-link">
          <FaHome className="icon" />
          <span>홈</span>
        </Link>
      </li>
      <li className="sub-item">
        <Link to="/recipe" className="sub-link">
          <RiBook2Fill className="icon" />
          <span>레시피</span> 
        </Link>
      </li>
      <li className="sub-item">
        <Link className="sub-link" onClick={noticeHandleClick}>
          <BsFillBellFill className="icon" />
          <span>냉장고 알림</span>
        </Link>
      </li>
      <li className="sub-item">
        <Link className="sub-link" onClick={changeHandleClick}>
          <CgSmartHomeRefrigerator className="icon" />
          <span>냉장교 체인지</span>
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
            <span>로그아웃</span>
          </Link>
        </li>
      )}
      <li className="sub-item">
        <div className="user-profil" onClick={myPageHandler}>
          {myInfo.userName} 님
        </div>
      </li>
    </ul>
  );
};

export default Menu;
