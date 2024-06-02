import { Link } from 'react-router-dom'

function Cart({ title, description, img, btnText, link }) {
    return (
        <div className="cart">
            <div className="cart-info">
                <div className="cart__title">
                    <p>{title}</p>
                </div>

                <div className="cart__description">{description}</div>

                {btnText && (
                    <Link to={link}>
                        <div className="btn-block">{btnText}</div>
                    </Link>
                )}
            </div>
            <img src={img} width={250} alt="Table" />
        </div>
    )
}

export default Cart
