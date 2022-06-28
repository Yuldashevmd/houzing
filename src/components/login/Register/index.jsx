import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Form, Input, LoginForm } from '../style';

const Register = () => {
  const navigate =useNavigate();
  return (
    <Container>
      <LoginForm>
        <p>Register</p>
        <Form>
        <LoginForm.InputForm>
          <Input type="text" name='login' placeholder='Login' />
        </LoginForm.InputForm>
        <LoginForm.InputForm>
          <Input type="text" name='firstName' placeholder='First name' />
        </LoginForm.InputForm>
        <LoginForm.InputForm>
          <Input type="text" name='lastName' placeholder='Last name' />
        </LoginForm.InputForm>
        <LoginForm.InputForm>
          <Input type="email" name='email' placeholder='Email' />
        </LoginForm.InputForm>
        <LoginForm.InputForm>
          <Input type="email" name='userRole' placeholder='User role' />
        </LoginForm.InputForm>
        <LoginForm.InputForm>
          <Input type="password" name='password' placeholder='Password' />
        </LoginForm.InputForm>
        <LoginForm.InputForm>
          <Input type="password" name='prePassword' placeholder='Re-enter password' />
        </LoginForm.InputForm>
        <Button>Register</Button>
        </Form>
        <button className='btn-regis' onClick={()=>navigate('/login')}>Sign in</button>
      </LoginForm>
    </Container>
  );
};

export default Register;