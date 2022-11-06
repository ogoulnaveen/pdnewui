import { Container } from '@mui/system';
import React from 'react'
import './carousel.css';
import Slider from "react-slick";
import Card from '../card/card';
import { IsMobileWidth } from '../utill/utils';
import Headphone from '../../../assets/images/headphone.svg';
import clsx from 'clsx';

const Carousel = () => {
    const mobileWidth = IsMobileWidth()
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        // autoplay: true,
        // speed: 5000,
        // autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='carousel1 pt-5 pb-4'>
            <Container maxWidth='lg'>
                <p className={clsx(mobileWidth && 'res-heading-carousel', 'heading-carousel')}>Check out our Features</p>
                <p className={clsx(!mobileWidth && 'w-40', mobileWidth && 'w-100', 'title2')}>Work from home alot easier and smoother through its simplified user interface and speey software </p>
                <Slider className='mt-4 pt-5 pb-5 mb-5' {...settings}>
                    <div className='pl-5 pr-5'>
                        <Card
                            image={Headphone}
                            title='Feature 1'
                            description="Get on conference calls with your colleagues using high quality audio video."
                        />
                    </div>
                    <div className='pl-5 pr-5'>
                        <Card
                            image={Headphone}
                            title='Feature 2'
                            description="Get on conference calls with your colleagues using high quality audio video."
                        />
                    </div>
                    <div className='pl-5 pr-5'>
                        <Card
                            image={Headphone}
                            title='Feature 3'
                            description="Get on conference calls with your colleagues using high quality audio video."
                        />
                    </div>
                    <div className='pl-5 pr-5'>
                        <Card
                            image={Headphone}
                            title='Feature 4'
                            description="Get on conference calls with your colleagues using high quality audio video."
                        />
                    </div>
                    <div className='pl-5 pr-5'>
                        <Card
                            image={Headphone}
                            title='Feature 5'
                            description="Get on conference calls with your colleagues using high quality audio video."
                        />
                    </div>
                    <div className='pl-5 pr-5'>
                        <Card
                            image={Headphone}
                            title='Feature 6'
                            description="Get on conference calls with your colleagues using high quality audio video."
                        />
                    </div>
                </Slider>

            </Container>
        </div>
    )
}

export default Carousel