import {BasketItem} from './BasketItem'

function BasketList(props) {
    const {order = [], handleBasketShow, removeFromBasket, increaseQuantity, decreaseQuantity} = props;
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price.finalPrice * el.quantity
    }, 0)
    return <ul className="collection basket-list">
        <li className="collection-item active brown lighten-4">
            Shopping Cart
        </li>
        {
            order.length ? order.map(item => (
                <BasketItem key={item.offerId}
                            {...item}
                            removeFromBasket={removeFromBasket}
                            increaseQuantity={increaseQuantity}
                            decreaseQuantity={decreaseQuantity}
                />
            )) : <li className="collection-item"> Shopping cart is empty</li>
        }
        <li className="collection-item active brown lighten-4">
            Total amount: {totalPrice}$
        </li>
        <li className="collection-item">
            <button className="btn btn-small btn-rounded brown">Order</button>
        </li>
        <i className='material-icons basket-close'
           onClick={handleBasketShow}>
            close
        </i>
    </ul>
}

export {BasketList}

