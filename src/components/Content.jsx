import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/fontawesome';
import { useState, useContext } from 'react';
import { Contexto_Funciones } from '../Context/ContextoFunciones';
import { Tweets } from '../components/Tweets';

export function Content() {
  const { crearTweets, listarFavs, listarmisTweets } = useContext(Contexto_Funciones);
  const [tweet, setTweet] = useState('');
  const vistaActual = window.location.href
  const route = vistaActual.split('/')[3]
  const basset = JSON.parse(localStorage.getItem('basset'))
  let data = []
  if (route == 'perfil') {
    data = listarmisTweets(basset.user)
  } else if (route == 'favoritos') {
    data = listarFavs(basset.user)
  } else {
    data = JSON.parse(localStorage.getItem('bassetTweets'))
  }
  const form = (e) => {
    e.preventDefault();
    crearTweets(basset.user, basset.icon, tweet)
    setTweet('')
  };
  
  return (
    <div className='Content'>
      <div className='input-tweet'>
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
      <Tweets data = {data.reverse()}></Tweets>
    </div>
  );
}

