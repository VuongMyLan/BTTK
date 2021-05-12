import React, { Component } from 'react'
import './BTTKCarousel.css';
import BTTKProduct from './BTTKProduct.js'

export default class BTTKCarousel extends Component {
   
   

    render() {
        return (
            <div className="container my-5 model">
            <div className="row text-center">
                <div class="col-4 card text-left glasson p-0">
                <img class="img-fluid" src="./img/glassesImage/model.jpg" alt="model"/>
                    <div className="tryglasson">
                    <img className="image-fluid " src='./img/glassesImage/v2.png' alt="model" style={{width: '82%', height: '71%'}} />
                    </div>
                  <div class="card-body1">
                    <h4 class="card-title text-primary p-2">Title</h4>
                    <p class="card-text">Body</p>
                  </div>
                </div>

                <div class="col-4 card text-left border-white">
                    <div class="card-body">
                    <h4 class="card-title"></h4>
                    <p class="card-text"></p>
                  </div>
                </div>

                <div class="col-4 card text-left p-0">
                <img class="img-fluid"src="./img/glassesImage/model.jpg" alt="model" />
                 
                </div>
            </div>
               
            </div>
            
        )
    }
}
