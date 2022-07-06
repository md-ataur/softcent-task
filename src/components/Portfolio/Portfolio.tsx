import portfolio1 from '../../images/portfolio1.png';
import portfolio2 from '../../images/portfolio2.png';
import portfolio3 from '../../images/portfolio3.png';
import underline from '../../images/underline3.png';

const Portfolio = () => {
    return (
        <div className="container">
            <div className="our-portfolio-title">
                <h2 className="title">
                    Our Portfolio
                    <span>
                        <img src={underline} alt="Underline" />
                    </span>
                </h2>
            </div>
            <div className="portfolio">
                <div>
                    <img src={portfolio1} alt="image" />
                    <h4>Color System Design</h4>
                </div>
                <div>
                    <img src={portfolio2} alt="image" />
                    <h4>Logo Design</h4>
                </div>
                <div>
                    <img src={portfolio3} alt="image" />
                    <h4>UI/UX Design</h4>
                </div>
            </div>
            <p className="see-all-portfolio">
                <a href="#" className="btnBlue">
                    See All Protfolio
                </a>
            </p>
        </div>
    );
};

export default Portfolio;
