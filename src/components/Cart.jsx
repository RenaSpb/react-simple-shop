import { useContext } from 'react';
import {ShopContext} from '../context'
function Cart() {
    const { order, handleBasketShow} = useContext(ShopContext);
    const quantity = order.length;
    return (
        <div className='cart white' onClick={handleBasketShow}>
            <i className="material-icons">shopping_cart</i>
            {quantity ? <span className="cart-quantity">{quantity}</span> : null}
        </div>
    );
}

export { Cart }