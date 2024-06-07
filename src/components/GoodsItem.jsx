function GoodsItem(props) {
    const {
        displayName,
        price,
        displayAssets,
        addToBasket=Function.prototype
    } = props;

    const image = displayAssets[0]?.url || 'placeholder-image-url';

    return  <div className="card">
        <div className="card-image">
            <img src={image} alt={displayName}/>
        </div>
        <div className="card-content">
            <span className="card-title">{displayName}</span>
        </div>
        <div className="card-action">
            <button className='btn btn-small brown darken-2 btn-rounded' onClick={() => addToBasket(props)}>Buy</button>
            <span className="right" style={{fontSize: '1.3rem'}}>
          {price.finalPrice} $
        </span>
        </div>
    </div>
}

export {GoodsItem}
