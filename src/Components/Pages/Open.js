import React, { Component } from 'react';
import './Styles/open.css';
import Fade from 'react-reveal/Fade';
class Open extends Component {
    handleClick = () => {
        window.open("https://www.google.com/maps/dir//1468+N+Broad+St,+New+Orleans,+LA+70119", "_blank");
    }
    
    state = {  } 
    render() { 
        return (
            <div id='open'>
                
                <div className='text'>
        
                    <Fade down duration = {2000}><h1>We are Open Everyday</h1></Fade>
                    <p>Monday - Sunday</p>
                    <h2>10:30 AM–7:30 PM</h2>
                    <button onClick={this.handleClick} className='red-button'>Visit Us</button>
                
                </div>

            </div>

        );
    }
}
 
export default Open;