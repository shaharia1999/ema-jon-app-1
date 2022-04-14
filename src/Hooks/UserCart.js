import { useEffect, useState } from "react";
import { getShopingCard } from "../compunant/LocalStorage/LocalStorage";
// import Product from './../compunant/Product/Product';


const UserCart = (products) => {
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        const storedCart=getShopingCard();
        const saveCart=[]
        for(const id in storedCart){
            const addedProduct=products.find(product=>product.id===id)
            if(addedProduct){
                const quantity=storedCart[id];
                addedProduct.quantity=quantity;
                saveCart.push(addedProduct)
            }

        }
        setCart(saveCart);
    },[products])



    return[cart,setCart]
};

export default UserCart;