import Navv from './Navv';
import './Breakfast.css';
import Menuu from './Menuu';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function Breakfast() {

  const [bf, setBk] = useState([]);

  useEffect(()=>{
    api();
  },[]);

  function hff(){
    alert("The waiter is on way, you can select another dish menawhile")
  }


  function api(){
        axios.get("http://localhost:3000/bf")
        .then(response=>{
          console.log(response.data)
          setBk(response.data);
        })
        .catch(err=> console.error(err));
      }

          if (bf.length === 0) {
        return <p style={{ textAlign: 'center', marginTop: '50px' }}>Loading breakfast items...</p>;
    }

  return (
    <>
      <Menuu> </Menuu>

      <h1 style={{ textAlign: 'center', margin: '20px 0', color: 'red', fontFamily: 'cursive' }}>
        Breakfast Menu
      </h1>

      <div className="menu-list">

       { bf.map(items =>(

        
        <div className="menu-item" key={items.id} >
            {/*<img src="https://via.placeholder.com/200x150.png?text=Omelette" alt="Omelette" />*/}
          
          <div className="menu-details">
            <h3>{items.dishname}</h3>
            <p>{items.description}</p>
            <p>Half Price: ₹{items.price_half} &nbsp; &nbsp; <button onClick={hff}> Buy Half</button> </p>
            <p>Full Price: ₹{items.price_full} &nbsp; &nbsp;  <button onClick={hff}>Buy Full</button> </p>
           
          </div>
          
        </div>
        ))}

      </div>
    </>
  );
}
