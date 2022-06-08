import React from 'react';
import {Form, Input, Button, Checkbox, Select} from 'antd';
import { useNavigate } from 'react-router';
const { Option } = Select;

export const LoginForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  const navigate = useNavigate()
  function navigateToDashboard() {
     navigate('/dashboard')
  }

  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
          autoComplete="off"
          className='login-form'
      >
          
      <button htmlType="submit" className='modal-btn-login'>
        Log in with Google
      </button>
          
      <div className='separation-line'>
              <div className='line'></div> 
              <span className='line-span' style={{color: 'white'}}>or</span>
              <div className='line'></div> 
      </div>
      <Form.Item
        name="email"
        rules={[
          {
            required: false,
            message: 'Please input your email!',
            type: 'email',
          },
        ]}
      >
        <Input placeholder='Email'/>
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: false,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password placeholder='Password'/>
      </Form.Item>

     <button htmlType="submit" className='modal-btn-login' onClick={navigateToDashboard}>
        Login
     </button>
          
    <div className='link-password'><a>Forgot Password</a></div>
      
    </Form>
  );
};



export function SignUpForm() {
    const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
 
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
          autoComplete="off"
          className='login-form'
      >
          
      <button htmlType="submit" className='modal-btn-login'>
        Sign up with Google
      </button>
          
      <div className='separation-line'>
              <div className='line'></div> 
              <span className='line-span' style={{color: 'white'}}>or</span>
              <div className='line'></div> 
      </div>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
            type: 'email',
          },
        ]}
      >
        <Input placeholder='Email'/>
      </Form.Item>
      
      <Form.Item
        name={['user', 'name']}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder='First Name'/>
      </Form.Item>
      <Form.Item
        name={['user', 'name']}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder='Last Name'/>
      </Form.Item>
          
      <Form.Item
        name="phone"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} placeholder='Phone Number (Optional)'/>
      </Form.Item>

       <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password placeholder='Password'/>
      </Form.Item>

      <Form.Item
        name="confirm"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password placeholder='Confirm Password'/>
      </Form.Item>
      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
      >
        <Checkbox >
          I agree the Terms of Service 
        </Checkbox>
      </Form.Item>

     <button htmlType="submit" className='modal-btn-login'>
        Sign Up
     </button>
          
      
    </Form>
  );
}