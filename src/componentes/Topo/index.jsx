import './style.css';

export default function Topo() {
  
  const header = document.querySelector('header');

    window.addEventListener ('scroll', function(){
      header.classList.toggle ('sticky', this.window.scrollY > 0);
    }
  )
  
  return (
    <header>
      <a href="#" className="logo"><img src="../../public/assets/logo.png" alt="logo" /></a>
      
      <ul className="navmenu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Page</a></li>
        <li><a href="#">Docs</a></li>
      </ul>
      
      <div className="nav-icon">
        <a href="#"><i class='bx bx-search'></i></a>
        <a href="#"><i class='bx bx-user'></i></a>
        <a href="#"><i class='bx bx-cart'></i></a>
        
        <div class='bx bx-menu' id='menu-icon'></div>
      </div>
    </header>
  )
}