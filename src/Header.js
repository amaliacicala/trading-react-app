import React from 'react';
import {ModaleLogin, ModaleSignUp} from './Modal';
import './header.css';
import './modal.css'

export function Header() {
  return (
      <header className='header-header'>
          <span className='logo'>LOGO</span>
          <div className='anchors'>
              <a href="#">Feature</a>
              <a href="#">Pricing</a>
              <ModaleLogin />
              <ModaleSignUp />
          </div>
      </header>
  )         
};

