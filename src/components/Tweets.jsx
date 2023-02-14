import logo from '../assets/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/fontawesome';
import { Contexto_Funciones } from '../Context/ContextoFunciones';
import { useContext } from 'react';
import { Eliminar } from '../components/Eliminar';

export function Tweets({data}) {
  const { marcarFav, listarFavs } = useContext(Contexto_Funciones);
  const basset = JSON.parse(localStorage.getItem('basset'))

  if (!data.length) {
    return (
      <div className='content-mensaje'>
        <i><FontAwesomeIcon icon="fa-solid fa-heart-crack" /></i>
        <p>Ups, parese que no hay tweets</p>
      </div>
    )
  } 

  return (
    <div>
      {data.map((i) => (
        <div key={i.id} data-key={i.id} className='content-tweet'>
            <div className='img-tweet'>
              <img src={logo} alt='' />
            </div>
          <div className='usuario-tweet'>
            <div>
              <h5>{i.prop}</h5>
              <p>{i.content}</p>
            </div>
          </div>
          <div className='options-tweet'>
            <p className='options-fecha'>{i.date}</p>
            <button type='button' className='option' onClick={(e) => {marcarFav(i.id, basset.user)}}>
              <i style={i.fav.includes(basset.user) ? {color: '#DC4C64'} : {color: 'grey'}}>
                <FontAwesomeIcon icon='fa-solid fa-heart' />
              </i>
            </button>
            <Eliminar key={i.id} id={i.id} user={basset.user} prop={i.prop}></Eliminar>
          </div>
        </div>
        ))}
    </div>
  );

}

