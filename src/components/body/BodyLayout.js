import React, {useState} from 'react';
import Title from './Title';
import Main from './Main';
import PageIndicator from './PageIndicator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify, faTh } from '@fortawesome/free-solid-svg-icons';
import '../../style/body.css';

export default function BodyLayout() {
    const [message, setMessage] = useState(' ');
    const handleChange = event => {
        setMessage(event.target.value);
    };
    
    return (
        <>
            <Title />
            <div className='bg-light ptb100'>
                <div className='container'>
                    <div className="row mb50">
                        <div className="col-md-6">
                            <div className="layout-switcher">
                                <a href="#" className="list">
                                    <FontAwesomeIcon icon={faAlignJustify} />
                                </a>
                                <a href="#" className="grid active">
                                    <FontAwesomeIcon icon={faTh} />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 search">
                            <input
                                type="text"
                                placeholder='Type keyword to search'
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <Main keyword={message}/>
                    <PageIndicator />
                </div>
            </div>
        </>
    )
}