import React from 'react';
import  './Cart.css'
import { useSelector } from 'react-redux';
import {
    selectGoods
} from '../store/goodsSlice';

import {
    selectCart
} from '../store/cartSlice';


export default function Cart() {
    const goods = useSelector(selectGoods);

    const cart = useSelector(selectCart);
    const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;
    }, {});
  return (
    <div className='app-container'>Cart
        <table>
            <thead>
                <tr key="">
                    <th>Name</th>
                    <th>Price for item</th>
                    <th>Quantity</th>
                    <th>Total price</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(cart).map(item =>
                <tr key="">
                    <td>{goodsObj[item]['title']}</td>
                    <td>{goodsObj[item]['cost']}</td>
                    <td>{cart[item]}</td>
                    <td>210</td>
                </tr> )}
                
                 {/* <li key={item + goodsObj[item]['title']}>{goodsObj[item]['title']} - {cart[item]}</li> */}

                
            </tbody>
        </table>

    </div>
  )
}
