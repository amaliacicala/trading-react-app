import React, { useState } from 'react';
import { LoginForm, SignUpForm } from '../Modal/Forms';
import { LoginBtnActivate, LoginBtnDeactivate } from '../Modal/LoginBtn';
import { SignupBtnActivate, SignupBtnDeactivate } from '../Modal/SignUpBtn'
import { Modal, Button } from 'antd';
import './hero.css'


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

  //closes the modal
  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <button className="button-style btn-hero" onClick={showModal}>
        Get started
      </button>
      <Modal
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        closable={false}
        footer={[
          <Button key="back" onClick={handleCancel} className="modal-btn-close">
            Close
          </Button>,
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
        {login ? <LoginForm handleCancel={handleCancel} /> : <SignUpForm />}
      </Modal>
    </>
  );
};


export const ModaleSignUp = () => {
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

  return (
    <>
      <button className="button-style" onClick={showModal}>
        Sign Up
      </button>
      <Modal
        visible={visible}
        closable={false}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel} className="modal-btn-close">
            Close
          </Button>,
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
        {login ? <LoginForm handleCancel={handleCancel} /> : <SignUpForm />}
      </Modal>
    </>
  );
};



