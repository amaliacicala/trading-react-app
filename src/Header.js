import React from 'react';
import { Link } from 'react-router-dom';
import {ModaleLogin, ModaleSignUp} from './Modal';
import './header.css';
import './modal.css'

export function Header() {
  return (
      <header className='header-header'>
          <span className='logo'>LOGO</span>
          <div className='anchors'>
              <Link to="/dashboard"><a href="#">Feature</a></Link>
              <a href="#">Pricing</a>
              <ModaleLogin />
              <ModaleSignUp />
          </div>
      </header>
  )         
};

