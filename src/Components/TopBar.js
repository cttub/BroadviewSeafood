import React, { Component } from 'react';
import './Pages/Styles/top.css';

import location from '../Assets/location.svg';
import phone from '../Assets/Phone.svg';
class TopBar extends Component {
    handleClick = () => {
        window.location.href = "tel:5049443001";
    }
    state = {  } 
    render() { 
        return (
            <div id='topbar'>
                <div className='location'>
                    <img src ={location}/>
                    <a target = "_blank" href="https://www.google.com/maps/dir//1468+N+Broad+St,+New+Orleans,+LA+70119">1468 N Broad St, New Orleans, LA 70119</a>

                </div>
                <div className='number'>
                    <button onClick = {this.handleClick} className='red-button'>    
                            <img src = {phone}/>
                            <a>(504) 944-3001</a>
                    </button>
                </div>
                

            </div>
        );
    }
}
 
export default TopBar;