import React, { Component } from 'react'
import './product.css';

export default class Product extends Component {
   
    render() {
        return (
            <div className="container glassproduct">
                <img className="image-fluid " src={this.props.glasses.url} 
                onClick={()=>{
                    this.props.changeGlass(this.props.glasses)
                }} alt="model" style={{width: '100%', height: '100px'}} />
            </div>
        )
    }
}
