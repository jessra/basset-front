import logo from '../assets/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/fontawesome';
import { Registro } from "../components/Registro.jsx";
import { Login } from "../components/Login.jsx";
import { Alerts } from "../components/Alerts.jsx";

export function LoginRegister() {
  const vistaActual = window.location.href
  const route = vistaActual.split('/')[3]
  const men = route == 'login' ? 'Bienvenidos' : 'Únete a nosotros'
  return (
    <div className='loginRegister'>
      <div className='container-login'>
        <div className='container-logoform'>
          <img src={logo} alt='' />
        </div>
        <div className='container-datalogin'>
          <h5>{men}</h5>
          <Login route= {route}></Login>
          <Registro route= {route}></Registro>
        </div>
      </div>
      <Alerts></Alerts>
    </div>
  );
}
