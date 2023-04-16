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

import plateOne from './Assets/Images/plate.png';
import plateTwo from './Assets/Images/plate2.png';
import "./media.css";
import CarouselComponet from './Components/CarouselComponent';

import Explore from './Components/Pages/Explore';
function App() {
    const images = [cornPlate, crawfishBin, goodFood, gumbo, frontDesk, turkey];
    const imageTwo =[poboy, chicken, professional, shrimp, close];
  return (
    <div className="App">
        <LazyLoad>
        <div className='d-sm-none d-md-none'><TopBar/></div>
        <div className='d-lg-none'><MobileTop/></div>
        <Landing/>
        <CarouselComponet 
        array = {images}/>
        <Fade right><img className='plateOne' src = {plateOne}/></Fade>
        <Explore/>
        <div className='d-sm-none'>
        <CarouselComponet 
        array = {imageTwo}/>
        </div>
        <Fade right><img className='plateOne' src = {plateOne}/></Fade>
        <Fade left><img className='plateTwo' src = {plateTwo}/></Fade>
        </LazyLoad>
    </div>
  );
}

export default App;
