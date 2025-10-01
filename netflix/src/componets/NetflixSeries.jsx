import React from 'react'
import cartData from '../api/cartItem.json'
import Cart from './Cart'
import './Netflix.css'

export default function NetflixSeries() {
  return (
    <ul className='grid grid-three--cols'>
        {
        cartData.map((item,index) => <Cart key={index} data={item} /> )
        }
    </ul>
  )
}
