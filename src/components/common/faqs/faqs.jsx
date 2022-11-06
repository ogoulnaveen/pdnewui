import React from 'react'
import FrequentlyAskedQuestionsPanel from '../frequently.asked.questions.panel/frequently.asked.questions.panel'
import './faqs.css'
import clsx from 'clsx';
import { IsMobileWidth } from '../utill/utils';
import { Container } from '@mui/system';

const Faqs = () => {

    const mobileWidth = IsMobileWidth()
    const FAQ_ABOUT_ZAPP = [
        {
            "label": "Lorem ipsum dolor sit amet consectetur adipiscing elit?",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        },
        {
            "label": "Lorem ipsum dolor sit amet consectetur adipiscing elit?",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        },
        {
            "label": "Lorem ipsum dolor sit amet consectetur adipiscing elit?",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        },
        {
            "label": "Lorem ipsum dolor sit amet consectetur adipiscing elit?",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        },
    ]
    return (
        <div className={clsx(mobileWidth && 'flex-column p-3', !mobileWidth && 'pl-4 pr-4', 'faqs d-flex pt-4 pb-4')}>
            <Container maxWidth='xl' className={clsx(mobileWidth && 'flex-column', 'd-flex')} >
                <div className={clsx(!mobileWidth && 'w-50 p-5', mobileWidth && 'w-100 pl-3 pr-3 pt-3 pb-3', 'd-flex flex-column justify-content-center align-items-start')}>
                    <p className={clsx(mobileWidth && 'res-faq-head1', 'faq-head1 pb-2')}>Frequently Asked Questions</p>
                    <p className='faq-head2 pt-2 pb-2'>Get fast answers to your most pressing questions about Posh Dubbing </p>
                    <button className='btn2 pl-5 pr-5 pt-2 pb-2 mt-4'>
                        Let's get started
                    </button>
                </div>
                <div className={clsx(!mobileWidth && 'w-50', mobileWidth && 'w-100')}>
                    <FrequentlyAskedQuestionsPanel data={FAQ_ABOUT_ZAPP} />
                </div>
            </Container>
        </div>
    )
}

export default Faqs