import Navv from "./Navv";
import './Admin.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import wrongSound from './assets/msti.mp3';


export default function Admin({ setIsAdminLoggedIn }) {
    const navigate = useNavigate();
    const [username, setUn] = useState("");
    const [password, setPsd] = useState("");

    function playSound(src) {
  const a = new Audio(src);
  a.play().catch(err => console.error("Sound error:", err));
}

    function login() {
        if (username === 'abhi' && password === '1234') {
            alert("Login hogya");
            setIsAdminLoggedIn(true);    
            navigate("/adprofile");
        } else {
            playSound(wrongSound);
            alert("❌ Wrong password or username");
        }
    }

    return (
        <>
            <Navv />
        <div className="oo">
           <div className="one">
    <div className="second">
        <input 
            type="text" 
            onChange={(e) => setUn(e.target.value)} 
            placeholder="User Name" 
        />
        <input 
            type="password" 
            onChange={(e) => setPsd(e.target.value)} 
            placeholder="Password" 
        />
        <button onClick={login}>Login</button>
    </div>
</div>
</div>

        </>
    );
}
