import React from 'react';
import UserCart from '../../Hooks/UserCart';
import Card from '../Card/Card';
import Revew from '../Revew/Revew';
import UseProduct from './../../Hooks/UseProduct';

const Orders = () => {
    const [products,setProducts]=UseProduct()
    const [cart,setCart]=UserCart(products)
    return (
        <div>
             <div className='prodect-container'>
            <div className='card-container'>
                {
                    cart.map(product=><Revew key={product.key} product={product}></Revew>)
                }
            
            </div>
            <div className='card-details'>
               
                <Card card={cart}></Card>
            

            </div>

            
        </div>
        </div>
    );
};

export default Orders;