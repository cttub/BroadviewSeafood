import React, { Component } from 'react';
import location from '../Assets/location.svg';
class MobileTop extends Component {
    handleClick = () => {
        window.open("https://www.google.com/maps/dir//1468+N+Broad+St,+New+Orleans,+LA+70119", "_blank");
    }
    state = {  } 
    render() { 
        return (
            <div id='mobileNav'>
              
            </div>
        );
    }
}
 
export default MobileTop;