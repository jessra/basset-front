import Inicio from './inicio.jsx'
import LoginRegister from './loginRegister.jsx'
import { BrowserRouter, BrowserRouter as Router, Route } from "react-router-dom";

function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route exact path="/" component={<Inicio/>} />
      </Router>
    </BrowserRouter>
  )
}

export default Routes;