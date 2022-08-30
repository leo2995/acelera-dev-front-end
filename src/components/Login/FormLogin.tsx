import { Button, Checkbox, Form, Input, message } from 'antd';

import {useNavigate} from 'react-router-dom'
import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { fetchUserLogin } from 'src/services/Auth/service';


//import { LoginProps } from 'src/services/Auth/service';

const FormLogin: React.FC = () => {
const navigate = useNavigate();

const [ email, setEmail] = useState('')
const [ password, setPassword] = useState('')


const onFinish = (values: any) => {
  setEmail(values.username)
  setPassword(values.password)
  debugger

  if(email !=='' && password !==''){
    mutate()
  }
  
};

  const { mutate } = useMutation(
    () =>
    fetchUserLogin({
      email, password
      }),
    {
      onSuccess: () => {
        message.success('Logado com Sucesso')
        navigate('/dashboard')
      },
      onError:(msg)=>{
        message.error(`Error ao logar  ${msg}`)
      }
    },
  );

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormLogin;