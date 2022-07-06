import logo from '../../images/logo.png';

const Header = () => {
    return (
        <header>
            <div className="header container">
                <div className="logo">
                    <img src={logo} alt="Softcent" />
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Work</a>
                        </li>
                        <li>
                            <a href="#">Premium Products</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a className="btnSkyBlue" href="#">
                                Start a project
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
