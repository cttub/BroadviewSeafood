import React, { Component } from 'react';
import './Styles/explore.css';
import Fade from 'react-reveal/Fade';
class Explore extends Component {
    state = {  } 
    render() { 
        return (
            <div id = "explore">
                <div className='store col-lg-4 d-sm-none d-md-none'></div>
                <div className='explore-info col-lg-7'>
                    <h1 style={{marginTop: "0px"}}>Explore New Orleans</h1>
                    <a target = "_blank" href="https://www.google.com/maps/dir//1468+N+Broad+St,+New+Orleans,+LA+70119"><h1 style = {{fontSize: "30px", marginTop: "-50px"}}>1468 N Broad St, New Orleans, LA 7011</h1></a>

                    <div>
  <p style={{textDecoration: "underline", textDecorationColor: "white", textDecorationThickness: "2px", textUnderlineOffset: "0.3em" }}>Nearby Amazing Locations</p>
  <table className="locations-table">
              <tbody>
                <Fade duration = {1000}><tr>
                  <td>
                    <p className='table-font'>Convention Center</p>
                  </td>
                  <td>
                    <p className='table-font'>2.7 miles away</p>
                  </td>
                </tr></Fade>
                <Fade duration = {2000}><tr>
                  <td>
                    <p className='table-font'>Louis Armstrong Airport</p>
                  </td>
                  <td>
                    <p className='table-font'>10.7 miles away</p>
                  </td>
                </tr></Fade>
                <Fade duration = {3000}><tr>
                  <td>
                    <p className='table-font'>Superdome Arena</p>
                  </td>
                  <td>
                    <p className='table-font'>1.8 miles away</p>
                  </td>
                </tr></Fade>
                <Fade duration = {4000}><tr>
                  <td>
                    <p className='table-font'>French Quarter</p>
                  </td>
                  <td>
                    <p className='table-font'>1.7 miles away</p>
                  </td>
                </tr></Fade>
              </tbody>
            </table>
</div>

                
                </div>
            </div>

        );
    }
}
 
export default Explore;