import { Routes, Route} from 'react-router-dom';
import Chats from '../pages/Chats';
import Messages from '../pages/Messages';
import NotFoundPage from '../pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Chats/>}></Route>
      <Route path={'/messages/:id'} element={<Messages/>}></Route>
      <Route path={'*'} element={<NotFoundPage/>}></Route>
    </Routes>

  );
}

export default App;
