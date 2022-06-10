import React from 'react';
import { Button, CheckForget, Container, Form, Input, LoginForm } from './style';

const Login = () => {
  return (
    <Container>
      <LoginForm>
        <p>Sign in</p>
        <Form>
        <LoginForm.InputForm>
          <label htmlFor="login">Login</label>
          <Input type="text" name='login' placeholder='Email or Login' />
        </LoginForm.InputForm>
        <LoginForm.InputForm>
          <Input type="text" name='password' placeholder='Password' />
        </LoginForm.InputForm>
        <CheckForget>
          <CheckForget.Check>
          <input type="checkbox" name="RememberMe"/>
          <span>Remember me</span>
          </CheckForget.Check>
         <button>Forgot</button>
        </CheckForget>
        <Button>Login</Button>
        </Form>
      </LoginForm>
    </Container>
  );
};

export default Login;