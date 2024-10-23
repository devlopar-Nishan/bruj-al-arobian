import React, { useContext, useState } from 'react';
import { dataContex } from '../../App';
import Footer from '../Footer/Footer';
import Shop from '../shop/Shop';
import'./Home.css';

const Home = () => {
    const [data,satdata]=useContext(dataContex);
   


    const[finds ,satfind]=useState({});
     
     
 
    
     
     
    return (
        <div className='main-out'> 
        <div className='main-div'>
             {/* {
                newdata.map(item=><Shop product={item}></Shop>)
             } */}

         
        </div>
                <div className="cart">
                        <p>Item sumary:</p>
                        <p>price:</p>
                        <p>Total:</p>
                    </div>
        </div>
    );
};

export default Home;