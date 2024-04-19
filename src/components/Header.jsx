import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import logoImage from '../assets/images/logo.png';

const Header = () => {
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        const handleResize = () => { setIsMobileView(window.innerWidth <= 655); };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => { window.removeEventListener('resize', handleResize); };
    }, []);

    return (
        <div className="sticky-header">
            <Container>
                <header>
                    <div className='header'>
                        <div className="header-content">
                            <div className="logo">
                                <a href='/'>
                                    <img src={logoImage} alt='LOGO' className='header-logo'/>
                                </a>
                            </div>
                            <div className="c-select">
                                {isMobileView ? <></> : <div className="c-select">Loremips</div>}
                            </div>
                            <div className='slogan-text'>
                                Lorem ipsum, <span className='red-text'>dolor sit amet !</span>
                            </div>
                            <div>
                                <button>Loremips</button>
                            </div>
                            <div style={{ color: 'black' }} className="lorem-font">
                                Lorem ipsum
                            </div>
                        </div>
                    </div>
                </header>
            </Container>
        </div>
    );
};

export default Header;