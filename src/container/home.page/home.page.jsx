import React from 'react'
import HomePageBanner from '../../components/common/home.page.banner/home.page.banner'
import HomePageBannerImage from '../../assets/images/home.jpg';
import { Button, Container } from '@mui/material';
import clsx from 'clsx';
import { useStyle } from './home.page.style';
import FileUploadBox from '../../components/common/file.upload.box/file.upload.box';
import AboutUsText from '../../components/common/about.us.text/about.us.text';
import VideoBanner from '../../components/common/video.banner/video.banner';
import Faqs from '../../components/common/faqs/faqs';
import ContactUs from '../../components/common/contact.us/contact.us';
import wavesImage from '../../assets/images/waves.svg';
import Footer from '../../components/common/footer/footer';
import Carousel from '../../components/common/carousel/carousel';
import { IsMobileWidth } from '../../components/common/utill/utils';
import AppNavbar from '../../components/common/app.navbar/app.navbar';

const HomePage = (props) => {
    const classes = useStyle()
    const mobileWidth = IsMobileWidth()

    return (
        <div>
            <AppNavbar />
            <div className='w-100 position-relative'>
                <div id='home' className='w-100'>
                    <HomePageBanner
                        image={HomePageBannerImage}
                        title='An automatic and voiceover platform.'
                        label='An platform'
                        footer={
                            <Button className={clsx(classes.btn2, !mobileWidth && 'pl-5 pr-5', mobileWidth && 'pl-4 pr-4')}>Try Now</Button>
                        }
                    />
                </div>
                <Container maxWidth='xl' className='position-relative' style={{ marginTop: '-70px' }}>
                    <div className='w-95 m-auto'>
                        <FileUploadBox />
                    </div>
                </Container>
                <Container maxWidth='xl' id='about-us' className='m-auto w-90 pt-5 mt-3'>
                    <AboutUsText />
                </Container>
                <div id='pricing'>
                    <Carousel />
                </div>
                <div>
                    <VideoBanner />
                </div>
                <div className='position-relative'
                    style={{
                        backgroundImage: `url(${wavesImage})`,
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    {/* <div className='position-absolute z-index-n'>
                        <img src={wavesImage} alt='waves' width='100%' />
                    </div> */}
                    <div id='faqs'>
                        <Faqs />
                    </div>
                    <div id='contact-us' className={clsx(!mobileWidth && 'p-5 mt-2', mobileWidth && 'p-2')}>
                        <ContactUs />
                    </div>
                    <div className=''>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomePage