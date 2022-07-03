import React, { memo, useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextWrap } from "../Context";
import {
  Button,
  CheckForget,
  Container,
  Form,
  Input,
  LoginForm,
  ResultText,
} from "./style";

const Login = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [textRes, setTextRes] = useState();
  const [display, setDisplay] = useState(0);
  const [color, setColor] = useState("");
  const [btnValue, setBtnValue] = useContext(ContextWrap);

  const setVal = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  const userData = JSON.parse(localStorage.getItem("user"));

  const onClick = () => {
    if (
      value?.login === userData?.login &&
      value?.password === userData?.password
    ) {
      setTimeout(() => {
        setDisplay(!display);
        setColor("lightgreen");
        setTextRes("Success...");
      }, 500);
      setTimeout(() => {
        setBtnValue(!btnValue);
        navigate("/home");
      }, 2000);
    } else {
      setTimeout(() => {
        setDisplay(!display);
        setTextRes("Login or Password is wrong!");
        setColor("");
      }, 500);
    }
  };

  return (
    <>
      <ResultText display={display} color={color}>
        {textRes}
      </ResultText>
      <Container>
        <LoginForm>
          <p>Sign in</p>
          <Form>
            <LoginForm.InputForm>
              <label htmlFor="login">Login</label>
              <Input
                valid={1}
                type="text"
                name="login"
                onChange={setVal}
                placeholder="Email or Login"
              />
            </LoginForm.InputForm>
            <LoginForm.InputForm>
              <Input
                valid={1}
                type="text"
                name="password"
                onChange={setVal}
                placeholder="Password"
              />
            </LoginForm.InputForm>
            <CheckForget>
              <CheckForget.Check>
                <input type="checkbox" name="RememberMe" />
                <span>Remember me</span>
              </CheckForget.Check>
              <button>Forgot</button>
            </CheckForget>
            <Button onClick={onClick}>Login</Button>
          </Form>
          <button
            className="btn-regis"
            onClick={() => navigate("/login/register")}
          >
            Register
          </button>
        </LoginForm>
      </Container>
    </>
  );
};

export default memo(Login);
