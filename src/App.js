
import { useEffect, useState } from 'react';
import './App.css';
import DropDown from './components/DropDown';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    const hiddenMenu =() => {
      if(window.innerWidth >768 && isOpen){
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', hiddenMenu)
    return () => {
      window.removeEventListener('resize',hiddenMenu)
    }
  })
  return (
    <>
      <Navbar toggle={toggle}></Navbar>
      <DropDown isOpen={isOpen} toggle={toggle} />
      <Hero></Hero>
    </>
  );
}

export default App;
