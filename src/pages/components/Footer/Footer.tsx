import React from 'react';
import android from './../../../assets/android.svg';
import apple from './../../../assets/apple.svg';
import './footer.css';

const Footer = () => {
    return (
        <div className='footer-content'>
            <a href='!#' className='footer-link footer-content-link'>
                Смотреть отзывы
            </a>
            <div className='footer-content-box'>
                <div className='footer-content-description'>
                    <a href='!#' className='footer-link footer-description-link'>
                        Скачать на телефон
                    </a>
                    <p className='footer-text'>Доступно в PRO-тарифе</p>
                </div>
                <div className='footer-buttons-links'>
                    <button className='footer-btn'>
                        <img src={android} alt='android' />
                        <span className='name-btn'>Android OS</span>
                    </button>
                    <button className='footer-btn'>
                        <img src={apple} alt='android' />
                        <span className='name-btn'>Apple iOS</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Footer;
