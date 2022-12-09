import React from 'react';
import './style.css';

export default function Rodape() {
  return (
    <footer className="contact">
      <div className="contact-info">
        <div className="first-info">
          <img src="assets/logo.png" alt="logo" />
          <p>3245 Grant Street Longview, <br /> TX united kingdom 765378</p>
          <p>01601348732</p>
          <p>saidulahmed3080@gmail.com</p>
          
          <div className="social-icon">
            <a href="#"><i class='bx bxl-facebook'></i></a>
            <a href="#"><i class='bx bxl-twitter'></i></a>
            <a href="#"><i class='bx bxl-instagram'></i></a>
            <a href="#"><i class='bx bxl-youtube'></i></a>
            <a href="#"><i class='bx bxl-linkedin'></i></a>
          </div>
        </div>
        
        <div className="second-info">
          <h4>Support</h4>
          <p>Contact us</p>
          <p>About page</p>
          <p>Size Guide</p>
          <p>Shopping & Resturns</p>
          <p>Privacy</p>
        </div>
        
        <div className="third-info">
          <h4>Shop</h4>
          <p>Men's Shopping</p>
          <p>Women's Shopping</p>
          <p>Kids's Shopping</p>
          <p>Furniture</p>
          <p>Discount</p>
        </div>
        
        <div className="fourth-info">
          <h4>Company</h4>
          <p>About</p>
          <p>Blog</p>
          <p>Affiliate</p>
          <p>Login</p>
        </div>
        
        <div className="five">
          <h4>Subscribe</h4>
          <p>Receive Updates, Hot Deals, Discounts Sent Straight In Your Inbox Daily</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <p>Receive Updates, Hot Deals, Discounts Sent Straight In Your Inbox Daily</p>
        </div>
      </div>
      
      <div className="end-text">
        <p>Copyright @2022. All Rights Reserved.Design By Saidul Islam</p>
      </div>
    </footer>
    
  )
}