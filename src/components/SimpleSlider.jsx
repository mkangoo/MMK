import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function SimpleSlider({ items }) {
    const CustomNextArrow = props => {
        const { className, onClick } = props
        return (
            <div className={className} onClick={onClick}>
                <i className="fas fa-arrow-right" />
            </div>
        )
    }

    const CustomPrevArrow = props => {
        const { className, onClick } = props
        return (
            <div className={className} onClick={onClick}>
                <i className="fas fa-arrow-left" />
            </div>
        )
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        customPaging: i => (
            <div className="custom-dot">
                <span>{i + 1}</span>
            </div>
        ),
    }
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {items.map((obj, index) => (
                    <div className="slider__content" key={index}>
                        <h3>{obj.title}</h3>
                        <img src={obj.img} alt="Slide" />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default SimpleSlider
