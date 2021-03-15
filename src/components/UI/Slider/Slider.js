import React from 'react';
import Slider from 'react-slick';

import classes from './Slider.module.scss';

const CustomSlider = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        variableWidth: true,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <Slider {...settings} className={classes.slider_wrapper}>
            {props.images.map((image, index) => {
                return (
                    <div key={index} className={classes.slide}>
                        <div className={classes.picture} style={{ backgroundImage: `url("${image}")`}}/>
                    </div>
                )
            })}
        </Slider>
    )
}


export default CustomSlider