import React, { Component } from 'react'
import BTTKCarousel from './BTTKCarousel'
import BTTKHeader from './BTTKHeader'
import './BaiTapThuKinh.css';

export default class BaiTapThuKinh extends Component {
    render() {
        return (
            <div className="background" style={{
            backgroundImage: "url(./img/glassesImage/background.jpg)",  
            backgroundColor: 'rgba(0, 0, 0, 0.349)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
           }}>
           
                <BTTKHeader></BTTKHeader>
                <BTTKCarousel></BTTKCarousel>
               
            </div>
        )
    }
}
