import React, { Component } from 'react'
import HandleEvent from '../../HandleEvent/HandleEvent'
import BTTKCarousel from './BTTKCarousel'
import BTTKHeader from './BTTKHeader'
import BTTKProduct from './BTTKProduct'

export default class BaiTapThuKinh extends Component {
    render() {
        return (
            <div>
                <BTTKHeader></BTTKHeader>
                <BTTKCarousel>
                    
                </BTTKCarousel>
                <BTTKProduct  />


                <HandleEvent></HandleEvent>
            </div>
        )
    }
}
