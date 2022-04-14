
const LocalStorage = (props) => {
    const {id}=(props)
   let storeCard={};
   const ShopingCard=localStorage.getItem('store-card');
   if(ShopingCard){
    storeCard=JSON.parse(ShopingCard)
}
    const quentity=storeCard[id]
    if(quentity){
        console.log("exiest")
        const newquentity=quentity+1;
       storeCard[id]=newquentity;

    }
    else{
        console.log("new")
        storeCard[id] = 1;

    }
   localStorage.setItem('store-card',JSON.stringify(storeCard));




};
const getShopingCard=()=>{
    let storeCard={};
    const ShopingCard=localStorage.getItem('store-card');
    if(ShopingCard){
     storeCard=JSON.parse(ShopingCard)
   }
   return storeCard;
}


export  {
        LocalStorage,
       getShopingCard};

