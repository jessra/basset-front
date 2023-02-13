import logo from '../assets/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/fontawesome';
import { useState, useContext } from 'react';
import { Contexto_Funciones } from '../Context/ContextoFunciones';

export function Inicio() {
  const { Saludar } = useContext(Contexto_Funciones);

  const [tweet, setTweet] = useState('');
  const form = (e) => {
    e.preventDefault();
    console.log(tweet);
  };

  return (
    <div className='Inicio'>
      <div className='input-tweet'>
        <form>
          <div className='input'>
            <i>
              <FontAwesomeIcon icon='fa-solid fa-pencil' />
            </i>
            <input type='text' placeholder='¿Qué estás pensando?' onChange={(e) => setTweet(e.target.value)} />
          </div>
          <div className='input-button'>
            <button type='button' className='button-tweet' onClick={form}>
              Tweetear
            </button>
          </div>
        </form>
      </div>
      <div className='content-tweet'>
        <div className='usuario-tweet'>
          <div className='img-tweet'>
            <img src={logo} alt='' />
          </div>
          <div>
            <h5 onClick={Saludar}>Kevin</h5>
            <p>Amo linux</p>
          </div>
        </div>
        <div className='options-tweet'>
          <p>11/02/2023</p>
          <button type='button' className='option'>
            <i>
              <FontAwesomeIcon icon='fa-solid fa-heart' />
            </i>
          </button>
          <button type='button' className='option'>
            <i>
              <FontAwesomeIcon icon='fa-solid fa-trash' />
            </i>
          </button>
        </div>
      </div>
      <div className='content-tweet'>
        <div className='usuario-tweet'>
          <div className='img-tweet'>
            <img src={logo} alt='' />
          </div>
          <div>
            <h5>Kevin</h5>
            <p>Amo linux</p>
          </div>
        </div>
        <div className='options-tweet'>
          <p>11/02/2023</p>
          <button type='button' className='option'>
            <i>
              <FontAwesomeIcon icon='fa-solid fa-heart' />
            </i>
          </button>
          <button type='button' className='option'>
            <i>
              <FontAwesomeIcon icon='fa-solid fa-trash' />
            </i>
          </button>
        </div>
      </div>
      <div className='content-tweet'>
        <div className='usuario-tweet'>
          <div className='img-tweet'>
            <img src={logo} alt='' />
          </div>
          <div>
            <h5>Kevin</h5>
            <p>Amo linux</p>
          </div>
        </div>
        <div className='options-tweet'>
          <p>11/02/2023</p>
          <button type='button' className='option'>
            <i>
              <FontAwesomeIcon icon='fa-solid fa-heart' />
            </i>
          </button>
          <button type='button' className='option'>
            <i>
              <FontAwesomeIcon icon='fa-solid fa-trash' />
            </i>
          </button>
        </div>
      </div>
      <div className='content-tweet'>
        <div className='usuario-tweet'>
          <div className='img-tweet'>
            <img src={logo} alt='' />
          </div>
          <div>
            <h5>Kevin</h5>
            <p>Amo linux</p>
          </div>
        </div>
        <div className='options-tweet'>
          <p>11/02/2023</p>
          <button type='button' className='option'>
            <i>
              <FontAwesomeIcon icon='fa-solid fa-heart' />
            </i>
          </button>
          <button type='button' className='option'>
            <i>
              <FontAwesomeIcon icon='fa-solid fa-trash' />
            </i>
          </button>
        </div>
      </div>
      <div className='content-tweet'>
        <div className='usuario-tweet'>
          <div className='img-tweet'>
            <img src={logo} alt='' />
          </div>
          <div>
            <h5>Kevin</h5>
            <p>Amo linux</p>
          </div>
        </div>
        <div className='options-tweet'>
          <p>11/02/2023</p>
          <button type='button' className='option'>
            <i>
              <FontAwesomeIcon icon='fa-solid fa-heart' />
            </i>
          </button>
          <button type='button' className='option'>
            <i>
              <FontAwesomeIcon icon='fa-solid fa-trash' />
            </i>
          </button>
        </div>
      </div>
      <div className='content-tweet'>
        <div className='usuario-tweet'>
          <div className='img-tweet'>
            <img src={logo} alt='' />
          </div>
          <div>
            <h5>Kevin</h5>
            <p>Amo linux</p>
          </div>
        </div>
        <div className='options-tweet'>
          <p>11/02/2023</p>
          <button type='button' className='option'>
            <i>
              <FontAwesomeIcon icon='fa-solid fa-heart' />
            </i>
          </button>
          <button type='button' className='option'>
            <i>
              <FontAwesomeIcon icon='fa-solid fa-trash' />
            </i>
          </button>
        </div>
      </div>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/Inicio.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  );
}

