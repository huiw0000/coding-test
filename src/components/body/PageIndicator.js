import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default function PageIndicator() {
    return (
        <div className="row">
            <div className="col-md-12 col-sm-12">
                <nav className="pagination">
                    <ul>
                        <li><a href="#" className="current-page">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faAngleRight} />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

