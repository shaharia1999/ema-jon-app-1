import React from 'react';
import './recve.css'

const Revew = (props) => {
    const {name,price,shipping,quantity,img}=props.product
    return (
        <div>
            <img src={img}></img>
            <h3>this is revew :{name}</h3>
            
        </div>
    );
};

export default Revew;