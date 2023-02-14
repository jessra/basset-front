import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/fontawesome';
import { Contexto_Funciones } from '../Context/ContextoFunciones';
import { useState, useContext } from 'react';

export function ModalInput({user, icon}) {
  const { crearTweets, modal, setModal } = useContext(Contexto_Funciones);
  const [tweet, setTweet] = useState('');
  const form = (e) => {
    e.preventDefault();
    crearTweets(user, icon, tweet)
    setModal(!modal)
    setTweet('')
  };
  if (modal) {
    return (
      <div className='oscuro'>
        <div className='modal-input-tweet'>
          <button className='button-close' onClick={() => {setModal(!modal)}}>x</button>
          <form>
            <div className='input'>
              <i>
                <FontAwesomeIcon icon='fa-solid fa-pencil' />
              </i>
              <input type='text' value={tweet} placeholder='¿Qué estás pensando?' onChange={(e) => setTweet(e.target.value)} />
            </div>
            <div className='input-button'>
              <button type='button' className='button-tweet' onClick={form}>
                Tweetear
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}