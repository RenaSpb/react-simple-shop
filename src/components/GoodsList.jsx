import {GoodsItem} from "./GoodsItem";
function GoodsList(props) {
    const { goods = [], addToBasket} = props

    const filteredGoods = goods.filter(item => item.displayAssets && item.displayAssets[0]?.url);
    const slicedGoods = filteredGoods.slice(38, 139);

    if(!slicedGoods.length) {
        return <h3> Nothing here! </h3>
    }
    return (<div className="goods">
        {slicedGoods.map(item => (
            <GoodsItem key={item.offerId}
                       {...item}
                       addToBasket={addToBasket}/>
        ))}
    </div>
    );
}

export {GoodsList}