import Navv from "./Navv"
import { Link} from 'react-router-dom';
import './Home.css';
import myImage from './assets/one1.png';
import clickSound from './assets/jetha.mp3';
import kh from './assets/khana.mp3';
export default function Home(){

  function playsound(){
    const a=new Audio(clickSound);
    a.play().catch(err => console.error("Sound error:", err));
  }
   function playsound1(){
    const k=new Audio(kh);
    k.play().catch(err => console.error("Sound error:", err));
  }

    return(
        <>
        <Navv> </Navv>
        



  <section id="hero" class="hero">
    <div class="container">
      <div class="hero-text">
        <h1>Enjoy Your Healthy<br/>Delicious Food</h1>
        <p>Chai Piyo, Biscuit Khao, Aur Digital Menu Pe Order Lagao!</p>
        <Link  onclick={playsound1}className="btn-get-started" to="/menu">Oder Now..</Link>
      </div>
      <div class="hero-img">
        <img src={myImage} alt="Hero"  onClick={playsound} style={{ cursor: "pointer" }} />
      </div>
    </div>
  </section>



        
        </>
    )
}