import { useState, useEffect } from "react";
import { API_KEY, API_URL } from '../config';

import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';
import {BasketList} from './BasketList'
import {Alert} from './Alert'

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketOpen, setBasketOpen] = useState(false)
    const [alertName, setAlertName] = useState('')

    const increaseQuantity = (itemId) => {
        const newOrder = order.map(el => {
            if (el.offerId === itemId) {
                const newQuantity = el.quantity + 1
                return {
                    ...el,
                    quantity: newQuantity
                }
            } else {
                return el
            }
        })
        setOrder(newOrder)
    }
    const decreaseQuantity = (itemId) => {
        const newOrder = order.map(el => {
            if (el.offerId === itemId) {
                const newQuantity = el.quantity - 1
                return {
                    ...el,
                    quantity: newQuantity >= 0 ? newQuantity : 0
                }
            } else {
                return el
            }
        })
        setOrder(newOrder)

    }

    const handleBasketShow = () => {
        setBasketOpen(!isBasketOpen);
    }

    const removeFromBasket = (itemId) => {
        const newOrder = order.filter(el => el.offerId !== itemId)
        setOrder(newOrder);
    }

    const addToBasket = item => {
        const itemIndex = order.findIndex(orderItem => orderItem.offerId === item.offerId);

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });

            setOrder(newOrder);
        }
        setAlertName(item.displayName);
    };

    const closeAlert = () => {
        setAlertName('')
    }

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then(response => response.json())
            .then(data => {
                if (data && data.shop) {
                    setGoods(data.shop);
                    console.log(data.shop);
                } else {
                    console.warn("No shop goods found in the response");
                    console.log('API Key:', process.env.REACT_APP_API_KEY);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
                setLoading(false);
            });
    }, []);

    return (
        <main className='container content'>
            <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
            {loading ? (
                <Preloader />
            ) : (
                <GoodsList goods={goods} addToBasket={addToBasket} />
            )}
            {
                isBasketOpen && (<BasketList
                    order={order}
                    handleBasketShow={handleBasketShow}
                    removeFromBasket={removeFromBasket}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                />
                )}
            {
                alertName && <Alert name={alertName} closeAlert={closeAlert} />
            }
        </main>
    );
}

export { Shop };
