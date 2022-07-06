import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

import portfolio1 from '../../images/portfolio1.png';
import portfolio2 from '../../images/portfolio2.png';
import portfolio3 from '../../images/portfolio3.png';
import portfolio4 from '../../images/portfolio4.png';
import underline from '../../images/underline3.png';

const Portfolio = () => {
    return (
        <div className="container portfolio-section">
            <div className="our-portfolio-title">
                <h2 className="title">
                    Our Portfolio
                    <span>
                        <img src={underline} alt="Underline" />
                    </span>
                </h2>
            </div>
            <Swiper
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                }}
                modules={[Navigation, Autoplay]}
                className="portfolio"
                spaceBetween={30}
                slidesPerView={3}
                navigation
                autoplay
            >
                <SwiperSlide>
                    <img src={portfolio1} alt="image" />
                    <h4>Color System Design</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={portfolio2} alt="image" />
                    <h4>Logo Design</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={portfolio3} alt="image" />
                    <h4>UI/UX Design</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={portfolio4} alt="image" />
                    <h4>New One</h4>
                </SwiperSlide>
            </Swiper>

            <p className="see-all-portfolio">
                <a href="#" className="btnBlue">
                    See All Protfolio
                </a>
            </p>
        </div>
    );
};

export default Portfolio;
