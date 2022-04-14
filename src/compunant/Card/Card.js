import React from 'react';

const Card = (props) => {
    const card=props.card;
    let price=0;
    let sheppinng=0;
    let quantity=0;
    let text=0;
    for(const product of card){
        quantity=quantity +product.quantity;
        price=price+product.price;
        sheppinng=sheppinng+product.shipping;
        text=text+product.tax;

    }

    return (
        <div>
                <h2>Product Deteles</h2>
                <p>Selected Items :{card.length}</p>
                <p> Price :{price}</p>
                <p>sheping :{sheppinng}</p>
                <p>text :</p>
                <p>Total :</p>
            
        </div>
    );
};

export default Card;