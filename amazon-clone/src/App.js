
import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { onAuthStateChanged } from 'firebase/auth';
import Payment from './Payment';


function App() {

  const[{},dispatch]=useStateValue();

  useEffect(()=>{
     onAuthStateChanged(auth,(authUser)=>{
      console.log("The user is ",authUser);
      if(authUser){
          dispatch({
            type:'SET_USER',
            user:authUser
          })
      }
      else{
          dispatch({
            type:'SET_USER',
            user:null
          })
      }
     })
  },[])

  return (
    <Router>
      <div className="app">
        <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/checkout" element={[<Header/>,<Checkout/>]}/>
        <Route path="/" element={[<Header/>,<Home/>]}/>
        <Route path="/payment" element={[<Header/>,<Payment/>]}/>

        </Routes>
        
            
      </div>
    </Router>

  );
}

export default App;
