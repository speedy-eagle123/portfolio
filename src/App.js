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


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/rwz' element={<RWZ />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
