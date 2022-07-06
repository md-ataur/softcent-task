import person from '../../images/person.png';
import quote1 from '../../images/quote1.png';
import quote2 from '../../images/quote2.png';
import testimonial from '../../images/testimonial.png';
import underline from '../../images/underline-pricing-plan.png';

const Testimonial = () => {
    return (
        <div className="container testimonial-section">
            <h2 className="title">
                Talk About Us!
                <span>
                    <img src={underline} alt="Underline" />
                </span>
            </h2>
            <div className="quote-area">
                <div className="quote-left">
                    <div>
                        <p>
                            <span className="left-quote-icon">
                                <img src={quote1} alt="image" />
                            </span>
                            We had a bit of a slow and bumpy start, but after changing the designer
                            on their side everything went in a very good direction. The designers
                            were talented and easy to work with.
                            <span className="right-quote-icon">
                                <img src={quote2} alt="image" />
                            </span>
                        </p>
                    </div>
                    <div className="reviewer">
                        <div>
                            <img src={person} alt="image" />
                        </div>
                        <div>
                            <h4>Shuvo Roy</h4>
                            <label>Softcent Co-Founder</label>
                        </div>
                    </div>
                </div>
                <div className="quote-right">
                    <img src={testimonial} alt="image" />
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
