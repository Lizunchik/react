import { Routes, Route} from 'react-router-dom';
import {GistsList} from '../pages/Gists'

function App() {
  return (
    <Routes>
      <Route path={'/gists'} element={<GistsList/>}></Route>
    </Routes>

  );
}

export default App;
