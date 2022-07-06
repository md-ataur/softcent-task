import tech1 from '../../images/tech1.png';
import tech2 from '../../images/tech2.png';
import tech3 from '../../images/tech3.png';
import tech4 from '../../images/tech4.png';
import tech5 from '../../images/tech5.png';
import underline from '../../images/underline-technology.png';

const DevTechnology = () => {
    return (
        <div className="container dev-technology-section">
            <h2 className="title dev-technology-title">
                Our Dev Technology
                <span>
                    <img src={underline} alt="Underline" />
                </span>
            </h2>
            <div>
                <div className="tab-nav">
                    <ul>
                        <li>
                            <a href="#">Programming Languages</a>
                        </li>
                        <li>
                            <a href="#">Frameworks</a>
                        </li>
                        <li>
                            <a href="#">Databases</a>
                        </li>
                        <li>
                            <a href="#">Mobile Platforms</a>
                        </li>
                    </ul>
                </div>
                <div className="tech-logo">
                    <div>
                        <img src={tech1} alt="image" />
                    </div>
                    <div>
                        <img src={tech2} alt="image" />
                    </div>
                    <div>
                        <img src={tech3} alt="image" />
                    </div>
                    <div>
                        <img src={tech4} alt="image" />
                    </div>
                    <div>
                        <img src={tech5} alt="image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DevTechnology;
