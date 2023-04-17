import React from 'react';
import Fade from 'react-reveal/Fade';

import './Pages/Styles/review.css';

class Reviews extends React.Component{
    state = {  
    } 
    render(){
        return(
            <div id='review'>
                <img  className='company-img'  src ={this.props.company}/>
                <div className='review-container'>
                    <p className='smallText'><b>{this.props.name}</b></p>
                    <p className='smallText'>{this.props.review}</p>
                </div>
                


            </div>
        )
    }


}
export default Reviews;