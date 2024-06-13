import {GoodsItem} from "./GoodsItem";
import {useContext} from "react";
import { ShopContext} from "../context";

function GoodsList() {
    const { goods = []} = useContext(ShopContext)

    const filteredGoods = goods.filter(item => item.displayAssets && item.displayAssets[0]?.url);
    const slicedGoods = filteredGoods.slice(45, 145);

    if(!slicedGoods.length) {
        return <h3> Nothing here! </h3>
    }
    return (<div className="goods">
        {slicedGoods.map(item => (
            <GoodsItem key={item.offerId}
                       {...item}
                       />
        ))}
    </div>
    );
}

export {GoodsList}