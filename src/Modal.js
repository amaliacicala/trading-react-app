import React, { useState } from 'react';
import {Modal, Button} from 'antd';
import { LoginForm, SignUpForm } from './Forms';

export const ModaleLogin = () => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [login, setLogin] = useState(true)

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 3000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const loginBtn = document.getElementById('modal-login-change-login-btn')
  const signupBtn = document.getElementById('modal-login-change-setup-btn')
  
  
  const changeToLogin = () => {
    setLogin(true)
    signupBtn.style.backgroundColor = 'gainsboro'
    loginBtn.style.backgroundColor = 'white'
  }

  const changeToSignUp = () => {
    setLogin(false)
    signupBtn.style.backgroundColor = 'white'
    loginBtn.style.backgroundColor = 'gainsboro'
  }

    
  return (
    <>
      <Button className="btn-login" onClick={showModal}>
        Login
      </Button>
      <Modal
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        closable={false}
        footer={[
          <Button key="back" onClick={handleCancel} className="modal-btn-close">
            Close
          </Button>
        ]}
      >
        <header className='header-modal'>
          <div className='modal-login' id="modal-login-change-login-btn" style={{backgroundColor: 'white'}}>
            <a className='link-modal' onClick={changeToLogin}>Login</a>
          </div>
          <div className='modal-signup' id="modal-login-change-setup-btn" style={{backgroundColor: 'gainsboro'}}>
            <a className='link-modal' onClick={changeToSignUp}>Sign Up</a>
          </div>
        </header>
        {login ? <LoginForm /> : <SignUpForm />}   
      </Modal>
    </>
  );
};


export const ModaleSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [signUp, setSignUp] = useState(true)

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 3000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

   const loginBtn = document.getElementById('modal-signup-change-login-btn')
  const signupBtn = document.getElementById('modal-signup-change-signup-btn')
  
  const changeToLogin = () => {
    setSignUp(false)
    signupBtn.style.backgroundColor = 'gainsboro'
    loginBtn.style.backgroundColor = 'white'
  }

  const changeToSignUp = () => {
    setSignUp(true)
    signupBtn.style.backgroundColor = 'white'
    loginBtn.style.backgroundColor = 'gainsboro'
  }

  return (
    <>
      <Button className="btn-setup" onClick={showModal}>
        Sign Up
      </Button>
      <Modal
        visible={visible}
        closable={false}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel} className="modal-btn-close">
            Close
          </Button>
        ]}
      >
         <header className='header-modal'>
          <div className='modal-login' id="modal-signup-change-login-btn" style={{backgroundColor: 'gainsboro'}}>
            <a className='link-modal' onClick={changeToLogin}>Login</a>
          </div>
          <div className='modal-signup' id="modal-signup-change-signup-btn" style={{backgroundColor: 'white'}}>
            <a className='link-modal' onClick={changeToSignUp}>Sign Up</a>
          </div>
        </header>
        {signUp ? <SignUpForm /> : <LoginForm />}
      </Modal>
    </>
  );
};


