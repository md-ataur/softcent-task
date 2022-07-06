import designTtool1 from '../../images/design-tool1.png';
import designTtool2 from '../../images/design-tool2.png';
import designTtool3 from '../../images/design-tool3.png';
import designTtool4 from '../../images/design-tool4.png';
import designTtool5 from '../../images/design-tool5.png';
import underline from '../../images/underline-technology.png';

const DesignTechnology = () => {
    return (
        <div className="container design-technology-section">
            <h2 className="title design-technology-title">
                Our Design Technology
                <span>
                    <img src={underline} alt="Underline" />
                </span>
            </h2>
            <div className="tech-logo">
                <div>
                    <img src={designTtool1} alt="image" />
                </div>
                <div>
                    <img src={designTtool2} alt="image" />
                </div>
                <div>
                    <img src={designTtool3} alt="image" />
                </div>
                <div>
                    <img src={designTtool4} alt="image" />
                </div>
                <div>
                    <img src={designTtool5} alt="image" />
                </div>
            </div>
        </div>
    );
};

export default DesignTechnology;
