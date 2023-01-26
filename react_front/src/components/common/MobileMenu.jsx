import React, { useEffect, useState } from "react";
// icon
import { AiOutlineMenu } from "react-icons/ai";
import Menu from "./Menu";
// template

const MobileMenu = ({isToggle, isLogin, onMenuClick, myPageHandler, myInfo, noticeHandleClick, changeHandleClick, logoutHandler}) => {

  return (
    <div className={"m-menu" + (isToggle ? ' open' : ' close')}>
      <li className="sub-item btn-menu">
        <AiOutlineMenu className="icon" onClick={onMenuClick} />
      </li>
      {
        isToggle &&
        <Menu
          isLogin={isLogin}
          myPageHandler={myPageHandler}
          myInfo={myInfo}
          noticeHandleClick={noticeHandleClick}
          changeHandleClick={changeHandleClick}
          logoutHandler={logoutHandler}
        />
      }  
    </div>
  );
};

export default MobileMenu;
