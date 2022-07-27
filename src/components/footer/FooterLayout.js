import React from 'react';
import logoWhite from "../../images/logo-white.svg";
import "../../style/footer.css";

export default function FooterLayout() {
    return (
        <div className='footer1 bg-dark'>
            <div className="footer-widget-area ptb100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="widget widget-about">
                                <img src={ logoWhite } alt="white logo" className="logo-white" />
                                <p className="nomargin">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, ducimus, atque. Praesentium suscipit provident explicabo dignissimos nostrum numquam deserunt earum accusantium et fugit.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="widget widget-links">
                                <h4 className="widget-title">Useful links</h4>
                                <ul className="general-listing">
                                    <li><a href="#">about movify</a></li>
                                    <li><a href="#">blog</a></li>
                                    <li><a href="#">forum</a></li>
                                    <li><a href="#">my account</a></li>
                                    <li><a href="#">watch list</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="widget widget-blog">
                                <h4 className="widget-title">latest news</h4>
                                <ul className="blog-posts">
                                    <li><a href="#">blog post 1</a><small>januar 13, 2018</small></li>
                                    <li><a href="#">blog post 2</a><small>januar 13, 2018</small></li>
                                    <li><a href="#">blog post 3</a><small>januar 13, 2018</small></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="widget widget-social">
                                <h4 className="widget-title">follow us</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, ducimus, atque.</p>
                                <ul className="social-btns">
                                    <li>
                                        <a href="#" className="social-btn-roll facebook">
                                            <div className="social-btn-roll-icons">
                                                {/* <FontAwesomeIcon icon={[faBrands, faFacebook]} /> */}
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="social-btn-roll twitter">
                                            <div className="social-btn-roll-icons">
                                                {/* <FontAwesomeIcon icon={[faBrands, faTwitter]} /> */}
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="social-btn-roll google-plus">
                                            <div className="social-btn-roll-icons">
                                                {/* <FontAwesomeIcon icon={[faBrands, faGooglePlus]} /> */}
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="social-btn-roll instagram">
                                            <div className="social-btn-roll-icons">
                                                {/* <FontAwesomeIcon icon={[faBrands, faInstagram]} /> */}
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}