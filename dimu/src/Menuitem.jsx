import React from "react";
import './Menutype.css';
import Slidbar from "./Slidbar";
import { useState } from "react";
import { useEffect } from 'react';
import axios from "axios";

export default function Menuitem() {
     const[menuitem,setMenuitem]=useState([])

     useEffect(()=>{
        api();
     },[])

     function api(){
        axios.get('http://localhost:3000/data')
        .then(response=>{
            setMenuitem(response.data);
        })
        .catch(err=>console.error(err));
     }

        function add(){
        const mt=prompt("Type of menu");
        const dn=prompt("Name of the New Dish");
        const ph=prompt("Half price");
        const pf=prompt("Full price");
        const dc=prompt("Description");
        if(mt && dn && ph && pf && dc){
               // Dish name & description text only check
            if (!/^[A-Za-z\s]+$/.test(dn)) {
                 alert("Please enter valid text values for Dish Name");
                 return;
                 }

    // Numbers check
    if (isNaN(mt) || isNaN(ph) || isNaN(pf)) {
        alert("Please enter valid numeric values for Menu Type and Prices!");
        return;
    }

    alert("If your data isn't being added,it probably means the Menu type value you entered doesn't exist.");

            axios.post('http://localhost:3000/datainn',{
         "mtid":mt ,
         "dishname":dn,
         "price_half": ph,
         "price_full": pf,
         "description":dc
  
}
)
            .then(response=>{
            console.log(response.data);
            alert("All set! The data has been added.");
            api(); // refresh table
    })
    .catch(err => console.error(err));
     } else {
    alert("Please enter valid details");
     } 
}


 function up(did,mid,dn,ph,pf,des){
        const confirmup = window.confirm("Current details :-\n Dish Id "+did +"\n Menu Id "+mid,"\n" +"\n Dish Name "+dn,"\n" +"\n Half price "+ph,"\n" + "\n Full Price"+pf,"\n"+"\n Description "+des,"\n");
        const nmid=prompt("Updated Type")
        const ndn=prompt("Updated Name of dish")
        const nph=prompt("Updated Half price ")
        const npf=prompt("Updated Full Price dish")
        const ndes=prompt("New Description  for dish")
        if(confirmup){
            axios.put('http://localhost:3000/dataupp', {
  "dishid": did,
  "mtid": nmid,
  "dishname": ndn,
  "price_half": nph,
  "price_full": npf,
  "description": ndes
})
            .then(response=>{
            console.log(response.data);
            alert("Data updated");
            api();
        })
        .catch(err=>console.error(err));
       }

    }






     function del(dish){
        const cd=window.confirm(" Are you sure to delete this dish id "+dish);
        if(cd){
            axios.delete('http://localhost:3000/datadell',{data:{dishid:dish}})
            .then(response=>{
            console.log(response.data);
            alert("Data deleted");
            api();
            })
           .catch(err=>console.error(err)); 
        }
     }
  return (

    <div className="admin-container">
      <Slidbar />
      
      <main className="main-content">
        <h1>Menu Items List</h1>
        <p>All menu items and dishes are in the List.</p>
      

      <div className="table-container">
      <h2>Menu Items Management</h2>
      <table className="menu-type-table">
        <thead>
          <tr>
            <th>DISH ID</th>
            <th>MTID</th>
            <th>DISH NAME</th>
            <th>HALF PRICE</th>
            <th>FULL PRICE</th>
            <th>DESCRIPTION</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
             {menuitem.map((item) => (
            <tr key={item.id}>
              <td>{item.dishid}</td>
              <td>{item.mtid}</td>
              <td>{item.dishname}</td>
              <td>{item.price_half}</td>
              <td>{item.price_full}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={add} className="btn add">Add</button>
                <button onClick={()=>up(item.dishid,item.mtid,item.dishname,item.price_half,item.price_full,item.description)} className="btn update">Update</button>
                <button onClick={()=>del(item.dishid)} className="btn remove">Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </main>
    </div>
  );
}
