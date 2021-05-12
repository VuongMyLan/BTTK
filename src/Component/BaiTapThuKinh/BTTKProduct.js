import React, { Component } from 'react'
import Product from './Product'

export default class BTTKProduct extends Component {
    constructor(){
        super()
        console.log(this.props);
    }
    
    arrProduct = [
    { id: 1, price: 30, name: 'GUCCI G8850U', url: './img/glassesImage/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    { id: 2, price: 50, name: 'GUCCI G8759H', url: './img/glassesImage/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    { id: 3, price: 30, name: 'DIOR D6700HQ', url: './img/glassesImage/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    { id: 4, price: 30, name: 'DIOR D6005U', url:  './img/glassesImage/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    { id: 5, price: 30, name: 'PRADA P8750', url: './img/glassesImage/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    { id: 6, price: 30, name: 'PRADA P9700', url: './img/glassesImage/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    { id: 7, price: 30, name: 'FENDI F8750', url: './img/glassesImage/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    { id: 8, price: 30, name: 'FENDI F8500', url: './img/glassesImage/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    { id: 9, price: 30, name: 'FENDI F4300', url: './img/glassesImage/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' }
    ]

    state = {
        content: {
        id: 1, price: 30, name: 'GUCCI G8850U', url: './img/glassesImage/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. '} 
    }

    changeGlass = (glassClick) => {
        console.log(glassClick)
        this.setState({
            content: glassClick})
    }


    renderProduct = () => {
        return this.arrProduct.map((glass) => {
            return  <div className="col-2 mt-5">
                       <Product glass={glass}  changeGlass={this.changeGlass}></Product>
                    </div>
                   
        })
    
    }




    render() {
        return (
            <div className="container-fluid bg-white mt-5" style={{width: '80%', height: '350px'}}>
                <div className="row">
                {this.renderProduct()}
                </div>
             </div>
           
        )
    }
}
