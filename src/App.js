import AOS from 'aos';
import React,{useEffect} from "react";
import 'aos/dist/aos.css';
import './App.css';
import HeroSection from './components/HeroSection';
import Pioneers from './components/Pioneers';
import Approvel from './components/Approvel';
import AboutUs from './components/AboutUs';
import Blogs from './components/Blogs';

function App() {
  useEffect(() => {
    AOS.init({ 
 once : true,}
    );
  }, [])
  return (
    <div className='overflow-hidden'>
     <HeroSection/> 
     <Pioneers/>
     <Approvel/>
     <AboutUs/>
     <Blogs/>
    </div>
  );
}

export default App;
