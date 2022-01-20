import React from 'react';
import './FirstMainContent.css';

export default function FirstMainContent() {
  return (
    <div className='main-container'>
      <a href="https://www.apple.com/uk/iphone-13-pro/" className='h1andh2' target="_blank" rel="noreferrer">
        <div className='firstMainContentHeader'>
          <h1 className='iPhone13Pro'>
          iPhone 13 Pro
          </h1>
          <h2 className='ohsopro'>
            Oh. So. Pro.
          </h2>
          <div className='sub-text'>
            <a href='https://www.apple.com/uk/iphone-13-pro/' id='sub-text2' target="_blank" rel="noreferrer">Learn more</a>
            <span id='divider'>{'>'}</span>
            <a href='https://www.apple.com/uk/shop/buy-iphone/iphone-13-pro' id='sub-text3' target="_blank" rel="noreferrer">Buy</a>
            <span id='divider'>{'>'}</span>
          </div>
        </div>
        <img src="https://www.apple.com/v/home/aj/images/heroes/iphone-13-pro/hero_iphone_13pro__dhnsegysa42u_large.jpg" alt="iphone13Pro"></img>
      </a>
    </div>
  )
}