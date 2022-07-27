import React from 'react';
import TitleImage from "./TitleImage";
import TitleMenu from "./TitleMenu";
import TitleBar from "./TitleBar";
import  '../../style/header.css';

export default function HeaderLayout() {
    return (
        <div className='container-fluid'>
            <div className='navbar navbar-expand-lg'>
                <TitleImage />
                <TitleMenu />
                <TitleBar />
            </div>
        </div>
    )
}