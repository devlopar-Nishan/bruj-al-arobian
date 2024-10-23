import React, { useContext } from 'react';
import { dataContex } from '../../App';
import { Outlet } from 'react-router-dom';
import Login from './Login';

const Protected = () => {
    const[datas,satDatas]=useContext(dataContex);


    if(datas.email){
        return <Outlet/>

    }
    else{
        return<Login></Login>
    }

     
};

export default Protected;