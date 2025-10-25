import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

import Home from './Home';
import About from './About';
import Menuu from './Menuu';
import Admin from './Admin';
import Adminpro from './Adminpro';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';
import Drinks from './Drinks';
import Sweets from './Sweets';

import './index.css';
import Menutype from './Menutype';
import Menuitem from './Menuitem';

function Main() {
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/menu' element={<Navigate to="/menu/breakfast" />} />
                <Route path='/menu' element={<Menuu />} />
                
<Route path='/menutype' element={isAdminLoggedIn ? <Menutype /> : <Navigate to="/admin" />} />
<Route path='/menuitem' element={isAdminLoggedIn ? <Menuitem /> : <Navigate to="/admin" />} />

                <Route path='/admin' element={<Admin setIsAdminLoggedIn={setIsAdminLoggedIn} />} />

                {/* Protected admin profile */}
                <Route 
                    path='/adprofile' 
                    element={isAdminLoggedIn ? <Adminpro /> : <Navigate to="/admin" />} 
                />

                <Route path='/menu/breakfast' element={<Breakfast />} />
                <Route path='/menu/lunch' element={<Lunch />} />
                <Route path='/menu/dinner' element={<Dinner />} />
                <Route path='/menu/sweets' element={<Sweets />} />
                <Route path='/menu/drinks' element={<Drinks />} />

            </Routes>


        </BrowserRouter>
    );
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Main />
    </StrictMode>
);
