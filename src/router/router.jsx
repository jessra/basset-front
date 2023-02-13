import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ListContent } from '../Views/listContent.jsx';
import { LoginRegister } from '../Views/loginRegister.jsx';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<ListContent />} />
        <Route exact path='/perfil' element={<ListContent />} />
        <Route exact path='/favoritos' element={<ListContent />} />
        <Route exact path='/login' element={<LoginRegister />} />
        <Route exact path='/registro' element={<LoginRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
