import videoImg from '../../images/video-image.png';

const Hero = () => {
    return (
        <div>
            <div className="container">
                <div className="hero-section">
                    <div className="hero-left">
                        <h2>
                            <span>Software </span>
                            services for startups without limits..
                        </h2>
                        <p>
                            We believe that great design should not be out of reach, so our services
                            are less than half the price of a full-time designer.
                        </p>
                    </div>
                    <div className="hero-right"></div>
                </div>
                <div className="video-section">
                    <img src={videoImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
