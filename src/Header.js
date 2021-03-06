import React from 'react';
import './Header.css';


export default function Header() {
  return (
    <nav className='header'>
      <ul className="head-content">
        <li><button className="menu-hidden"><img src="https://img.icons8.com/ios/21/ffffff/menu--v1.png" alt='hiddenmenu'/></button></li>
        <li><a href="https://relaxed-edison-9e1993.netlify.app/" target="_blank" rel="noreferrer" className="apple-icon"><i class="fab fa-apple"></i></a></li>
        <li><a href="https://www.apple.com/uk/store" target="_blank" rel="noreferrer" className="header-link">Store</a></li>
        <li><a href="https://www.apple.com/uk/mac/" target="_blank" rel="noreferrer" className="header-link">Mac</a></li>
        <li><a href="https://www.apple.com/uk/ipad/" target="_blank" rel="noreferrer" className="header-link">iPad</a></li>
        <li><a href="https://www.apple.com/uk/iphone/" target="_blank" rel="noreferrer" className="header-link">iPhone</a></li>
        <li><a href="https://www.apple.com/uk/watch/" target="_blank" rel="noreferrer" className="header-link">Watch</a></li>
        <li><a href="https://www.apple.com/uk/airpods/" target="_blank" rel="noreferrer" className="header-link">AirPods</a></li>
        <li><a href="https://www.apple.com/uk/tv-home/" target="_blank" rel="noreferrer" className="header-link">TV {'&'} Home</a></li>
        <li><a href="https://www.apple.com/uk/services/" target="_blank" rel="noreferrer" className="header-link">Only on Apple</a></li>
        <li><a href="https://www.apple.com/uk/shop/accessories/all" target="_blank" rel="noreferrer" className="header-link">Accessories</a></li>
        <li><a href="https://support.apple.com/en-gb" target="_blank" rel="noreferrer" className="header-link">Support</a></li>
        <li className="search-icon"><img src="https://img.icons8.com/ios/25/ffffff/search--v1.png" alt='searchIcon' /></li>
        <li><img src="https://img.icons8.com/ios/64/ffffff/shopping-bag--v1.png" alt='shopping Cart' className='shoppingCart'/></li>
      </ul>
    </nav>

  )
}