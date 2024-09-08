import {Routes,Route} from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Photos from './components/photos';
import Posts from './components/posts';
import Todos from './components/todos';
import Albums from './components/albums';
import Notfind from './components/Notfind';
import Home from './components/home'; 
import Info from './components/info';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/photos' element={<Photos />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/todos' element={<Todos />} />
          <Route path='/albums' element={<Albums />} />
          <Route path='/info' element={<Info />} />
          <Route path='*' element={<Notfind />} />
      </Routes>
      </header>
    </div>
  );
}

export default App;
