import logo from '../assets/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/fontawesome';
import { Content } from '../components/Content';
import { Contexto_Funciones } from '../Context/ContextoFunciones';
import { useState, useContext } from 'react';
import { Alerts } from "../components/Alerts.jsx";
import { ModalInput } from '../components/ModalInput';

export function ListContent() {
  const { cerrarSesion, modal, setModal } = useContext(Contexto_Funciones);
  let classInicio = ''
  let classPerfil = ''
  let classFav = ''
  const vistaActual = window.location.href
  const route = vistaActual.split('/')[3]
  if (route == 'perfil') {
    classPerfil += 'select'
  } else if (route == 'favoritos') {
    classFav = 'select'
  } else {
    classInicio = 'select'
  }
  const basset = JSON.parse(localStorage.getItem('basset'))
  const cerrarses = () => {
    cerrarSesion()
  }

  if (basset) {
    return (
      <div className='Navbar'>
        <div className='exit-navbar'>
          <div>
            <button className='button-exit' type='button' onClick={cerrarses}>
              <i>
                <FontAwesomeIcon icon='fa-solid fa-arrow-right-from-bracket' />
              </i>
            </button>
          </div>
        </div>
        <div className='container'>
          <input className="navbar-toggler" type='checkbox' id='navbar'/>
          <label htmlFor="navbar"><FontAwesomeIcon icon="fa-solid fa-bars" /></label>
          <div className='navbar'>
            <div className='container-perfil'>
              <a>
                <img src={basset.icon} className='imgPerfil' alt='imagen de perfil' />
              </a>
              <h2>{basset.user}</h2>
              <div className='perfil-description'>
                <h5>{basset.des}</h5>
              </div>
              <span className='perfil-group-text'>
                <FontAwesomeIcon icon='fa-solid fa-quote-left' />
              </span>
            </div>
            <div className='container-options'>
              <ul>
                <li className={classInicio} >
                  <button type='button' className='buttton-navbar' onClick={() => window.location.href = '/'}>
                    <i>
                      <FontAwesomeIcon icon='fa-solid fa-house' />
                    </i>
                    Inicio
                  </button>
                </li>
                <li className={classPerfil} >
                  <button type='button' className='buttton-navbar' onClick={() => window.location.href = '/perfil'}>
                    <i>
                      <FontAwesomeIcon icon='fa-solid fa-paw' />
                    </i>
                    Perfil
                  </button>
                </li>
                <li className={classFav} >
                  <button type='button' className='buttton-navbar' onClick={() => window.location.href = '/favoritos'}>
                    <i>
                      <FontAwesomeIcon icon='fa-solid fa-hand-holding-heart' />
                    </i>
                    Favoritos
                  </button>
                </li>
              </ul>
            </div>
            <div className='container-button'>
              <button type='button' className='button-tweet' onClick={() => {setModal(!modal)}}>
                Tweetear
              </button>
            </div>
            <div className='container-logo'>
              <img src={logo} className='img-logo' alt='logo' />
            </div>
          </div>
          <div className='content'>
            <Content></Content>
          </div>
        </div>
        <ModalInput user={basset.user} icon={basset.icon}></ModalInput>
        <Alerts></Alerts>
      </div>
    );
  } else {
    window.location.href = '/login';
  }
}
