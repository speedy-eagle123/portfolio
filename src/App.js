import logo from './logo.svg';
import './css/App.css';
import Home from './pages/Home'
import RWZ from './pages/RWZ';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Responsive from './pages/Responsive';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Responsive />}></Route>
        <Route exact path='/rwz' element={<RWZ />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
