import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/fontawesome';
import { Contexto_Funciones } from '../Context/ContextoFunciones';
import { useState, useContext } from 'react';

export function Login({route}) {
  const { DupUser, login } = useContext(Contexto_Funciones);
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const log = (e) => {
    e.preventDefault()
    login(user, pass)
  }
  if (route == 'login') {
    return (
      <div>
        <form>
          <div className='form-user'>
            <i className='color-success' id='userLog'>
              <FontAwesomeIcon icon='fa-solid fa-at' />
            </i>
            <input type='text' placeholder='Usuario' minLength='5'
            onChange={(e) => setUser(e.target.value)} required/>
          </div>
          <div className='form-pass'>
            <i className='color-success' id='passLog'>
              <FontAwesomeIcon icon='fa-solid fa-lock' />
            </i>
            <input type='password' placeholder='Contraseña' min='5' onChange={(e) => setPass(e.target.value)} required/>
          </div>
          <div className='form-button'>
            <button type='button' className='button-tweet' onClick={log}>
              Entrar
            </button>
          </div>
        </form>
        <a href="/registro" className='button-loginregister'>
          Soy nuevo
        </a>
      </div>
    );
  }
}
