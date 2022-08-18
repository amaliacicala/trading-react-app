import React, { useState } from 'react';
import {Modal} from 'antd';
import {LoginForm, SignUpForm} from '../Modal/Forms';
import {LoginBtnActivate, LoginBtnDeactivate} from '../Modal/LoginBtn';
import {SignupBtnActivate, SignupBtnDeactivate } from '../Modal/SignUpBtn'

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
    
  return (
    <>
      <button className="button-style btn-hero" onClick={showModal}>
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
          </button>,
        ]}
      >
        {login ? (
          <header className="header-modal">
            <LoginBtnActivate setLogin={setLogin} login={login} />
            <SignupBtnDeactivate setLogin={setLogin} login={login} />
          </header>
        ) : (
          <header className="header-modal">
            <LoginBtnDeactivate setLogin={setLogin} login={login} />
            <SignupBtnActivate setLogin={setLogin} login={login} />
          </header>
        )}
        {login ? <LoginForm /> : <SignUpForm />}
      </Modal>
    </>
  );
};
