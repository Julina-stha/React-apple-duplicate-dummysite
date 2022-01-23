import React from 'react';
import './FourthBContent.css';
import './FourthAContent.css';


export default function FourthBContent() {
  return (
    <section className='fourthB-container'>
      <a href="https://www.apple.com/uk/shop/gifts/valentines-day" className='valentineContent' target="_blank" rel="noreferrer">
        <div className='valentineContentHeader'>
          <div className='valentineDay'>Valentine's Day</div>
          <div id='gift'>Say it with a </div>
          <div id='gift' className='timeToRun'>gift from Apple.</div>
          <div id='blue-links'>
            <a href='https://www.apple.com/uk/shop/gifts/valentines-day' id='blue-text2' target="_blank" rel="noreferrer">Shop</a>
            <span id='divider'>{'>'}</span>
          </div>
        </div>
        <img src="https://www.apple.com/uk/home/images/promos/valentines-day/promo_vday22__oz9b5x4x7ney_large.jpg" alt="valentines-day"></img>
      </a>
      <a href="https://www.apple.com/uk/homepod-mini/" className='homepodMiniContent' target="_blank" rel="noreferrer">
        <div className='homepodMiniContentHeader'>
          <div className='homePodMini'>HomePod mini</div>
          <div id='blue-links'>
            <a href='https://www.apple.com/uk/homepod-mini/' id='blue-text2' target="_blank" rel="noreferrer">Learn more</a>
            <span id='divider'>{'>'}</span>
            <a href='https://www.apple.com/uk/shop/buy-homepod/homepod-mini' id='blue-text3' target="_blank" rel="noreferrer">Buy</a>
            <span id='divider'>{'>'}</span>
          </div>
        </div>
        <img src="https://www.apple.com/v/home/aj/images/promos/homepod-mini/tile_homepod_mini__b73w4z3ljymu_large.jpg" alt="homepodMini" className='homepodMiniImg'></img>
      </a>
    </section>
  )
}