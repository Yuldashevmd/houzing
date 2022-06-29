import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Form, Input, LoginForm } from '../style';
import { person } from '../token';


const Register = () => {
  const navigate =useNavigate();
  const [inputVal,setInputVal]=useState(person);
  
  const getVal =(e)=>{
    setInputVal({
      ...inputVal,
      [e.target.name]: e.target.value
    })
  }
   const onSubmit=()=>{
    setInputVal(inputVal); 
  };
  
 
  return (
    <Container>
      <LoginForm>
        <p>Register</p>
        <Form>
        <LoginForm.InputForm>
          <Input onChange={getVal}  type="text" value={inputVal.login} name='login' placeholder='Login' />
        </LoginForm.InputForm>
        <LoginForm.InputForm>
          <Input onChange={getVal}  type="text" value={inputVal.firstName} name='firstName' placeholder='First name' />
        </LoginForm.InputForm>
        <LoginForm.InputForm>
          <Input onChange={getVal}  type="text" value={inputVal.lastName} name='lastName' placeholder='Last name' />
        </LoginForm.InputForm>
        <LoginForm.InputForm>
          <Input onChange={getVal}  type="email" value={inputVal.email} name='email' placeholder='Email' />
        </LoginForm.InputForm>
        <LoginForm.InputForm>
          <Input onChange={getVal}  type="email" value={inputVal.userRole} name='userRole' placeholder='User role' />
        </LoginForm.InputForm>
        <LoginForm.InputForm>
          <Input onChange={getVal}  type="password" value={inputVal.password} name='password' placeholder='Password' />
        </LoginForm.InputForm>
        <LoginForm.InputForm>
          <Input onChange={getVal}  type="password" value={inputVal.prePassword} name='prePassword' placeholder='Re-enter password' />
        </LoginForm.InputForm>
        <Button onClick={onSubmit}>Register</Button>
        </Form>
        <button className='btn-regis' onClick={()=>navigate('/login')}>Sign in</button>
      </LoginForm>
    </Container>
  );
};

export default Register;