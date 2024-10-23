import React, { useContext, useState } from 'react';
import { dataContex } from '../../App';
import fakdata from '../fakdATA/fakdata.json';
import { confirmPasswordReset, linkWithCredential } from 'firebase/auth';
import { Link } from 'react-router-dom';
import Sipmant from '../sipmant/Sipmant';

const Cart = (props) => {
 
 
    // localStorage.setItem('getid',);
 const  [data,satdata]=useContext(dataContex);
 
 const finddata=data.find(eachItm=>eachItm.products[1].id===props.getitm);
   

     
  let mainprice;
 
 const [total,sattotal]=useState([]);   
 const totalprice=()=>{
    
     props.datacount.map(res=>sattotal([...total,res.price]))

      mainprice=total.reduce((prevu,carrent)=>{
        return prevu+carrent
    },0);
 }
  
     
    
 
        

       
       
     

    
    
   
    
    return (
        <div>
             <p>order summary:{props.datacount.length}</p>
             {
                props.datacount.map(res=><ul><li>{res.title.substring(0,6)+'...'}</li></ul>)
             }
                <p>total:{mainprice}</p>
                
             <button onClick={()=>totalprice()}>total price</button><br />
             <Link to='/sipmant' revupd={props.pd}>revue</Link>
        </div>
    );
};

export default Cart;