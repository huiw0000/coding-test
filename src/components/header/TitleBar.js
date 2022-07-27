import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faGlobe } from '@fortawesome/free-solid-svg-icons';

export default function TitleBar() {
    return (
        <ul className="navbar-nav extra-nav">
            <li className="nav-item">
                <a className="nav-link toggle-search" href="#">
                    <FontAwesomeIcon icon={faSearch} />
                </a>
            </li>

            <li className="nav-item notification-wrapper">
                <a className="nav-link notification position-relative" href="#">
                    <FontAwesomeIcon icon={faGlobe} />
                    <span className="notification-count">2</span>
                </a>
            </li>

            <li className="nav-item m-auto">
                <a href="#" className="btn btn-main">
                    login
                </a>
            </li>
        </ul>
    )
}