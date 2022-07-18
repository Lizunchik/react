import { Routes, Route} from 'react-router-dom';
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'
import NotFoundPage from '../pages/NotFoundPage'
import HomePage from '../pages/NotFoundPage';
import Header from '../pages/Header';

function App() {
  return (
    
    <Routes>
      <Route path={'/'} element={<HomePage/>}></Route>
      <Route path={'/register'} element={<RegisterPage/>}></Route>
      <Route path={'/login'} element={<LoginPage/>}></Route>
      <Route path={'*'} element={<NotFoundPage/>}></Route>
    </Routes>

  );
}

export default App;
