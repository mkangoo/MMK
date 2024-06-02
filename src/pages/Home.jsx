import Cart from '../components/Cart'
import Footer from '../components/Footer'
import table from '../assets/img/table.png'
import tableTwo from '../assets/img/tableTwo.png'
import tableThree from '../assets/img/tableThree.png'
import Navigation from '../components/Navigation'

const cartInfo = [
    {
        title: 'ММК — ОДИН ИЗ КРУПНЕЙШИХ В МИРЕ ПРОИЗВОДИТЕЛЕЙ СТАЛИ',
        description:
            'ПАО «Магнитогорский металлургический комбинат» входит в число крупнейших мировых производителей стали и занимает лидирующие позиции среди предприятий черной металлургии России.',
        img: table,
        btnText: 'о компании',
        link: '/company',
    },

    {
        title: ' ММК ПРОИЗВОДИТ ШИРОКИЙ СОРТАМЕНТ МЕТАЛЛОПРОДУКЦИИ С ФОКУСОМ НА ПРЕМИУМ КЛАСС',
        description:
            ' Группа ПАО «ММК» — производитель полного металлургического цикла,начиная с подготовки железорудного сырья и заканчивая глубокой переработкой черных металлов.',
        img: tableTwo,
        btnText: 'продукция',
        link: '/products',
    },
    {
        title: 'ПАО «МАГНИТОГОРСКИЙ МЕТАЛЛУРГИЧЕСКИЙ КОМБИНАТ»',
        description:
            'Входит в число крупнейших мировых производителей стали и занимает лидирующие позиции среди предприятий черной металлургии России.Активы компании в России представляют собой крупный металлургический комплекс с полным производственным циклом, начиная с подготовки железорудного сырья и заканчивая глубокой переработкой черных металлов.ММК производит широкий сортамент металлопродукции с преобладающей долей продукции премиум класса.',
        img: tableThree,
    },
]
function Home() {
    return (
        <>
            <Navigation />
            {cartInfo.map((obj, index) => (
                <Cart key={index} title={obj.title} description={obj.description} img={obj.img} btnText={obj.btnText} link={obj.link} />
            ))}
            <Footer />
        </>
    )
}
export default Home
