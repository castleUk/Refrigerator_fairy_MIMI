import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useCallback } from "react";
import { useState } from "react";
import { instance } from "../../api/Api";

const MyPageModal = (props) => {
  const [exUserPw, setExUserPw] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userPwCk, setUserPwCk] = useState("");

  const [isUserPwCk, setIsUserPwCk] = useState(false);

  const [userPwCkMessage, setUserPwCkMessage] = useState("");

  const userPwCkHandler = useCallback(
    (e) => {
      // const passwordCurrent = e.target.value;
      // setExUserPw({ ...exUserPw, [e.target.name]: passwordCurrent });
      // onUserPwCk(exUserPw);
    },
    [exUserPw]
  );

  const changeUserPwHandler = useCallback((e) => {
    const passwordCurrent = e.target.value;
    setUserPw(passwordCurrent);
  }, []);

  const changeUserPwCkHandler = useCallback(
    (e) => {
      const passwordConfirmCurrent = e.target.value;
      setUserPwCk(passwordConfirmCurrent);

      if (userPw === passwordConfirmCurrent) {
        setUserPwCkMessage("비밀번호를 똑같이 입력했어요 : )");
        setIsUserPwCk(true);
      } else {
        setUserPwCkMessage("비밀번호가 틀려요. 다시 확인해주세요 ㅜ ㅜ");
        setIsUserPwCk(false);
      }
    },
    [userPw]
  );

  // 현재 비밀번호 체크
  const onUserPwCk = async (password) => {
    const userInfo = {
      exUserPw: password,
    };
    try {
      const response = await instance.post(`/api/member/userpwch`, userInfo);
      console.log(response);
      // setRecipeNameList(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal
        size="lg"
        show={props.show}
        onHide={props.onHide}
        className="ingr-detail-modal"
      >
        <Modal.Header closeButton></Modal.Header>

        <Modal.Body>
          <div>{props.myInfo.userEmail}</div>
          <div>{props.myInfo.userName}</div>

          <Form>
            <Form.Group className="mb-3 form-group" controlId="exPassword">
              <Form.Control
                type="password"
                name="exPassword"
                placeholder="현재비밀번호"
                onChange={userPwCkHandler}
                value={exUserPw}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 form-group" controlId="newPassword">
              <Form.Control
                type="password"
                name="newPassword"
                placeholder="새 비밀번호"
                onChange={changeUserPwHandler}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 form-group" controlId="newPasswordCk">
              <Form.Control
                type="password"
                name="newPasswordCk"
                placeholder="새 비밀번호 확인"
                onChange={changeUserPwCkHandler}
                required
              />
              {userPwCk.length > 0 && (
                <span className={`message ${isUserPwCk ? "success" : "error"}`}>
                  {userPwCkMessage}
                </span>
              )}
            </Form.Group>
            <Button
              type="submit"
              className="btn-register"
              disabled={!isUserPwCk}
            >
              비밀번호 변경
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default MyPageModal;
