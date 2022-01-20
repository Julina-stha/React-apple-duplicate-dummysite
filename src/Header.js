import React from 'react';
import './Header.css';


export default function Header() {
  return (
    <div className='col-12'>
      <ul className="head-content">
        <li className="apple-icon"><a href="https://www.apple.com/uk/store" target="_blank" rel="noreferrer"><i class="fab fa-apple"></i></a></li>
        <li><a href="https://www.apple.com/uk/store" target="_blank" rel="noreferrer">Store</a></li>
        <li><a href="https://www.apple.com/uk/mac/" target="_blank" rel="noreferrer" >Mac</a></li>
        <li><a href="https://www.apple.com/uk/ipad/" target="_blank" rel="noreferrer">iPad</a></li>
        <li><a href="https://www.apple.com/uk/iphone/" target="_blank" rel="noreferrer">iPhone</a></li>
        <li><a href="https://www.apple.com/uk/watch/" target="_blank" rel="noreferrer">Watch</a></li>
        <li><a href="https://www.apple.com/uk/airpods/" target="_blank" rel="noreferrer">AirPods</a></li>
        <li><a href="https://www.apple.com/uk/tv-home/" target="_blank" rel="noreferrer">TV & Home</a></li>
        <li><a href="https://www.apple.com/uk/services/" target="_blank" rel="noreferrer">Only on Apple</a></li>
        <li><a href="https://www.apple.com/uk/shop/accessories/all" target="_blank" rel="noreferrer">Accessories</a></li>
        <li><a href="https://support.apple.com/en-gb" target="_blank" rel="noreferrer">Support</a></li>
        <li className="search-icon"><img src="https://img.icons8.com/ios/25/ffffff/search--v1.png"/></li>
        <li><a href="https://www.apple.com/uk/store" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/ios/15/ffffff/shopping-bag--v1.png"/></a></li>
      </ul>
    </div>

  )
}