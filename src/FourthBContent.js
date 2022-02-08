import React from 'react';
import './FourthBContent.css';
import './FourthAContent.css';
import ImageValentinesDay from './images/ValentinesDay.jpg';
import ImageHomepodMini from './images/homePodMini.jpg';




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
        <img src={ImageValentinesDay} alt="valentines-day"></img>
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
        <img src={ImageHomepodMini} alt="homepodMini" className='homepodMiniImg'></img>
      </a>
    </section>
  )
}