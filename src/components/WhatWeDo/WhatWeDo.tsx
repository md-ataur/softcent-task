import icon1 from '../../images/icon1.png';
import icon2 from '../../images/icon2.png';
import underline from '../../images/underline3.png';

const WhatWeDo = () => {
    return (
        <div>
            <div className="container">
                <h2 className="title what-we-do-title">
                    What We Do
                    <span>
                        <img src={underline} alt="Underline" />
                    </span>
                </h2>
            </div>
            <div>
                <div className="container service-area">
                    <div className="branding">
                        <div className="icon-title">
                            <div className="icon">
                                <img src={icon1} alt="" />
                            </div>
                            <h2>Branding</h2>
                        </div>
                        <div className="services">
                            <ul>
                                <li>
                                    <a href="#">Brand Strategy</a>
                                </li>
                                <li>
                                    <a href="#">Social media</a>
                                </li>
                                <li>
                                    <a href="#">Marketing Assets</a>
                                </li>
                                <li>
                                    <a href="#">Presentations</a>
                                </li>
                                <li>
                                    <a href="#">Build MVP Version</a>
                                </li>
                                <li>
                                    <a href="#">Pitch Deck</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="design">
                        <div className="icon-title">
                            <div className="icon">
                                <img src={icon2} alt="" />
                            </div>
                            <h2>UI/UX Design</h2>
                        </div>
                        <div className="services">
                            <ul>
                                <li>
                                    <a href="#">User Interface</a>
                                </li>
                                <li>
                                    <a href="#">User Experience</a>
                                </li>
                                <li>
                                    <a href="#">Design System</a>
                                </li>
                                <li>
                                    <a href="#">Wireframe</a>
                                </li>
                                <li>
                                    <a href="#">Prototype</a>
                                </li>
                                <li>
                                    <a href="#">Website & Mobile App</a>
                                </li>
                                <li>
                                    <a href="#">IOS + Android</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="development">
                        <div className="icon-title">
                            <div className="icon">
                                <img src={icon2} alt="" />
                            </div>
                            <h2>Development</h2>
                        </div>
                        <div className="services">
                            <ul>
                                <li>
                                    <a href="#">Front End (HTML, CSS, React)</a>
                                </li>
                                <li>
                                    <a href="#">Backend (Node.js, MongoDB)</a>
                                </li>
                                <li>
                                    <a href="#">iOS (Swift)</a>
                                </li>
                                <li>
                                    <a href="#">Android (Kotlin, Flutter)</a>
                                </li>
                                <li>
                                    <a href="#">Blockchain Development (NFT)</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;
