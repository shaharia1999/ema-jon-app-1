import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import {getShopingCard, LocalStorage} from '../LocalStorage/LocalStorage';
import Product from '../Product/Product';
import "./Shop.css";
import UseProduct from './../../Hooks/UseProduct';


const Shop = () => {
    const[products,setProducts]=UseProduct()
    // const [products,setProducts]=useState([])
    const [card,setCard]=useState([])
    
    // useEffect(()=>{
    //     fetch('products.json')
    //     .then(res=>res.json())
    //     .then(data=>setProducts(data))


    // },[]);
    useEffect(()=>{
      const storeCard=getShopingCard();
      const savecard=[]
      for (const id in storeCard) {
           const addadetprodecte=products.find(produce=>produce.id===id)
          if(addadetprodecte){
              const quentity=addadetprodecte[id]
              addadetprodecte.quentity=quentity;
              savecard.push(addadetprodecte)
             
          }
       
      }
      setCard(savecard);
    },[products])
    const addEventHender=(product)=>{
        
        LocalStorage(product)
       const newcard=[...card,product]
       setCard(newcard);
    }
    return (
        <div className='prodect-container'>
            <div className='card-container'>
               {
                   products.map(product=> <Product key={product.id} product={product} addEventHender={addEventHender}></Product>)
               }
            </div>
            <div className='card-details'>
               
                <Card card={card}></Card>
            

            </div>

            
        </div>
    );
};

export default Shop;