import logo from './logo.svg';
import './App.css';
import React, { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Header from './Componants/Header/Header';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './Componants/home/Home';
import Allpage from './Componants/Allpage/Allpage';
import Shop from './Componants/shop/Shop';
import Login from './Componants/Login/Login';
 import fakdata from'../src/Componants/fakdATA/fakdata.json'
import Protected from './Componants/Login/Protected';
import Newshop from './Componants/Newshop/Newshop';
import Moreitms from './Componants/moritms/Moreitms';
import Sipmant from './Componants/sipmant/Sipmant';
import { fetchSignInMethodsForEmail } from 'firebase/auth';
 
 
export const dataContex=createContext();
 

function App() {
   
   
   
 const  [data,satdata]=useState([]);
useEffect(()=>{
    fetch('https://dummyjson.com/carts')

    .then(respons=>respons.json())
    .then(data=>satdata(data.carts))
  

   
},[]);
 
  

const router=createBrowserRouter([
  {
    path: "/",
    element: <Allpage/>,
    children: [
      {
        path: "home",
        element: <Home/>,
      },
      {
        path: "/newshop",
        element: <Newshop/>,
        
      },
      {
        path:'/sipmant',
        element: <Sipmant/>,
      },
      {
        path: "moritm",
        element: <Moreitms/>,
      },
      // {
      //   path:'/shop',
      //   element:<Shop></Shop>,
      // },
      {
        path:'/login',
        element:<Login></Login>,
      },

      // {
      //   element:<Protected/>,
      //   children:[
      //   {
      //     path:'/sipmant',
      //     element: <Sipmant/>,
      //   }
      //   ]
      // }
        
        
      
    ],
  },
]);
  return <dataContex.Provider value={[data,satdata]}>
               <RouterProvider router={router} />
         </dataContex.Provider>
}
export default App;
 
 
       
   
       
 



        

      

      