import React, { Component } from 'react';
import Uber from "../../Assets/Uber.png";
import Doordash from "../../Assets/DoorDash.png";
import location from "../../Assets/location.svg";
import Fade from 'react-reveal/Fade';
import "./Styles/Landing.css";
class Landing extends Component {
    handleUber = () => {
        window.open("https://www.ubereats.com/store/broadview-seafood/fPRg4Tx-UV-FfqmwKVlIwA", "_blank");
    }
    handleDoor = () => {
        window.open("https://www.doordash.com/store/broadview-seafood-new-orleans-23840312/", "_blank");
    }
    state = {  } 
    render() { 
        return (
            <div id='landing'>
                
                <h1 className='d-sm-none d-md-none'>Broadview Seafood</h1>
                <a className='d-lg-none' style = {{textDecoration: "none", margin: "auto"}}  target = "_blank" href="https://www.google.com/maps/dir//1468+N+Broad+St,+New+Orleans,+LA+70119"><h3 style = {{fontSize: "30px", borderBottom: "solid 1px", textAlign: "center", alignSelf: "center"}}><span><img style = {{width: "20px", marginRight: "10px"}} src = {location}/></span>Broadview Seafood</h3></a>
                
                <h2>Get hooked on the taste of New Orleans</h2>


                <div className='order-buttons'>
                    <button onClick={this.handleDoor}><img src = {Doordash}/></button>
                    <button onClick={this.handleUber}><img src = {Uber}/></button>
                </div>
              
            </div>
        );
    }
}
 
export default Landing;