import React, { useState } from "react";
import { Modal} from "antd";
import { LoginForm, SignUpForm } from "./Forms";
import {SignupBtnActivate, SignupBtnDeactivate} from "./SignUpBtn";
import { LoginBtnActivate, LoginBtnDeactivate } from "./LoginBtn";
import "./modal.css";

//MODAL LOG IN
export const ModaleLogin = () => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [login, setLogin] = useState(true);

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
      <button className="btn-login" onClick={showModal}>
        Login
      </button>
      <Modal
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        closable={false}
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
        {login ? (
          <LoginForm handleCancel={handleCancel} setLogin={setLogin} />
        ) : (
          <SignUpForm />
        )}
      </Modal>
    </>
  );
};


//MODAL SIGN UP
export const ModaleSignUp = () => {
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
      <button className="button-style" onClick={showModal}>
        Sign Up
      </button>
      <Modal
        visible={visible}
        closable={false}
        onOk={handleOk}
        onCancel={handleCancel}
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
        {!login ? (
          <SignUpForm setLogin={setLogin} />
        ) : (
          <LoginForm handleCancel={handleCancel} setLogin={setLogin} />
        )}
      </Modal>
    </>
  );
};
