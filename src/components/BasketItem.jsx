import {useContext} from 'react'
import {ShopContext} from '../context'


function BasketItem(props) {
    const { offerId, displayName, price, quantity } = props;

    const {removeFromBasket, increaseQuantity, decreaseQuantity} = useContext(ShopContext)

    return <li className="collection-item">
        {displayName} <i className='material-icons basket-quantity' onClick={() => decreaseQuantity(offerId)}>remove</i> х {quantity} <i
        className='material-icons basket-quantity' onClick={() => increaseQuantity(offerId)}>add</i> = {price.finalPrice * quantity}$
        <span
            className="secondary-content"
            onClick={() => removeFromBasket(offerId)}
        >
            <i className='material-icons basket-delete'>close</i>
        </span>
    </li>

}

export {BasketItem};