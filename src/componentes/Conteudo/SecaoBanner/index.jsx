import './style.css'

export default function SecaoBanner() {
  return (
    <section className="main-home">
      <div className="main-text">
        <h5>Winter Collection</h5>
        <h1>New Winter <br /> Collection 2022</h1>
        <p>There's Nothing like trend</p>
        
        <a href="#" className="main-bnt">Shop Now <i class='bx bx-right-arrow-alt'></i></a>
      </div>
      
      <div className="down-arrow">
        <a href="#trending" className="down"><i class='bx bx-down-arrow-alt'></i></a>
      </div>
    </section>
  )
}