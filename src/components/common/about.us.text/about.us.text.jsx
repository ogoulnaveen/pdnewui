import { Paper } from '@mui/material'
import React from 'react'
import aboutUsImage from '../../../assets/images/Hello-1.jpg';
import './about.us.text.css';
import clsx from 'clsx';
import { IsMobileWidth } from '../utill/utils';

const AboutUsText = () => {
    const mobileWidth = IsMobileWidth()

    return (
        <Paper elevation={0} className={clsx(mobileWidth && 'flex-column', 'd-flex align-items-center justify-content-center mt-4 mb-4')}>
            <div className='pt-4 pl-4'>
                <img src={aboutUsImage} alt='about' width='100%' />
            </div>
            <div>
                <p className='head1'>About Us </p>
                <p className='head2'>Instant  </p>
                <p className='head2 pl-3'>in  languages </p>
                <p className='head3'>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. </p>
                <button className='btn2 pl-5 pr-5 pt-2 pb-2 mt-3'>Sign Up</button>
            </div>
        </Paper>
    )
}

export default AboutUsText