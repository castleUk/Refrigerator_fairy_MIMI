import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useCallback, useEffect } from "react";
import { useState } from "react";
import { instance } from "../../api/Api";

const MyPageModal = (props) => {
  const [exUserPw, setExUserPw] = useState("");

  const [userNewPw, setUserNewPw] = useState("");
  const [userNewPwCk, setUserNewPwCk] = useState("");

  const [isUserNewPwCk, setIsUserNewPwCk] = useState(false);

  const [userNewPwCkMessage, setUserNewPwCkMessage] = useState("");
  const [userPwCkMessage, setUserPwCkMessage] = useState();

  const userPwCkHandler = useCallback(
    (e) => {
      const passwordCurrent = e.target.value;
      setExUserPw(passwordCurrent);
    },
    [exUserPw]
  );

  const changeUserPwHandler = useCallback((e) => {
    const passwordCurrent = e.target.value;
    setUserNewPw(passwordCurrent);
  }, []);

  const changeUserPwCkHandler = useCallback(
    (e) => {
      const passwordConfirmCurrent = e.target.value;
      setUserNewPwCk(passwordConfirmCurrent);

      if (userNewPw === passwordConfirmCurrent) {
        setUserNewPwCkMessage("비밀번호를 똑같이 입력했어요 : )");
        setIsUserNewPwCk(true);
      } else {
        setUserNewPwCkMessage("비밀번호가 틀려요. 다시 확인해주세요 ㅜ ㅜ");
        setIsUserNewPwCk(false);
      }
    },
    [userNewPw]
  );

  // 현재 비밀번호 체크
  useEffect(() => {
    const onUserPwCk = async (password) => {
      const userInfo = {
        exUserPw: password,
      };
      try {
        const response = await instance.post(`/api/member/userpwch`, userInfo);
        setUserPwCkMessage(response.data);
        console.log("이거임" + userPwCkMessage);
      } catch (error) {
        console.log(error);
      }
    };
    onUserPwCk(exUserPw);
  }, [exUserPw, userPwCkMessage]);

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
              {userNewPwCk.length > 0 && (
                <span
                  className={`message ${isUserNewPwCk ? "success" : "error"}`}
                >
                  {userNewPwCkMessage}
                </span>
              )}
            </Form.Group>
            <Button
              type="submit"
              className="btn-register"
              disabled={!isUserNewPwCk}
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
