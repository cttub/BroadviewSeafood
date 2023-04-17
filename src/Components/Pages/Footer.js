import React, { Component } from 'react';

class Footer extends Component {
        handleClick = () => {
            window.location.href = "tel:5049443001";
        }
    state = {  } 
    render() { 
        return (
            <div id='footer'>
                <div>
                    <p style={{fontSize: "25px"}} className='footer-text'><b>Broadview Seafood</b></p>
                    <a target = "_blank" href="https://www.google.com/maps/dir//1468+N+Broad+St,+New+Orleans,+LA+70119" className='footer-text address-footer'>1468 N Broad St, New Orleans, LA 7011</a>
                    <br></br>
                    <button className='footer-text red-button phone-btn' onClick={this.handleClick}>(504) 944-3001</button>
                </div>
                <a target='_blank' href = "https://www.refinedreach.net/" className='watermark' style={{fontSize: "20px"}}>Website create by Refined Reach</a>
            </div>
        );
    }
}
 
export default Footer;