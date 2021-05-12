import React, { Component } from 'react'
import './BTTKCarousel.css';

import Product from './Product';

export default class BTTKCarousel extends Component {

    arrProduct = [
        { id: 1, price: 30, name: 'GUCCI G8850U', url: './img/glassesImage/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 2, price: 50, name: 'GUCCI G8759H', url: './img/glassesImage/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 3, price: 30, name: 'DIOR D6700HQ', url: './img/glassesImage/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 4, price: 30, name: 'DIOR D6005U', url: './img/glassesImage/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 5, price: 30, name: 'PRADA P8750', url: './img/glassesImage/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 6, price: 30, name: 'PRADA P9700', url: './img/glassesImage/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 7, price: 30, name: 'FENDI F8750', url: './img/glassesImage/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 8, price: 30, name: 'FENDI F8500', url: './img/glassesImage/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 9, price: 30, name: 'FENDI F4300', url: './img/glassesImage/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' }
    ]

    state = {
        content: {
            id: 1, price: 30, name: 'GUCCI G8850U', url: './img/glassesImage/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. '
        }
    }

    changeGlass = (glassClick) => {
        console.log(glassClick)
        this.setState({
            content: glassClick
        })
    }


    renderProduct = () => {
        return this.arrProduct.map((glass) => {
            return <div className="col-2 mt-5">
                <Product glasses={glass} changeGlass={this.changeGlass} />
            </div>

        })

    }


    render() {
        let { id, price, name, url, desc } = this.state.content;

        return (<section>
            <div className="container my-5 model">
                <div className="row text-center">
                    <div class="col-4 card text-left glasson p-0">
                        <img class="img-fluid" src="./img/glassesImage/model.jpg" alt="model" />
                        <div className="tryglasson">
                            <img className="image-fluid " src={url} alt="model" style={{ width: '82%', height: '71%' }} />
                        </div>
                        <div class="card-body1">
                            <h4 class="card-title text-primary p-2">{name}</h4>
                            <p class="card-text text-white p-2">{desc}</p>
                        </div>
                    </div>

                    <div class="col-4 card text-left border-white">
                        <div class="card-body">
                            <h4 class="card-title"></h4>
                            <p class="card-text"></p>
                        </div>
                    </div>

                    <div class="col-4 card text-left p-0">
                        <img class="img-fluid" src="./img/glassesImage/model.jpg" alt="model" />

                    </div>
                </div>

            </div>

            <div className="container-fluid bg-white mt-5" style={{ width: '80%', height: '350px' }}>
                <div className="row">
                    {this.renderProduct()}
                </div>
            </div>



        </section>

        )
    }
}
