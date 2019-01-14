import React from 'react'
import logo from '../../assets/img/logo.png'
import './styles.css'

const Header = () => (
    <div id="main-header">
        <div className='header'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 header-left">
                        <img src={logo} className="img-responsive brand" height='60px' alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Header;