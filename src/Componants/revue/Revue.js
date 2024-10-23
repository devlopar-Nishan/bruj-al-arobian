import React, { useEffect, useState } from 'react';
import './revue.css';

const Revue = (props) => {
    const itm=props.revuepd;
    // const [Countss,satcount]=useState(1);
    //  const [quanti,satquanti]=useState(1);
    //  const handlequantity=( quant)=>{
    //     let newcount=Countss+1;
    //     satcount(newcount)
        
    // useEffect(()=>{
    //     const storid=localStorage.getItem('quantituy');
    //     satquanti(JSON.parse(storid));
    // },[])
  
        
//    if(itm.id===props.unicid){
//     itm.quantity=quanti;
    
//    }else{
//     console.log('NO')
//    }
    



    return (
        <div className='min'>
             <div className="revuecart">
                 <div className="revueimg">
                 <img src={itm.thumbnail} alt="" />
                 </div>
                <div>
                    <h5>{itm.title}</h5>
                    <p>{itm.price}$</p>
                    <div>
                     <p>{itm.quantity}</p>
                      <button onClick={()=>props.handlequantity(itm.id)}>++</button>
                    </div>
                     <button>delete</button>
                </div>
             </div>
             
        </div>
    );
     
};

export default Revue;