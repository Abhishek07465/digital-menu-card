import Navv from "./Navv"
import './Menuu.css';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import soundFile from "./assets/khana.mp3";  // अपनी mp3 file ka path


export default function Menuu(){

  
    useEffect(() => {
      const audio = new Audio(soundFile);
      audio.play();
    }, []);
  
      const location = useLocation();
  const currentPath = location.pathname;
  useEffect(()=>{
           axios.get("http://localhost:3000/type")
           .then(response=>{
             console.log(response.data)
             //setBk(response.data);
           })
           .catch(err=> console.error(err));
  },[])


    return(
        <>
        <Navv>    
        </Navv>
        <br/>

        
      <div className="menu-subnav">
        <ul>
          <li><Link to="/menu/breakfast" className={currentPath === '/menu/breakfast' ? 'active' : ''}>Breakfast</Link></li>
          <li><Link to="/menu/lunch" className={currentPath === '/menu/lunch' ? 'active' : ''}>Lunch</Link></li>
          <li><Link to="/menu/dinner" className={currentPath === '/menu/dinner' ? 'active' : ''}>Dinner</Link></li>
          <li><Link to="/menu/sweets" className={currentPath === '/menu/sweets' ? 'active' : ''}>Sweets</Link></li>
          <li><Link to="/menu/drinks" className={currentPath === '/menu/drinks' ? 'active' : ''}>Drinks</Link></li>
        </ul>
      </div>

        </>
    )
}