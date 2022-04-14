import React from 'react';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {name,price,img,seller,ratings,addevent}=props.product;
    const {addEventHender}=props;

  
    return (
        <div className="product">
            <img src={img} alt="product" />
            <h3>{name}</h3>
            <p>Price :{price}</p>
              <div className='p-info'>
              <p>Manufacture :{seller}</p>
              <p>Reation :{ratings}</p>
               <button  onClick={()=>addEventHender(props.product)} className='card-footer' > Add to Card <FontAwesomeIcon icon={faShoppingCart }></FontAwesomeIcon></button>
             </div>
        </div>
    );
};

export default Product;