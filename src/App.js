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
import ReviewsCarousel from './Components/ReviewsCarousel';

import Explore from './Components/Pages/Explore';
import Reviews from './Components/Reviews';

import yelp from './Assets/yelp.png';
import uber from './Assets/uber_white.png';
import door from './Assets/DoorDash.png'
function App() {
    const images = [cornPlate, crawfishBin, goodFood, gumbo, frontDesk, turkey];
    const imageTwo =[poboy, chicken, professional, shrimp, close];
    const reviewData = [
      {
        company: yelp,
        name: 'Ingrid H.',
        review: 'This place is a bit divey, but it\'s definitely a hidden gem. The crawfish boil and potatoes were seasoned to perfection. The fish poboy was very crispy and not too oily. A side of the garlic butter sauce is a must. Very fair prices too.'
      },
      {
        company: uber,
        name: 'Shushma M.',
        review: 'I love the taste and freshness of the food being delivered to me . I don’t have to wait long and my food don’t be cold .'
      },
      {
        company: door,
        name: 'Ariana P',
        review: 'The crawfish was seasoned perfectly and so hot and delicious! My shrimp Poboy was chock full of crispy, hot shrimp, just the right amount of lettuce, tomatoes, pickles and mayo. My ham and cheese Poboy was perfect as well. The turkey neck could have been just a smidgen more tender, but it was still good and really hot!'
      },
      {
        company: yelp,
        name: 'Ashley M.',
        review: 'This was the very first place I went to try New Orleans crawfish and let me tell you I was in LOVE!! I was back in 2006 and me being from Houston and my WASband being from New Orleans he told me I have been lied to all my life about crawfish should taste...and oh my god was he right!! I love this place!!'
      },
      {
        company: door,
        name: 'Jennifer M',
        review: 'Crawfish were hot on arrival and flavorful. Onion rings were great. Potatoes were tasty. The sausage was spicy, but good. For delivery crawfish, can\'t beat this.'
      },
      {
        company: uber,
        name: 'Angelia M.',
        review: 'it was my first time eating from the place but I most say that the food was delicious. I definitely will order again.'
      },
      {
        company: yelp,
        name: 'Will T.',
        review: 'I have wanted to try authentic gumbo for years. This is the real deal. Spicy and flavorful. I\'m pretty sure I saw a chicken gizzard somewhere in there. Also, I think/hope it cured my hangover.'
      },
      {
        company: door,
        name: 'Veronica B',
        review: 'Love this place! The food is so yummy! The boil bag with Turkey neck and pigs feet is delicious!'
      },
      {
        company: uber,
        name: 'Brigitte A.',
        review: 'Excellent PoBoys! Delivered Hot and Fresh! I have found my go to PoBoy spot in New Orleans!'
      },
   
    ];
    
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
        <div className='reviews-carousel'>
        <ReviewsCarousel reviews={reviewData} />
        
       </div>

      
        </LazyLoad>
    </div>
  );
}

export default App;
