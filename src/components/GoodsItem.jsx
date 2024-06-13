import { useContext } from "react";
import { ShopContext } from '../context'

function GoodsItem(props) {
    const {
        displayName,
        price,
        displayAssets,
    } = props;

    const {addToBasket} = useContext(ShopContext)
    const image = displayAssets[0]?.url || 'placeholder-image-url';

    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt={displayName} />
            </div>
            <div className="card-content">
                <span className="card-title">{displayName}</span>
            </div>
            <div className="card-action">
                <button className='btn btn-small green darken-3 btn-rounded' onClick={() => addToBasket(props)}>Buy</button>
                <span className="right" style={{ fontSize: '1.3rem' }}>
                    {price.finalPrice} $
                </span>
            </div>
        </div>
    );
}

export { GoodsItem };
