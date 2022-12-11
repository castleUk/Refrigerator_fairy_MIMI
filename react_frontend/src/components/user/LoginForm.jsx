import React, { useState, useCallback } from "react";
// template
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const LoginForm = ({ onLogin }) => {
  const [account, setAccount] = useState({
    userId: "",
    userPw: "",
  });

  const changeAccountHandler = useCallback(
    (e) => {
      setAccount({
        ...account,
        [e.target.name]: e.target.value,
      });
    },
    [account]
  );
  const submitHandler = useCallback(
    (e) => {
      e.preventDefault(); //랜더링시 실행안함

      onLogin(account);
    },
    [account, onLogin]
  );

  return (
    <div className="login">
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3 form-group" controlId="userId">
          <Form.Control
            type="text"
            name="userId"
            placeholder="아이디"
            onChange={changeAccountHandler}
            value={account.userId}
          />
        </Form.Group>
        <Form.Group className="mb-3 form-group" controlId="userPw">
          <Form.Control
            type="password"
            name="userPw"
            placeholder="비밀번호"
            onChange={changeAccountHandler}
            value={account.userPw}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="btn-login">
          로그인
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
