import React from "react";
import { useParams } from "react-router-dom";
import RegisterForm from "../../ui/registerForm";
import LoginForm from "../../ui/loginForm";
import { Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAuthErrors } from "../../../store/users";

const LoginPage = () => {
  const { type } = useParams();
  const dispatch = useDispatch();
  const authError = useSelector(getAuthErrors());
  const handleSelect = () => {
    if (authError) {
      dispatch({ type: "user/authErrorFixed" });
    }
  };
  return (
    <div className="col-md-6 offset-md-3 shadow mt-4">
      <Tabs
        defaultActiveKey={type || "login"}
        id="login-page"
        className="mb-3"
        justify
        onSelect={handleSelect}
      >
        <Tab eventKey="login" title="Вход">
          <LoginForm />
        </Tab>
        <Tab eventKey="register" title="Регистрация">
          <RegisterForm />
        </Tab>
      </Tabs>
    </div>
  );
};

export default LoginPage;
