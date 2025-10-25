import Navv from './Navv';
import './Breakfast.css';
import Menuu from './Menuu';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function Dinner() {

  const[dinner,setDinner]=useState([])

  useEffect(()=>{
    api();
  },[])

   function hff(){
    alert("The waiter is on way, you can select another dish menawhile")
  }

  
    function api(){
          axios.get("http://localhost:3000/dinner")
          .then(response=>{
          //console.log(console.log(response.data[0].dishname, response.data[0].price_half))
          console.log(response.data)
          setDinner(response.data);        
          })
          .catch(err=>console.error(err))
           if (dinner.length === 0) {
        return <p style={{ textAlign: 'center', marginTop: '50px' }}>Loading breakfast items...</p>;
    }
      }

  return (
    <>
      <Menuu> </Menuu>

      <h1 style={{ textAlign: 'center', margin: '20px 0', color: 'red', fontFamily: 'cursive' }}>
         Dinner Mneu
      </h1>

      <div className="menu-list">
        {dinner.map(items=>(

        <div className="menu-item" key={items.id}>
                  
          <div className="menu-details">
            <h3>{items.dishname}</h3>
            <p>{items.description}</p>
            <p>Half Price: ₹{items.price_half} &nbsp; &nbsp; <button onClick={hff}>Buy Half</button> </p>
            <p>Full Price: ₹{items.price_full} &nbsp; &nbsp;  <button onClick={hff}> Buy Full</button> </p>
           
          </div>
          
        </div>

))}

      </div>
    </>
  );
}
