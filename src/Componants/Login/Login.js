import React, { useContext, useState } from 'react';
import'./Login.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,  getRedirectResult, signInWithPopup,sendPasswordResetEmail, sendEmailVerification, GoogleAuthProvider, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { dataContex } from '../../App';











const Login = () => {
    const[datas,satDatas]=useContext(dataContex)
     const [newone,satnewone]=useState(false)
    const [user,satUser]=useState({
        email:'',
        Name:'',
        uid:'',
        password:'',
        error:'',
        success:'',
        fail:''
    })
    const firebaseConfig = {
        apiKey: "AIzaSyBN2kHB2XNm3a6B8Ls4AR44ViDfC_DW9-c",
        authDomain: "bruj-al-arob-13867.firebaseapp.com",
        projectId: "bruj-al-arob-13867",
        storageBucket: "bruj-al-arob-13867.appspot.com",
        messagingSenderId: "302030957100",
        appId: "1:302030957100:web:7240fe11d7c0e8528dff89",
        measurementId: "G-TQSDDRE1S1"
      };
      const app = initializeApp(firebaseConfig);
       const analytics = getAnalytics(app);
       const provider = new GoogleAuthProvider();



    const signinmathod=()=>{
                        const auth = getAuth();
                signInWithPopup(auth, provider)
                .then((result) => {
                    
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                     
                    const {displayName,email,uid} = result.user;
                      const printUser={
                         email:email,
                         Name:displayName,
                         uid:uid
                     }

                    satUser(printUser);
                    satDatas(printUser);
                   
                }).catch((error) => {
                   
                    const errorCode = error.code;
                    const errorMessage = error.message;
                     
                    // const email = error.customData.email;
                    // // The AuthCredential type that was used.
                    const credential = GoogleAuthProvider.credentialFromError(error);
                    
                });


    }

const handleForm=(e)=>{
       let formValid=false;
    if(e.target.name==='email'){
        formValid=/^\S+@\S+\.\S+$/.test(e.target.value)
        
         
         

    }
    if(e.target.name==='password'){
        const lengthpassword=e.target.value.length>5;
        const validPassword= /^\d+$/.test(e.target.value);
         formValid=lengthpassword&&validPassword;
         user.password=e.target.value;
         
         
    }
    if(formValid){
      const newusr={...user};
      newusr[e.target.name]=e.target.value;
      satUser(newusr);
       
    }
     
    
}

 
const handleSubmit=(e)=>{
  
     
 if(newone&&user.email&&user.password){
    const auth = getAuth();
createUserWithEmailAndPassword(auth, user.email, user.password)
  .then((res) => {
  
    const userinfo = res.user;
    const newuser={...user};
    newuser.success='user created successfully';
    satUser(newuser);
    
    satDatas(userinfo)
    satDatas(newuser);
    sentEmail()
    
     
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
      const newusr={...user}
      newusr.error=errorMessage;
      console.log(error.message)
      satUser(newusr);
    
  });
  
 }

if(!newone&&user.email&&user.password){
    
const auth = getAuth();
signInWithEmailAndPassword(auth, user.email, user.password)
  .then((resp) => {
     
    const userinfo2 =resp.user;
    satDatas(userinfo2)
    const newuser={...user};
    newuser.success='user login successfully';
    satUser(newuser);
    satDatas(newuser);
    

    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage ='password does not matchs';
    const newusr={...user}
      newusr.error=errorMessage;
      
      satUser(newusr);
     
  });
}
e.preventDefault();

   
}


const sentEmail=()=>{
  const auth = getAuth();
  sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    // ...
  });
}
const resatPassword=(email)=>{

  const auth = getAuth();
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });


}

const changbox=()=>{
    satnewone(!newone);
}

   

    return (
        <div>












            <div className="googlLogin">
            <button onClick={()=>resatPassword(user.email)}>forgat password </button><br />
            <button  className='loginbtn' onClick={signinmathod}>google sign up </button>
            <h4>Are you new? <a onClick={changbox}>create account</a></h4><br /><br />
            <br />
       
            </div>

 
            
            <div className="main">

              {

               newone? <form onSubmit={handleSubmit}>
               
               {
                  newone&& <input type="text" name="name" id="" placeholder='enter your name'/>
               }<br/>
              <label htmlFor="email">Enter your Email</label><br />

              <input  onBlur={handleForm} type="email" name="email" id="" /><br />
              <label htmlFor="password">Enter your password</label><br />

              <input  onBlur={handleForm} type="password" name="password" id="" /><br/>
               <button className='loginbtn2' type='submit'>{newone?'Sign in':'Login'}</button>
                
                   <p>{
                     newone?user.success :user.success 
                    }</p>
                
             {/* <input  className='check' onChange={changbox} type="checkbox" name="" id="" /> <p >aer you new ?</p>
              <p>{user.error}</p> */}
          </form> : <form onSubmit={handleSubmit}>
               
               {/* {
                  newone&& <input type="text" name="name" id="" placeholder='enter your name'/>
               }<br/> */}
              <label htmlFor="email">Enter your Email</label><br />

              <input  onBlur={handleForm} type="email" name="email" id="" /><br />
              <label htmlFor="password">Enter your password</label><br />

              <input  onBlur={handleForm} type="password" name="password" id="" /><br/>
               <button className='loginbtn2' type='submit'>{newone?'Sign in':'Login'}</button>
                
                   <p>{
                     newone?user.success :user.success 
                    }</p>
                
             {/* <input  className='check' onChange={changbox} type="checkbox" name="" id="" /> <p >aer you new ?</p>
              <p>{user.error}</p> */}
          </form> 



              }
              
          






            
             
             
            </div>
        </div>
    );
};

export default Login;