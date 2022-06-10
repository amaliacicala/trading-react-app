import React, { useState } from 'react';
import {Modal} from 'antd';
import { LoginForm, SignUpForm } from '../Modal/Forms';

export const ModaleLogin = () => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [login, setLogin] = useState(false)

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
    loginBtn.style.backgroundColor = 'transparent'
  }

  const changeToSignUp = () => {
    setLogin(false)
    signupBtn.style.backgroundColor = 'transparent'
    loginBtn.style.backgroundColor = 'gainsboro'
  }

    
  return (
    <>
      <button className="btn-login-s" onClick={showModal}>
        Get Started
      </button>
      <Modal
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        closable={false}
        footer={[
          <button key="back" onClick={handleCancel} className="modal-btn-close">
            Close
          </button>
        ]}
      >
        <header className='header-modal'>
          <div className='modal-login' id="modal-login-change-login-btn" style={{backgroundColor: 'gainsboro'}}>
            <a className='link-modal' onClick={changeToLogin}>Login</a>
          </div>
          <div className='modal-signup' id="modal-login-change-setup-btn" style={{backgroundColor: 'transparent'}}>
            <a className='link-modal' onClick={changeToSignUp}>Sign Up</a>
          </div>
        </header>
        {login ? <LoginForm /> : <SignUpForm />}   
      </Modal>
    </>
  );
};
