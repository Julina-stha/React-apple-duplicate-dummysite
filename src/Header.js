import React from 'react';
import './Header.css';


export default function Header() {
  return (
    <nav className='col-12'>
      <ul className="head-content">
        <li><a href="#" target="_blank" rel="noreferrer" id="apple-icon"><i class="fab fa-apple"></i></a></li>
        <li><a href="#" target="_blank" rel="noreferrer" id="header-link">Store</a></li>
        <li><a href="#" target="_blank" rel="noreferrer" id="header-link">Mac</a></li>
        <li><a href="#" target="_blank" rel="noreferrer" id="header-link">iPad</a></li>
        <li><a href="#" target="_blank" rel="noreferrer" id="header-link">iPhone</a></li>
        <li><a href="#" target="_blank" rel="noreferrer" id="header-link">Watch</a></li>
        <li><a href="#" target="_blank" rel="noreferrer" id="header-link">AirPods</a></li>
        <li><a href="#" target="_blank" rel="noreferrer" id="header-link">TV {'&'} Home</a></li>
        <li><a href="#" target="_blank" rel="noreferrer" id="header-link">Only on Apple</a></li>
        <li><a href="#" target="_blank" rel="noreferrer" id="header-link">Accessories</a></li>
        <li><a href="#" target="_blank" rel="noreferrer" id="header-link">Support</a></li>
        <li className="search-icon"><img src="https://img.icons8.com/ios/25/ffffff/search--v1.png" alt='searchIcon' /></li>
        <li><img src="https://img.icons8.com/ios/64/ffffff/shopping-bag--v1.png" alt='shopping Cart' className='shoppingCart'/></li>
      </ul>
    </nav>

  )
}