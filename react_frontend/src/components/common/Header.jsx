import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'; 
// icon
import { BsFillBellFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { HiOutlineLogout } from "react-icons/hi";
import { ImProfile } from "react-icons/im";
// template
import Dropdown from 'react-bootstrap/Dropdown';
// component
import CharacterChangeComponent from '../character/CharacterChangeComponent';
import FredgeNoticeComponent from '../notice/FredgeNoticeComponent';

const Header = () => {
  const [noticeShow, setNoticeShow] = useState(false);
  const [changeShow, setChangeShow] = useState(false);

    //로그인 상태 관리
    const [isLogin, setIsLogin] = useState(false)

useEffect(() => {
  if(localStorage.getItem('accessToken')===null){
    console.log('isLogin ?? :: ', isLogin)
  }else{
    setIsLogin(true)
    console.log('isLogin ?? :: ' , isLogin)
  }
},[])

  const logoutHandler = e => {
    e.preventDefault();
    setIsLogin(false)
    localStorage.removeItem('accessToken')
  }

  const noticeHandleClick = e =>{
    e.preventDefault();
    setNoticeShow(current => !current);
  }
  
  const changeHandleClick = e =>{
    e.preventDefault();
    setChangeShow(current => !current);
  }

  return(
    <>
      <header className='header'>
        <div className='left'>
          <Link to="/"><h1 className='logo'>미미</h1></Link>
        </div>

        <div className='right'>

          <ul className='sub-nav'>
            <li className='sub-item'><Link to="/" className='sub-link'><FaHome className='icon'/></Link></li>
            <li className='sub-item'><Link className='sub-link' onClick={noticeHandleClick}><BsFillBellFill className='icon'/></Link></li>
            <li className='sub-item'><Link className='sub-link' onClick={changeHandleClick}><CgSmartHomeRefrigerator className='icon'/></Link></li>
            {!isLogin && <li className='sub-item'><Link to="/login" className='sub-link'>로그인</Link></li>}
            {isLogin && <li className='sub-item' onClick={logoutHandler}><Link to="/login" className='sub-link'>로그아웃</Link></li>}
            <li className='sub-item'>
              <Dropdown className='user-dropdown'>
                <Dropdown.Toggle id="userDropdown">홍길동님</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item ><ImProfile className='icon' /> 내정보</Dropdown.Item>
                  <Dropdown.Item ><HiOutlineLogout className="icon" />로그아웃</Dropdown.Item>
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
}

export default Header;