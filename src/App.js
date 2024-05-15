import logo from './logo.svg';
import './App.css';
import HeroSection from './components/HeroSection';
import Pioneers from './components/Pioneers';
import Approvel from './components/Approvel';
import AboutUs from './components/AboutUs';
import Blogs from './components/Blogs';

function App() {
  return (
    <>
     <HeroSection/> 
     <Pioneers/>
     <Approvel/>
     <AboutUs/>
     <Blogs/>
    </>
  );
}

export default App;
