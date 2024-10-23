import React, { useContext, useEffect, useState } from 'react';
import { dataContex } from '../../App';
import Shop from '../shop/Shop';
 import '../shop/Shop.css';
import Cart from '../carts/Cart';
import fakdata from '../fakdATA/fakdata.json'
 
const Newshop = () => {
  
    
   const  [data,satdata]=useContext(dataContex);
   const slicdata=data.slice(0,15);
   const [count,satcount]=useState([]);
   
    const[itms,satitms]=useState()
   //  const[itmid,satitmid]=useState([]);
     
    const handleitem=(getitm)=>{
      const finddata=data.find(eachItm=>eachItm.products[1].id===getitm);
        satitms(getitm);
        const newcount=[...count,finddata.products[1]];
        satcount(newcount); 
        
         
      
        
    }
      
    useEffect(()=>{
      const storepd= localStorage.setItem('selectpd',JSON.stringify(count));
    },[count])
    
      
 
     
    
    return (
         <div className="maindiv">
            <div className='item'>
               {
                  slicdata.map(res=><Shop    handleitem={handleitem} data={res}></Shop>)
               }
             
        </div> 
        <div className="cart">
            <Cart getitm={itms} datacount={count}   ></Cart>
        </div>
         </div>
    );
    
};
 
export default Newshop;
 