import logo from '../public/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './assets/fontawesome';
import Inicio from './inicio'

function Navbar() {
  return (
    <div className="Navbar">
      <div className='exit-navbar'>
        <div>
          <button
            type='button'
            className='button-exit'
          >
            <i>
              <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" />
            </i>
          </button>
        </div>
      </div>
      <div className='container'>
        <div className='navbar'>
          <div className='container-perfil'>
            <a>
              <img src={logo} className="imgPerfil" alt="imagen de perfil" />
            </a>
            <h2>Jessra</h2>
            <div className='perfil-description'>
              <h5>Doy clases los jueves, no cobro mucho</h5>
            </div>
            <span className="perfil-group-text">
              <FontAwesomeIcon icon="fa-solid fa-quote-left" />
            </span>
          </div>
          <div className='container-options'>
            <ul>
              <li>
                <button
                  type='button'
                  className='buttton-navbar'
                >
                  <i>
                    <FontAwesomeIcon icon="fa-solid fa-house" />
                  </i>
                  Inicio
                </button>
              </li>
              <li>
                <button
                  type='button'
                  className='buttton-navbar'
                >
                  <i>
                    <FontAwesomeIcon icon="fa-solid fa-paw" />
                  </i>
                  Perfil
                </button>
              </li>
              <li>
                <button
                  type='button'
                  className='buttton-navbar'
                >
                  <i>
                    <FontAwesomeIcon icon="fa-solid fa-hand-holding-heart" />
                  </i>
                  Favoritos
                </button>
              </li>
            </ul>
          </div>
          <div className='container-button'>
            <button
              type='button'
              className='button-tweet'
            >
              Tweetear
            </button>
          </div>
          <div className='container-logo'>
            <img src={logo} className='img-logo' alt="logo" />
          </div>
        </div>
        <div className='content'>
          <Inicio></Inicio>
        </div>
      </div>
    </div>
  )
}

export default Navbar
