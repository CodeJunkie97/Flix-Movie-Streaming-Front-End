import Home from './components/pages/home/Home'
import './App.scss'
import Watch from './components/pages/watch/Watch';
import Register from './components/pages/register/Register';
import Login from './components/pages/login/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
const App = () => {
  const user = true;
  return ( 
  <Router>
  <Routes>
    <Route exact path="/" element = {user ? <Home /> : <Navigate to="/register" />}  />
    <Route path = "/register" element = {!user ? <Register /> : <Navigate to="/" />} />
    <Route exact path="/login" element = {!user ? <Login /> : <Navigate to="/" />}  />
    
    {user && (

  <>
    <Route path="/movies" element = {<Home type = "movie"/>} />
    <Route path="/series" element = {<Home type = "series"/>} />
    <Route path="/watch" element = {<Watch />} />
  </>
)}
  </Routes>
   
  </Router>
  );
};

export default App;

