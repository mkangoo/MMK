import SimpleSlider from '../components/SimpleSlider'

import slide1 from '../assets/img/slide1.jpeg'
import slide2 from '../assets/img/slide2.jpg'
import slide3 from '../assets/img/slide3.jpg'
import slide4 from '../assets/img/slide4.webp'
import slide5 from '../assets/img/slide5.jpg'

function Products() {
    const productsItems = [
        { title: 'Автомобилестроение', img: slide1 },
        { title: 'Судостроение', img: slide2 },
        { title: 'Мостостроение', img: slide3 },
        { title: 'Товары народного потребления', img: slide4 },
        { title: 'Трубная промышленность', img: slide5 },
    ]

    return (
        <div className="container">
            <SimpleSlider items={productsItems} />
        </div>
    )
}
export default Products
