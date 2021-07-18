import './App.css';
import {useState} from 'react';
import Navbar from './components/navbar/Navbar'
import {BrowserRouter as Router} from 'react-router-dom'
import Hero from './components/hero/Hero';
import Menu from './components/menu/Menu';
import Carousal from './components/carousal/Carousal';
// import Carousal from './components/carousal/Carousal'
import Contactus from './components/contactus/Contactus'


function App() {
  const [open, setOpen] = useState(false);
  return (
    <Router>
      <Navbar open={open} setOpen={setOpen}/>
      <Menu menuOpen={open} setMenuOpen={setOpen}/>
      <Hero/>
      <Carousal/>
      <Contactus/>
    </Router>
  );
}

export default App;
