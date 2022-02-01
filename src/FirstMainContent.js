import React from 'react';
import './FirstMainContent.css';

export default function FirstMainContent() {
  return (
    <section className='first-container'>
      <a href="https://www.apple.com/uk/iphone-13-pro/" className='iPhone13ProContent' target="_blank" rel="noreferrer">
        <div className='firstMainContentHeader'>
          <h1>
          iPhone 13 Pro
          </h1>
          <h2>
            Oh. So. Pro.
          </h2>
          <div className='sub-text'>
            <a href='https://www.apple.com/uk/iphone-13-pro/' id='sub-text2' target="_blank" rel="noreferrer">Learn more</a>
            <span id='divider'>{'>'}</span>
            <a href='https://www.apple.com/uk/shop/buy-iphone/iphone-13-pro' id='sub-text3' target="_blank" rel="noreferrer">Buy</a>
            <span id='divider'>{'>'}</span>
          </div>
        </div>
      </a>
    </section>
  )
}