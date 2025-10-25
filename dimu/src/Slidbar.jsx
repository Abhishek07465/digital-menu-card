import { Link, useLocation } from 'react-router-dom';
import './Slidbar.css'
export default function Slidbar(){
    return(
        <>
        <div className="admin-container">

        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-header">
            
            <h1>hey!</h1>
          </div>

          <nav className="nav-menu">
            <Link to="/adprofile"> <span className="icon"> 🏠 </span> Dashboard</Link>
            <Link to="/menutype"> <span className="icon">📋</span> Menu Type</Link>
            <Link to="/menuitem"> <span className="icon">📋</span> Menu Items</Link>
          </nav>

          <div className="logout">
            <Link to="/admin"> <span className="icon">🔓</span> Logout</Link>
          </div>
        </aside>
        </div>
        
        </>
    )
}