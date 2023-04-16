import logo from './logo.svg';
import './App.css';
import LazyLoad from 'react-lazyload';
import Fade from 'react-reveal/Fade';
import Landing from './Components/Pages/Landing';
import TopBar from './Components/TopBar';
import MobileTop from './Components/MobileTop';

import cornPlate from './Assets/Images/corn-plate.png';
import crawfishBin from './Assets/Images/crawfish-bin.jpg';
import goodFood from './Assets/Images/goodFood.jpeg';
import gumbo from './Assets/Images/gumbo.png';
import frontDesk from './Assets/Images/front-desk.jpg';
import turkey from './Assets/Images/turkey.png';

import poboy from './Assets/Images/poboy.png';
import chicken from './Assets/Images/chicken.jpg';
import professional from './Assets/Images/professional-plate.png';
import shrimp from './Assets/Images/shrimp.jpg';
import close from './Assets/Images/crawfish-closeup.jpg';
import "./media.css";

function App() {
    const images = [cornPlate, crawfishBin, goodFood, gumbo, frontDesk, turkey];
  return (
    <div className="App">
        <LazyLoad>
        <div className='d-sm-none d-md-none'><TopBar/></div>
        <div className='d-lg-none'><MobileTop/></div>
        <Landing/>
 
        </LazyLoad>
    </div>
  );
}

export default App;
