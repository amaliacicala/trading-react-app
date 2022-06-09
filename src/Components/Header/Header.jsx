import React from 'react';
import { ModaleLogin} from '../Modal/Modal';
import { ModaleSignUp } from '../Modal/Modal';
import './header.css'


export function Header() {
  return (
      <header className='header-header'>
          <h2 className='header-logo'>Logo</h2>
          <div>
              <a className="header-anchor" href="#">Feature</a>
              <a className="header-anchor" href="#">Pricing</a>
              <ModaleLogin />
              <ModaleSignUp />
          </div>
      </header>
  )         
};

