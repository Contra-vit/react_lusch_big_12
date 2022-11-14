import React from 'react';
import { useSelector } from 'react-redux';
import {
    selectGoods
} from '../store/goodsSlice';

import {
    selectCart
} from '../store/cartSlice';
import './Cart.css'
import {  useDispatch } from 'react-redux';
import { increment } from '../store/cartSlice';


export default function Cart() {
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();


 const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;
    }, {});
    let changeUp = (event) => {
        event.preventDefault();
        let t = event.target;
        if (!t.classList.contains('add-to-cart')) return true;
        dispatch(increment(t.getAttribute('data-key')));
    }



  return (
    <div className='app-container'>
        Cart:
         <table>
            <thead>
                <tr key="">
                    <th>Name</th>
                    <th>Price for item</th>
                    <th>Quantity</th>
                    <th>Total price</th>
                    <th>Сhange</th>

                </tr>
            </thead>
            <tbody>
                {Object.keys(cart).map(item =>
                <tr key={item + goodsObj[item]['title']}>
                    <td> <img className='cartImg' src={goodsObj[item]['image']} alt="" />  {goodsObj[item]['title']}</td>
                    <td>{goodsObj[item]['cost']}</td>
                    <td>{cart[item]}</td>
                    <td>{goodsObj[item]['cost'] * cart[item]}</td>
                    <td><button onClick={changeUp}>up</button><button>down</button></td>

                </tr> )}
            </tbody>
        </table>
    </div>
  )
}
