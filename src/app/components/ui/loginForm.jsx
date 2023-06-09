import React, { useEffect, useState } from "react";
import { validator } from "../../utils/validator";
import TextField from "../common/form/textField";
import { useDispatch, useSelector } from "react-redux";
import { getAuthErrors, getUserLoadingStatus, logIn } from "../../store/users";
import { useHistory } from "react-router-dom";
import { Alert, Spinner } from "react-bootstrap";

const LoginForm = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const isValid = Object.keys(errors).length === 0;
  const loginError = useSelector(getAuthErrors());
  const userIsLoading = useSelector(getUserLoadingStatus());

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  const validatorConfig = {
    email: {
      isRequired: {
        message: "Электронная почта обязательна для заполнения"
      }
    },
    password: {
      isRequired: {
        message: "Пароль обязателен для заполнения"
      }
    }
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const redirect = history.location.state
      ? history.location.state.from.pathname
      : "/my-showcases";
    dispatch(logIn({ payload: data, redirect }));
  };

  return (
    <form onSubmit={handleSubmit} className="px-4 pb-4">
      <TextField
        id="logEmail"
        label="Электронная почта"
        name="email"
        value={data.email}
        onChange={handleChange}
        error={errors.email}
      />
      <TextField
        id="logPassword"
        label="Пароль"
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        error={errors.password}
      />
      {loginError && <Alert variant="danger">{loginError}</Alert>}
      <button
        className="btn btn-primary w-100 mx-auto submit"
        type="submit"
        disabled={!isValid || userIsLoading}
      >
        {userIsLoading ? (
          <>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            <span className="visually-hidden">Loading...</span>
          </>
        ) : (
          "Вход"
        )}
      </button>
    </form>
  );
};

export default LoginForm;
