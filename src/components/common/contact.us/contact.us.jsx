import { Button, TextField } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import ContactUsImage from '../../../assets/images/contact-us-image.png';
import './contact.us.css';
import clsx from 'clsx';
import { IsMobileWidth } from '../utill/utils';

const ContactUs = () => {
    const mobileWidth = IsMobileWidth()
    const [state, setState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (name, value) => {
        setState({ ...state, [name]: value });
    };
    return (
        <div className={clsx(!mobileWidth && 'p-4', mobileWidth && 'flex-column p-2', 'contact d-flex')}>
            <div className={clsx(!mobileWidth && 'w-50 p-5', mobileWidth && 'w-100 pl-2 pr-2', 'd-flex flex-column justify-content-center align-items-start')}>
                <p className={clsx(mobileWidth && 'res-head-contact', 'head-contact')}>Contact Us</p>
                <p className='title pt-2 pb-2'>Our team is always happy to hear from you and get back to you. Reach out to us whenever you wish, your opinion greatly matters. </p>
                <div className='w-100 pt-2 pb-2'>
                    <TextField
                        // sx={{ borderBottom: '2.5px solid #01babf' }}
                        id="standard-multiline-flexible"
                        value={state.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        variant="standard"
                        label='Name'
                        fullWidth={true}
                    />
                </div>
                <div className='w-100 pt-2 pb-2'>
                    <TextField
                        // sx={{ borderBottom: '2.5px solid #01babf' }}
                        id="standard-multiline-flexible"
                        value={state.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        variant="standard"
                        label='Email Address'
                        fullWidth={true}
                    />
                </div>
                <div className='w-100 pt-2 pb-3'>
                    <TextField
                        // sx={{ borderBottom: '2.5px solid #01babf' }}
                        id="standard-multiline-flexible"
                        value={state.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        variant="standard"
                        fullWidth={true}
                        rows={4}
                        label="Your Message"
                        multiline
                    />
                </div>
                <Button variant='none' className='w-100 btn-contact pt-3 pb-3 mt-5 mb-4'>
                    Send Message
                </Button>
            </div>
            <div className={clsx(!mobileWidth && 'w-50', mobileWidth && 'w-100 mt-3', 'd-flex justify-content-center align-items-center')}>
                <img src={ContactUsImage} alt='contact-us' width={!mobileWidth ? '300px' : '250px'} />
            </div>
        </div>
    )
}

export default ContactUs