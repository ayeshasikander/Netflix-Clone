import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Player from './pages/Player';
import MoviePage from './pages/MoviePage';
import TvShow from './pages/TvShow';
import Netflix from './pages/Netflix';
// import Header from './components/Header';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route exact path='/' element={<Netflix />}></Route>
        <Route exact path='/login' element={<Login />}></Route>
        <Route exact path='/signup' element={<SignUp />}></Route>
        <Route exact path='/player' element={<Player />}></Route>
        <Route exact path='/movie' element={<MoviePage />}></Route>
        <Route exact path='/tv' element={<TvShow />}></Route>
      </Routes>
      {/* <Header/> */}
    </BrowserRouter>
  );
}

export default App;
