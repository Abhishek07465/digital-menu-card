import { Link, useLocation } from 'react-router-dom';
import './Navv.css';

import clickSound from './assets/khana.mp3';

export default function Navv() {
  const location = useLocation();
  const currentPath = location.pathname;


  function playsound(){

    const a=new Audio(clickSound);
    a.play().catch(err => console.error("Sound error:", err));
  }



  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">TMKOC<span>.</span></Link>

        <nav className="navmenu">
          <ul>
            <li><Link to="/" className={currentPath === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/about" className={currentPath === '/about' ? 'active' : ''}>About</Link></li>
            <li> <Link to ="/menu" className={currentPath==='/menu' ? 'active':''} > Our Menu</Link> </li>
             <li> <Link to="/admin" className={currentPath==='/admin'?'active':''} > Admin </Link></li>
          </ul>
        </nav>

        <Link onClick={playsound} className="btn-getstarted" to="/menu">Oder Now..</Link>

        <i className="mobile-nav-toggle bi bi-list"></i>
      </div>
    </header>
  );
}
