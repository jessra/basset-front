import logo from '../public/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './assets/fontawesome';
import { useState } from 'react';

function LoginRegister() {

  return (
    <div className="loginRegister">
      <div className="container-login">
        <div className="container-logoform">
          <img src={logo} alt="" />
        </div>
        <div className="container-datalogin">
          <h5>Bienvenidos</h5>
          <form>
            <div className="form-user">
              <i><FontAwesomeIcon icon="fa-solid fa-at" /></i>
              <input type="text" placeholder='Usuario'/>
            </div>
            <div className="form-pass">
              <i><FontAwesomeIcon icon="fa-solid fa-lock" /></i>
              <input type="password" placeholder='Contraseña'/>
            </div>
            <div className="form-button">
              <button
                type='button'
                className='button-tweet'
              >
                Tweetear
              </button>
            </div>
          </form>
          <button
            type='button'
            className='button-loginregister'
          >
            Soy nuevo
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginRegister
