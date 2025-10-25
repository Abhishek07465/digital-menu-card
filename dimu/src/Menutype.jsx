import React from "react";
import './Menutype.css';
import Slidbar from "./Slidbar";
import { useState } from "react";
import { useEffect } from 'react';
import axios from "axios";

export default function Menutype() {
     const[menutype,setMenutype]=useState([])

     useEffect(()=>{
        api();
     },[])

     function api(){
        axios.get('http://localhost:3000/type')
        .then(response=>{
            setMenutype(response.data);
        })
        .catch(err=>console.error(err));
     }

     function add(){
        const mtype=prompt("Please enter a new Type of menu");
        if(mtype){
            if (!/^[A-Za-z\s]+$/.test(mtype)) {
                 alert("Please enter valid text values for dish type");
                 return;
                 }
            axios.post('http://localhost:3000/datain',{"menutype":mtype})
            .then(response=>{
            console.log(response.data);
            alert("Done");
            api(); // refresh table
    })
    .catch(err => console.error(err));
     } else {
    alert("Please enter valid details");
     }
}

    function up(midd,mtype){
        const confirmup = window.confirm("Current details :-\n Id "+midd +"\n Menu Type "+mtype,"\n");
        const upp=prompt("Enter the new name of type of dish ")

        if ( confirmup){

            if(!/^[A-Za-z\s]+$/.test(upp)){
                alert("Please enter valid text values for dish type");
                 return;
            }
            else{
             axios.put('http://localhost:3000/dataup', { mtid: midd ,menutype:upp})
            .then(response=>{
            console.log(response.data);
            alert("Data updated");
            api();
        })
        .catch(err=>console.error(err));
       }
    }

    }

     function del(midd){
       const confirmDelete = window.confirm("Are you sure to delete this data?" +midd);
       alert("If your Menu Type not delete , its mean that any dish is saved in this type")
       if(confirmDelete){
        axios.delete('http://localhost:3000/datadel',{ data: { mtid: midd } } 
)
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
        <h1>Menu Type </h1>
        <p>All type of Menu in this List.</p>
      

      <div className="table-container">
      <h2>Menu Type Management</h2>
      <table className="menu-type-table">
        <thead>
          <tr>
            <th>MTID</th>
            <th>Menu Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
             {menutype.map((item) => (
            <tr key={item.id}>
              <td>{item.mtid}</td>
              <td>{item.menutype}</td>
              <td>
                <button onClick={add} className="btn add">Add</button>
                <button onClick={()=>up(item.mtid,item.menutype)}className="btn update">Update</button>
                <button onClick={() => del(item.mtid)} className="btn remove">Remove</button>
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
