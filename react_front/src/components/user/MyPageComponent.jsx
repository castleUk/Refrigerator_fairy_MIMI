import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { instance } from "../api/Api";
// template

const MyPageComponent = (props) => {
  const [likedList, setLikedList] = useState([]);

  const [exUserPw, setExUserPw] = useState("");

  const [userNewPw, setUserNewPw] = useState("");
  const [userNewPwCk, setUserNewPwCk] = useState("");

  const [isUserNewPwCk, setIsUserNewPwCk] = useState(false);

  const [userNewPwCkMessage, setUserNewPwCkMessage] = useState("");
  const [userPwCkMessage, setUserPwCkMessage] = useState();

  const navigate = useNavigate();

  // 현재 비밀번호 체크
  useEffect(() => {
    const onUserPwCk = async (password) => {
      const userInfo = {
        exUserPw: password,
      };
      try {
        const response = await instance.post(`/api/member/userpwch`, userInfo);
        setUserPwCkMessage(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    onUserPwCk(exUserPw);
  }, [exUserPw, userPwCkMessage]);

  //비밀번호 변경
  const onUserPwChange = async (exUserPw, userNewPw) => {
    const userInfo = {
      exUserPw: exUserPw,
      newUserPw: userNewPw,
    };

    try {
      await instance.post(`/api/member/userpw`, userInfo);
    } catch (error) {
      console.log(error);
    }
  };

  const userPwCkHandler = (e) => {
    const passwordCurrent = e.target.value;
    setExUserPw(passwordCurrent);
  };

  const changeUserPwHandler = (e) => {
    const passwordCurrent = e.target.value;
    setUserNewPw(passwordCurrent);
  };

  const changeUserPwCkHandler = (e) => {
    const passwordConfirmCurrent = e.target.value;
    setUserNewPwCk(passwordConfirmCurrent);

    if (userNewPw === passwordConfirmCurrent) {
      setUserNewPwCkMessage("비밀번호를 똑같이 입력했어요 : )");
      setIsUserNewPwCk(true);
    } else {
      setUserNewPwCkMessage("비밀번호가 틀려요. 다시 확인해주세요 ㅜ ㅜ");
      setIsUserNewPwCk(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    onUserPwChange(exUserPw, userNewPw);
  };

  //좋아요한 레시피 조회
  useEffect(() => {
    const onLikedList = async () => {
      try {
        const response = await instance.get(`/api/liked/me`);
        setLikedList(response.data.body.likedRecipeRespDto);
      } catch (error) {
        console.log(error);
      }
    };
    onLikedList();
  }, []);
  return (
    <div className="mypage-component">
      <div className="container">
        <div className="mypage-content">
          <div className="my-inf">
            <h3 className="title">마이 페이지</h3>
            <div className="user-content">
            <h5>회원정보</h5>
              <Form.Group className="mb-3 form-group">
                <label>이름</label>
                <div className=" user user-name">{props.myInfo.userName}</div>
              </Form.Group>
              <Form.Group className="form-group">
                <label>이메일</label>
                <div className="user user-email">{props.myInfo.userEmail}</div>
              </Form.Group>
            </div>
            
            <Form onSubmit={submitHandler}>
            <h5>비밀번호 변경</h5>
              <Form.Group className="mb-3 form-group" controlId="exPassword">
                <label>현재 비밀번호</label>
                <Form.Control
                  type="password"
                  name="exPassword"
                  placeholder="현재비밀번호"
                  onChange={userPwCkHandler}
                  value={exUserPw}
                  required
                />
                <span
                  className={`message ${
                    userPwCkMessage === true ? "success" : "error"
                  }`}
                >
                  {userPwCkMessage === true
                    ? "비밀번호가 일치합니다."
                    : "비밀번호가 일치하지 않습니다."}
                </span>
              </Form.Group>

              <Form.Group className="mb-3 form-group" controlId="newPassword">
              <label>새 비밀번호</label>
                <Form.Control
                  type="password"
                  name="newPassword"
                  placeholder="새 비밀번호"
                  onChange={changeUserPwHandler}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 form-group" controlId="newPasswordCk">
                <label>새 비밀번호 확인</label>
                <Form.Control
                  type="password"
                  name="newPasswordCk"
                  placeholder="새 비밀번호 확인"
                  onChange={changeUserPwCkHandler}
                  required
                />
                {userNewPwCk.length > 0 && (
                  <span className={`message ${isUserNewPwCk ? "success" : "error"}`}>
                    {userNewPwCkMessage}
                  </span>
                )}
              </Form.Group>
              <Button type="submit" className="btn-change" disabled={!isUserNewPwCk}>
                비밀번호 변경
              </Button>
            </Form>
          </div>

          <div className="recipe-component">
          <h5>
            좋아요한 레시피 <span>({likedList.length})</span>
          </h5>
            <div className="recipe-content">
              <div className="recipe-list">
                {likedList.map((r) => (
                  <div className="recipe-item" key={r.id}>
                    <img
                      className="list-img"
                      src={r.recipe.img}
                      alt={r.recipe.name}
                      onClick={() => navigate(`/recipe/${r.recipe.id}`)}
                    />
                    <div className="list-title">{r.recipe.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageComponent;
