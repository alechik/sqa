// eslint-disable-next-line no-unused-vars
import React, { useState } from "react"
import Slider from "react-slick"

const NextArrow = (props) =>{
    // eslint-disable-next-line react/prop-types
    const {onClick} = props
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="next">
                <i className="fas fa-long-arrow-alt-right"></i>
            </button>
        </div>
    )
}

const PrevArrow = (props) =>{
    // eslint-disable-next-line react/prop-types
    const {onClick} = props
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="prev">
                <i className="fas fa-long-arrow-alt-left"></i>
            </button>
        </div>
    )
}

// eslint-disable-next-line react/prop-types
const FlashCard = ({productItems}) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <>
            <Slider {...settings}>
                {/* eslint-disable-next-line react/prop-types */}
        {productItems.map((productItems) => {
            // eslint-disable-next-line react/jsx-key
            return (<div className='box' >
                    <div className='product mtop'>
                        {/* eslint-disable-next-line react/prop-types */}
                        <div className='img' id={productItems.id}>
                            {/* eslint-disable-next-line react/prop-types */}
                            <span className='discount'>{productItems.discount}% Off</span>
                            {/* eslint-disable-next-line react/prop-types */}
                            <img src={productItems.cover} alt=''/>
                            <div className='product-like'>
                                <label>0</label> <br/>
                                <i className='far fa-heart' onClick=''></i>
                            </div>
                        </div>
                        <div className="product-details">
                            {/* eslint-disable-next-line react/prop-types */}
                            <h3>{productItems.name}</h3>
                            <div className="rate">
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                            <div className="price">
                                {/* eslint-disable-next-line react/prop-types */}
                                <h4>{productItems.price}.00</h4>
                                <button>
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
            </Slider>
            </>
        )
    }
    export default FlashCard


