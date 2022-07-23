import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Input, LoginForm } from "../style";
import { useQuery } from "react-query";

const Register = () => {
  const navigate = useNavigate();
  const [inputVal, setInputVal] = useState();
  const [personData, setPersonData] = useState();

  useQuery(
    [],
    () =>
      fetch("https://houzing-app.herokuapp.com/api/public/auth/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: personData?.email,
          firstname: personData?.firstName,
          lastname: personData?.lastName,
          password: personData?.password,
        }),
      }).then((res) => res.json()),
    {
      onSuccess: (res) =>
        res?.statusCode === 200
          ? setTimeout(() => {
              navigate("/login");
            }, 1500)
          : null,
      onError: (err) => console.log(err),
    }
  );
  const getVal = (e) => {
    setInputVal({
      ...inputVal,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = () => {
    return setPersonData({
      email: inputVal?.email,
      firstname: inputVal?.firstName,
      lastname: inputVal?.lastName,
      password: inputVal?.password,
    });
  };

  return (
    <Container>
      <LoginForm>
        <p>Register</p>
        <Form htmlFor="submit">
          <LoginForm.InputForm>
            <Input
              onChange={getVal}
              valid={1}
              type="text"
              value={inputVal?.login}
              name="login"
              placeholder="Login"
            />
          </LoginForm.InputForm>
          <LoginForm.InputForm>
            <Input
              onChange={getVal}
              valid={1}
              type="text"
              value={inputVal?.firstName}
              name="firstName"
              placeholder="First name"
            />
          </LoginForm.InputForm>
          <LoginForm.InputForm>
            <Input
              onChange={getVal}
              valid={1}
              type="text"
              value={inputVal?.lastName}
              name="lastName"
              placeholder="Last name"
            />
          </LoginForm.InputForm>
          <LoginForm.InputForm>
            <Input
              onChange={getVal}
              valid={1}
              type="email"
              value={inputVal?.email}
              name="email"
              placeholder="Email"
            />
          </LoginForm.InputForm>
          <LoginForm.InputForm>
            <Input
              onChange={getVal}
              valid={1}
              type="email"
              value={inputVal?.userRole}
              name="userRole"
              placeholder="User role"
            />
          </LoginForm.InputForm>
          <LoginForm.InputForm>
            <Input
              onChange={getVal}
              valid={1}
              type="password"
              value={inputVal?.password}
              name="password"
              placeholder="Password"
            />
          </LoginForm.InputForm>
          <LoginForm.InputForm>
            <Input
              onChange={getVal}
              valid={1}
              type="password"
              value={inputVal?.prePassword}
              name="prePassword"
              placeholder="Re-enter password"
            />
          </LoginForm.InputForm>
          <Button onClick={() => onSubmit()}>Register</Button>
        </Form>
        <button className="btn-regis" onClick={() => navigate("/login")}>
          Sign in
        </button>
      </LoginForm>
    </Container>
  );
};

export default Register;
