import React from "react";
import "./Adminpro.css";
import { Link} from 'react-router-dom';
import Slidbar from "./Slidbar";
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
export default function Adminpro() {

    const[menutypet,setMenutypet]=useState([])
    const[menuitem,setMenuitemt]=useState([])
    const[drink,setDrink]=useState([])
    const[bf,setBf]=useState([])
    const[lunch,setLunch]=useState([])
    const[dinner,setDinner]=useState([])
    const[sweet,setSweet]=useState([])
    
    useEffect(()=>{
        api();
    },[]);

    function api(){
        Promise.all([
            axios.get('http://localhost:3000/tmenutype'),
            axios.get('http://localhost:3000/tmenuitem'),
            axios.get('http://localhost:3000/tdrink'),
            axios.get('http://localhost:3000/tbf'),
            axios.get('http://localhost:3000/tlunch'),
            axios.get('http://localhost:3000/tdinner'),
            axios.get('http://localhost:3000/tsweets')

        ])
        .then(([menutyper, menuitemr, drinksr,bfr,lunchr,dinnerr,sweetsr]) => {
            //console.log(response.data);
            setMenutypet(menutyper.data);
            setMenuitemt(menuitemr.data);
            setDrink(drinksr.data);
            setBf(bfr.data);
            setLunch(lunchr.data);
            setDinner(dinnerr.data);
            setSweet(sweetsr.data);
        })
        .catch(err=> console.error(err));
    }


  return (
    <>
      <div className="admin-container">
        <Slidbar> </Slidbar>

        {/* Main Content */}
        <main className="main-content">

          {/* Header */}
          <header className="header">
            <div>
              <h1>Dashboard</h1>
              <p>Welcome to your admin dashboard</p>
            </div>
            <div className="admin-profile">
              <div className="admin-info">
                <p className="admin-name">Abhishek Sharma</p>
                <p className="admin-role">Admin</p>
              </div>
            </div>
          </header>

          {/* Dashboard Cards */}
          <section id="dashboard" className="cards-grid">
            <div className="card">
              <div className="card-icon">📋</div>
              <h3>Menu Categories</h3>
              <p>Total Categories: {menutypet[0]?.count}</p>

            </div>
            <div className="card">
              <div className="card-icon">📋</div>
              <h3>Menu Items</h3>
              <p>Total Items: {menuitem[0]?.count}</p>
            </div>
            <div className="card">
              <div className="card-icon">📋</div>
              <h3>Drinks</h3>
              <p>Total Drinks: {drink[0]?.count}</p>
            </div>
          </section>

          {/* Menu Types Section */}
          <section id="menuTypes" className="cards-grid">
            <div className="card">
              <div className="card-icon">📋</div>
              <h3>Breakfast</h3>
              <p>Total Items: {bf[0]?.count}</p>
            </div>
            <div className="card">
              <div className="card-icon">📋</div>
              <h3>Lunch</h3>
              <p>Total Items: {lunch[0]?.count}</p>
            </div>
            <div className="card">
              <div className="card-icon">📋</div>
              <h3>Dinner</h3>
              <p>Total Items: {dinner[0]?.count}</p>
            </div>
            <div className="card">
              <div className="card-icon">📋</div>
              <h3>Sweets</h3>
              <p>Total Items: {sweet[0]?.count}</p>
            </div>
          </section>

          <footer className="footer">
            <p>© 2025 Gokuldham Restaurant - Inspired by Taarak Mehta Ka Ooltah Chashmah</p>
          </footer>

        </main>
      </div>
    </>
  );
}
