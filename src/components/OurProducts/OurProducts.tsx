import mockup1 from '../../images/mockup1.png';
import mockup2 from '../../images/mockup2.png';
import underline from '../../images/underline3.png';

const OurProducts = () => {
    return (
        <div className="products-area">
            <div className="container">
                <div className="our-products-title">
                    <h2 className="title">
                        Our Products
                        <span>
                            <img src={underline} alt="Underline" />
                        </span>
                    </h2>
                    <div className="product-subtitle">
                        <p>
                            We believe that great design should not be out of reach, so our services
                            are less than half the price of a full-time designer.
                        </p>
                        <div>
                            <a className="btnBlue" href="#">
                                See More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="product-one">
                    <div className="product">
                        <h3>SwipeXYZ Product</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </p>
                        <div>
                            <a className="viewBtn" href="#">
                                View Product
                            </a>
                        </div>
                    </div>
                    <div className="product-img">
                        <img src={mockup1} alt="Image" />
                    </div>
                </div>
                <div className="product-two">
                    <div className="product-img">
                        <img src={mockup2} alt="Image" />
                    </div>
                    <div className="product">
                        <h3>Cashback Product</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </p>
                        <div>
                            <a className="viewBtn" href="#">
                                View Product
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProducts;
