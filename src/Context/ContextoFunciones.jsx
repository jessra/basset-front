import { createContext, useState, useEffect } from 'react';

export const Contexto_Funciones = createContext();

export function Contexto_DataProvider(props) {
  const [bassetUsers, setBasU] = useState([]);
  const [bassetTweets, setBasT] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setBasU(VerificarEDatosUser)
    setBasT(VerificarEDatosTweets)
    if (localStorage.getItem('basset') == null){
      localStorage.setItem('basset', JSON.stringify(''));
    } 
  }, []);

  function Alert(men, tipo) {
    if (tipo) {
      document.getElementById('notificacion').classList.add('color-success');
    } else {
      document.getElementById('notificacion').classList.add('color-error');
    }

    document.getElementById('notificacion').innerHTML = '';
    document.getElementById('notificacion').innerHTML +=
      `
    <i class="fa-solid fa-circle-check"></i>
    <p class="m-0 px-2">` +
      men +
      `</p>`;
    setTimeout(() => {
      if (tipo) {
        document.getElementById('notificacion').classList.remove('color-success');
      } else {
        document.getElementById('notificacion').classList.remove('color-error');
      }
      document.getElementById('notificacion').innerHTML = '';
    }, 5000);
  }

  function DupUser(user) {
    let r = true
    bassetUsers.forEach((u) => {
      if (u.user == user) {
        r = false
        Alert('Usuario ya existente', false)
      }
    })
    return r;
  }

  function VerificarEDatosUser () {
    let dataU = [];
    if (localStorage.getItem('bassetUsers') == null){
      localStorage.setItem('bassetUsers', JSON.stringify(dataU));
    }
    dataU = JSON.parse(localStorage.getItem('bassetUsers'))

    return dataU;
  }
  function VerificarEDatosTweets () {
    let dataT = [];
    if (localStorage.getItem('bassetTweets') == null){
      localStorage.setItem('bassetTweets', JSON.stringify(dataT));
    } 
    dataT = JSON.parse(localStorage.getItem('bassetTweets'))

    return dataT;
  }

  function registro(user, pass, icon, des) {
    if (!user || !pass || !icon) {
      document.getElementById('userReg').classList.replace('color-success', 'color-error');
      document.getElementById('passReg').classList.replace('color-success', 'color-error');
      document.getElementById('desReg').classList.replace('color-success', 'color-error');
      document.getElementById('iconReg').classList.replace('color-success', 'color-error');
      Alert('Rellena todos los campos')
    } else {
      const newUser = {
        user,
        pass,
        icon,
        des
      }
  
      let data = JSON.parse(localStorage.getItem('bassetUsers'))
      data.push(newUser)
      localStorage.setItem('bassetUsers', JSON.stringify(data))
      localStorage.setItem('basset', JSON.stringify(newUser))
      setBasU(VerificarEDatosUser())
      window.location.href = '/';
    }
  }

  function login(user, pass) {
    if (!user || !pass) {
      document.getElementById('userLog').classList.replace('color-success', 'color-error');
      document.getElementById('passLog').classList.replace('color-success', 'color-error');
      Alert('Rellena todos los campos')
    } else {
      let r = false
      bassetUsers.forEach((u) => {
        if (u.user == user) {
          if (u.pass == pass) {
            r = true
            localStorage.setItem('basset', JSON.stringify(u))
          }
        }
      })
      if (r) {
        window.location.href = '/';
      } else {
        Alert('Verifica tu usuario y contraseña', false)
      }
    }
  }

  function cerrarSesion () {
    localStorage.removeItem('basset')
    window.location.href = '/login'
  }

  function obetenerFecha () {
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    if(month < 10){
      return `${day}-0${month}-${year}`
    }else{
      return `${day}-${month}-${year}`
    }
  }

  function crearTweets(prop, icon, content) {
    if (content == '') {
      Alert('Ingresa un texto', false)
    } else {
      const tweet = {
        prop,
        icon,
        content,
        date: obetenerFecha(),
        fav: [],
        id: prop + Object.keys(bassetTweets).length
      }
      
      let data = JSON.parse(localStorage.getItem('bassetTweets'));
      data.push(tweet);
      localStorage.setItem('bassetTweets', JSON.stringify(data));
      setBasT(VerificarEDatosTweets())
      Alert('Se ha publicado tu tweet', true)
    }
  }

  function marcarFav(id, user) {
    let tweets = bassetTweets
    bassetTweets.forEach((t, i) => {
      if (id == t.id) {
        if (t.fav.includes(user)) {
          const indice = t.fav.indexOf(user)
          t.fav.splice(indice, 1)
          Alert('Eliminado de favoritos', true)
        } else {
          tweets[i].fav.push(user)
          Alert('Marcado como favorito', true)
        }
      }
    })
    localStorage.setItem('bassetTweets', JSON.stringify(tweets));
    setBasT(VerificarEDatosTweets())
  }

  function eliminarTweet(id) {
    let tweets = bassetTweets
    bassetTweets.forEach((t, i) => {
      if (id == t.id) {
        tweets.splice(i, 1)
        Alert('Tweet eliminado', true)
      }
    })
    localStorage.setItem('bassetTweets', JSON.stringify(tweets));
    setBasT(VerificarEDatosTweets())
  }
  
  function listarFavs(user) {
    let tweets = []
    bassetTweets.forEach((t) => {
      if (t.fav.includes(user)) {
        tweets.push(t)
      }
    })
    return tweets
  }
  function listarmisTweets(user) {
    let tweets = []
    bassetTweets.forEach((t) => {
      if (t.prop.includes(user)) {
        tweets.push(t)
      }
    })
    return tweets
  }

  return <Contexto_Funciones.Provider value={{
    DupUser, 
    registro, 
    login,
    Alert, 
    cerrarSesion, 
    crearTweets, 
    marcarFav, 
    eliminarTweet, 
    listarFavs, 
    listarmisTweets, 
    modal, setModal
    }}>
    {props.children}
  </Contexto_Funciones.Provider>;
}
