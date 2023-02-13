import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/fontawesome';
import { Contexto_Funciones } from '../Context/ContextoFunciones';
import { useContext } from 'react';

export function Eliminar({id, user, prop}) {
  const { marcarFav, eliminarTweet } = useContext(Contexto_Funciones);
  if (user == prop) {
    return (
      <button type='button' className='option' onClick={(e) => {eliminarTweet(id)}}>
      <i>
        <FontAwesomeIcon icon='fa-solid fa-trash' />
      </i>
      </button>
    )
  }
}