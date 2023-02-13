import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/fontawesome';
import { Contexto_Funciones } from '../Context/ContextoFunciones';
import { useState, useContext } from 'react';

export function Registro({route}) {
  const { DupUser, registro } = useContext(Contexto_Funciones);
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [des, setDes] = useState('');
  const [icon, setIcon] = useState('');
  const regis = (e) => {
    e.preventDefault();
    if (DupUser(user)) {
      document.getElementById('userReg').classList.replace('color-error', 'color-success');
      registro(user, pass, icon, des)
    } else {
      document.getElementById('userReg').classList.replace('color-success', 'color-error');
    }
    
  }
  if (route == 'registro') {
    return (
      <div>
        <form>
          <div className='form-user'>
            <i className='color-success' id='userReg'>
              <FontAwesomeIcon icon='fa-solid fa-at' />
            </i>
            <input className='form-user' type='text' placeholder='Usuario' minLength='5' onChange={(e) => setUser(e.target.value)} required/>
          </div>
          <div className='form-pass'>
            <i className='color-success' id='passReg'>
              <FontAwesomeIcon icon='fa-solid fa-lock' />
            </i>
            <input type='password' placeholder='Contraseña' min='5' onChange={(e) => setPass(e.target.value)} required/>
          </div>
          <div className='form-pass'>
            <i className='color-success' id='desReg'>
              <FontAwesomeIcon icon='fa-solid fa-quote-left' />
            </i>
            <input type='text' placeholder='Descripción' onChange={(e) => setDes(e.target.value)} required/>
          </div>
          <div className='form-img'>
            <i className='color-success' id='iconReg'>
              <FontAwesomeIcon icon="fa-solid fa-shield-dog" />
            </i>
            <input type='text' placeholder='Elige un icon' minLength='10' onChange={(e) => setIcon(e.target.value)} required/>
          </div>
          <div className='form-button'>
            <button type='button' className='button-tweet' onClick={regis}>
              Crear
            </button>
          </div>
        </form>
        <a href="/login" className='button-loginregister'>
          Tengo cuenta
        </a>
      </div>
    );
  }
}

