
import './App.css';
import Home from './screens/Home';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Login from './screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
    < >
      <Router>
        <Routes>
        <Route exact={true} path='/' element={  <Home/>}></Route>
        <Route exact={true} path='/login' element={  <Login/>}></Route>
          
        </Routes>
      </Router>
  
    </>
  );
}

export default App;
