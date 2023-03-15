import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecordShopContainer from './containers/RecordShopContainer';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/records" element={<RecordShopContainer/>} /> 
      </Routes>
    </Router>
   
  );
}

export default App;



