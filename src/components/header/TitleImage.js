import React from 'react';
import logo from "../../images/logo.svg";

export default function TitleImage() {
    return (
        <div className='navbar-brand'>
            <img src={logo} width="150" />
        </div>
    )
}