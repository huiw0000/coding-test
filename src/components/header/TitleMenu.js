import React from 'react';

export default function TitleMenu() {
    const menuList = [
        ["Home", "Home Version 1", "Home Version 2", "Home Version 3", "Home Version 4"],
        ["Pages", "Celebrate list", "404 not found", "Contact Us", "Coming Soon"],
        ["Movie & TV shows", "Movie 1", "Movie 2", "Movie 3", "Movie 4"],
        ["Blog", "Blog 1", "Blog 2", "Blog 3", "Blog 4"],
        ["Contact Us"]
    ];
    return (
        <div className='navbar-nav mx-auto'>
            {menuList.map((e, i) => {
                return (
                    e.length > 1 ?
                        <div className='nav-item dropdown' key={i}>
                            <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{e[0]}</a>
                            <ul className='dropdown-menu'>
                                {
                                    e.map((element) => {
                                        return <li key={element}>
                                            <a href='#' className='dropdown-item'>{element}</a> 
                                        </li>
                                    })}
                            </ul>
                        </div> :
                        <div className='nav-item' key={i}>
                            <a className="nav-link" href="#">{e[0]}</a>
                        </div>
                )
            })}
        </div>
    )
}