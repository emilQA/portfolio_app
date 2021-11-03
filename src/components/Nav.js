import React from 'react';
import {StyledNav} from '../styles'

const Nav = () => {
    return (

        <StyledNav>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <h1><a id="logo" href="#">Capture</a></h1>
            <ul>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <li><a href="#">1. About Us</a></li>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <li><a href="#">2. Our Work</a></li>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <li><a href="#">3. Contact Us</a></li>
            </ul>
        </StyledNav>

    )
};

export default Nav;