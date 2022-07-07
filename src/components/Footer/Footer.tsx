import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import logo from '../../images/logo.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-partner">
                    <h3>
                        Looking for a <br />
                        Software Partner?
                    </h3>
                    <div>
                        <a className="btnFooter" href="#">
                            Start A Project
                        </a>
                    </div>
                </div>
                <div className="footer-content">
                    <div className="footer-left">
                        <div>
                            <img src={logo} alt="logo" />
                        </div>
                        <p>
                            Get a fully stacked design team that will give you accessible design,
                            exhaustive research, and an outstanding experience.
                        </p>
                        <div className="footer-info">
                            <p>Email: info@softcent.eu</p>
                            <p>Phone: +(372) 57836500</p>
                        </div>
                        <div className="social-icon">
                            <ul>
                                <li>
                                    <a href="#">
                                        <FaFacebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FaTwitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FaWhatsapp />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FaInstagram />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-nav">
                        <h4>Company</h4>
                        <ul>
                            <li>
                                <a href="#">About us</a>
                            </li>
                            <li>
                                <a href="#">Our portfolio</a>
                            </li>
                            <li>
                                <a href="#">Our Product</a>
                            </li>
                            <li>
                                <a href="#">Our Team</a>
                            </li>
                            <li>
                                <a href="#">Our Priceing</a>
                            </li>
                            <li>
                                <a href="#">Testimonials</a>
                            </li>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-nav">
                        <h4>Our Service</h4>
                        <ul>
                            <li>
                                <a href="#">Marketing</a>
                            </li>
                            <li>
                                <a href="#">UI/UX Design</a>
                            </li>
                            <li>
                                <a href="#">Graphic Design (Branding)</a>
                            </li>
                            <li>
                                <a href="#">Development</a>
                            </li>
                            <li>
                                <a href="#">New Products</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-nav">
                        <h4>Supports</h4>
                        <ul>
                            <li>
                                <a href="#">FAQs</a>
                            </li>
                            <li>
                                <a href="#">Support Policy</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Trams of Service</a>
                            </li>
                            <li>
                                <a href="#">Refund Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p>&copy; 2022, Softcent EU, A European IT company</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
