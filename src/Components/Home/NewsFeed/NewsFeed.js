import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import picture1 from '../../../images/picture1.jpg';
import picture2 from '../../../images/picture2.jpg';
import picture3 from '../../../images/picture3.jpg';
import picture4 from '../../../images/picture4.jpg';
import picture5 from '../../../images/picture5.jpg';
import picture6 from '../../../images/picture6.jpg';
import picture7 from '../../../images/picture7.jpg';
import picture8 from '../../../images/picture8.jpg';
import './NewsFeed.css'


const NewsFeed = () => {

    return (
        <div className='NewsFeed'>

            <div className="swiper">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><div className="picture1" style={{backgroundImage: "url(" + picture1 +")"}}></div></SwiperSlide>
                    <SwiperSlide><div className="picture2" style={{backgroundImage: "url(" + picture2 +")"}}></div></SwiperSlide>
                    <SwiperSlide><div className="picture3" style={{backgroundImage: "url(" + picture3 +")"}}></div></SwiperSlide>
                    <SwiperSlide><div className="picture4" style={{backgroundImage: "url(" + picture4 +")"}}></div></SwiperSlide>
                    <SwiperSlide><div className="picture5" style={{backgroundImage: "url(" + picture5 +")"}}></div></SwiperSlide>
                    <SwiperSlide><div className="picture6" style={{backgroundImage: "url(" + picture6 +")"}}></div></SwiperSlide>
                    <SwiperSlide><div className="picture7" style={{backgroundImage: "url(" + picture7 +")"}}></div></SwiperSlide>
                    <SwiperSlide><div className="picture8" style={{backgroundImage: "url(" + picture8 +")"}}></div></SwiperSlide>
      ...
    </Swiper>
            </div>

            <div className="text">
                <svg viewBox="0 0 200 46">
                    <Link to='/cards'>
                        <text x="147" y="30" fontSize="3px" fill="white" fontFamily="Poppins, sans-serif">
                            Show me more about Armenia!</text>
                    </Link>
                </svg>
            </div>

        </div>
    );
}

export default NewsFeed;