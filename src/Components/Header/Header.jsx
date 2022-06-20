import React from 'react';
import { ModaleLogin} from '../Modal/Modal';
import { ModaleSignUp } from '../Modal/Modal';
import './header.css'


export function Header({handleLogin}) {
  return (
      <header className='header-header'>
          <h2 className='header-logo'>Logo</h2>
          <div>
              <a className="header-anchor" href="#features">Features</a>
              <a className="header-anchor" href="#pricing">Pricing</a>
              <ModaleLogin handleLogin={handleLogin}/>
              <ModaleSignUp />
          </div>
      </header>
  )         
};

