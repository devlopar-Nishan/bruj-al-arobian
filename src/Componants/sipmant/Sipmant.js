import React, { useContext,useEffect,useState } from 'react';
 import fakdata from'../fakdATA/fakdata.json'
import { dataContex } from '../../App';
import Revue from '../revue/Revue';
import Cart from '../carts/Cart';
import '../revue/revue.css';
 

const Sipmant = (props) => {

      const  [data,satdata]=useContext(dataContex);
      const [getpd,satgetpd]=useState([])
       
      
      useEffect(()=>{

        const getstorpd=localStorage.getItem('selectpd');
        if(getpd==[]){
        satgetpd([])

        }else{
            satgetpd(JSON.parse(getstorpd));
        }
        console.log(getstorpd);
         

      },[])
   
     
      
      const getquantity=localStorage.getItem('quantity');
      const [Countss,satcount]=useState(1);
       const handlequantity=( quant)=>{
          let newcount=Countss+1;
          satcount(newcount)
        const quantitysat=  getpd.find(res=>res.id===quant);

           
          quantitysat.quantity=JSON.parse(getquantity);
      
          
           
       }
        


       console.log(Countss)

    //    const [unicid,satunicid]=useState(0)
    useEffect(()=>{
            const satitm=localStorage.setItem('quantity',JSON.stringify(Countss));
            // getpd.map(res=>satunicid(res.id))
        
          },[Countss]);
               
      
    

    

 
    return (
        <div className='maindiv'>
            <div className="div1">
            {
            getpd.map(res=><Revue handlequantity={handlequantity} unicid={res.id} revuepd={res}/>)
           }
            </div>
            <div className="div2">
                 this is cart
            </div>
          
           
          
        </div>
    );
};
 
export default Sipmant  ;
 