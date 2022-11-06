import React from 'react'
import './login.page.css';
import LoginPageImage from '../../assets/images/login-page-image.png';
import { Paper, Container } from '@mui/material';
import { useState } from 'react';
import { IsMobileWidth, IsTabletWidth } from '../../components/common/utill/utils';
import clsx from 'clsx';
import EyeClose from '../../assets/images/eye-close.svg';
import EyeOpen from '../../assets/images/visibility.svg';
import Line1 from '../../assets/images/Line-1.png';
import Line2 from '../../assets/images/Line-2.png';
import Facebook from '../../assets/images/F.png';
import Google from '../../assets/images/G.png';
import AppNavbar from '../../components/common/app.navbar/app.navbar';


const LoginPage = () => {
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()
    const [state, setState] = useState({
        passwordVisibility: false,
        email: '',
    });

    // const handleChange = (name, value) => {
    //     setState({ ...state, [name]: value });
    // };
    const toggleVisiblity = () => {
        setState({ ...state, passwordVisibility: !state.passwordVisibility });
    };
    return (
        <div>
            <AppNavbar />
            <div className='w-100 login position-relative'>
                <img className='position-absolute' src={LoginPageImage} width='100%' height='100%' alt='login' />
                <Container className='w-100 h-100 position-absolute d-flex align-items-center justify-content-end mt-4'>
                    <form className='w-100 h-100 d-flex align-items-center justify-content-end'>
                        <Paper className={clsx(!(mobileWidth || tabletWidth) && 'w-40', tabletWidth && 'w-60', mobileWidth && 'w-95 m-auto', 'pl-4 pr-4 pt-4 pb-4 mr-5')}>
                            <div className='mb-3 pt-2'>
                                <p className='login-head'>
                                    Login to your account
                                </p>
                            </div>
                            <div className="form-group">
                                <label className='label' htmlFor="exampleInputEmail1">Email</label>
                                <input type="email" className="input" aria-describedby="emailHelp" placeholder="Please enter your email" />
                            </div>
                            <div className="form-group">
                                <label className='label' htmlFor="exampleInputPassword1">Password</label>
                                <div className="input-group mb-3">
                                    <input type={state.passwordVisibility ? "text" : "password"} className="form-control input" placeholder="Enter password" />
                                    <div className="input-group-prepend position-relative" onClick={toggleVisiblity}>
                                        <span className="position-absolute d-flex align-items-center icon pt-2" id="basic-addon1">
                                            <img src={!state.passwordVisibility ? EyeClose : EyeOpen} width='24px' alt='eye' />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button className="login-btn mt-4 mb-2 cursor-pointer">
                                Login
                            </button>
                            <div className='w-100 cursor-pointer pt-2'>
                                <p className='forgot-password'>
                                    Forgot pin?
                                </p>
                            </div>
                            <div className='d-flex align-items-center justify-content-center' style={{ height: '20px' }}>
                                <img src={Line2} alt='line2' width='140px' height="1px" />
                                <p className='login-with pl-2 pr-2 mt-3'>Or continue with</p>
                                <img src={Line1} alt='line1' width='140px' height="1px" />
                            </div>
                            <div className='d-flex'>
                                <a href='https://google.com/' target='_blank'>
                                    <div className='login-icons'>
                                        <img src={Google} alt='google' />
                                    </div>
                                </a>
                                <a href='https://facebook.com/' target='_blank'>
                                    <div className='login-icons ml-3'>
                                        <img src={Facebook} alt='fb' />
                                    </div>
                                </a>
                            </div>
                            <div className='d-flex align-items-center pt-4 cursor-pointer'>
                                <p className='text pr-2' > Not registered?</p>
                                <p className='text-2 cursor-pointer'>
                                    Create an account
                                </p>
                            </div>
                        </Paper>
                    </form>
                </Container>
            </div>
        </div>
    )
}

export default LoginPage