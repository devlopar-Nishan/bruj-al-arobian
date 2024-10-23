import React, { useContext, useState } from 'react';
import './Shop.css';
import { dataContex } from '../../App';
import { Link } from 'react-router-dom';

const Shop = ( props ) => {
   
     
     const increas=document.querySelectorAll('.increas');
     
   const item=props.data.products[1];
    
    return (
         


        <div>
            <div className="container">
                <div className="card-body">
                    <div className="card-img">
                        <img src={item.thumbnail} alt="" />
                    </div>
                     
                    <div className="card-taitel">
                    <div className='card-detal'>
                            <h5>{item.title} </h5>
                            <p>Stock:{item.quantity} </p>
                            <small>price:{item.price}</small>
                    </div>
                          
                         {/* <div className="quantity">
                            <div   >-</div>
                            <div>   0</div>
                            <div className='increas'  >+</div>
                             
                         </div> */}
                         <div>
                        
                        <button >vew more</button>
                             
                         </div>

                    </div>
                    <button onClick={()=>props.handleitem(item.id)}  className='btn'>Add to Cart</button>
                </div>
            </div>


             

            
        </div>
    );
};

export default Shop;