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
        </div>
    );
};

export default OurCustomers;
