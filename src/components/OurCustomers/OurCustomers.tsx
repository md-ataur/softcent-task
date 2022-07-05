import brand1 from '../../images/brand1.png';
import brand2 from '../../images/brand2.png';
import brand3 from '../../images/brand3.png';
import brand4 from '../../images/brand4.png';
import underline from '../../images/underline-title.png';

const OurCustomers = () => {
    return (
        <div className="container">
            <h2 className="title">
                Our Customers
                <span>
                    <img src={underline} alt="Underline" />
                </span>
            </h2>
            <div className="brand-logo">
                <ul>
                    <li>
                        <img src={brand1} alt="logo" />
                    </li>
                    <li>
                        <img src={brand2} alt="logo" />
                    </li>
                    <li>
                        <img src={brand3} alt="logo" />
                    </li>
                    <li>
                        <img src={brand4} alt="logo" />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default OurCustomers;
