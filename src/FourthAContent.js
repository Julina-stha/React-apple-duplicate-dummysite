import React from 'react';
import './FourthAContent.css';


export default function FourthContent() {
  return (
    <section className='fourthA-container'>
      <a href="https://www.apple.com/uk/apple-fitness-plus/" className='fitnessContent' target="_blank" rel="noreferrer">
        <div className='fitnessContentHeader'>
          <div className='fitness'><i class="fab fa-apple"></i>Fitness+</div>
          <div id='moreWays'>More ways to move. Now with </div>
          <div id='moreWays' className='timeToRun'>Time to Run and Collections.</div>
          <div id='blue-links'>
            <a href='https://www.apple.com/uk/apple-fitness-plus/' id='blue-text2' target="_blank" rel="noreferrer">See what's new</a>
            <span id='divider'>{'>'}</span>
            <a href='https://fitness.apple.com/us/subscribe?itscg=10000&itsct=fit-promo-hp_tile-apl-evg-201111' id='blue-text3' target="_blank" rel="noreferrer">Try it free</a>
            <span id='divider'>{'↗'}</span>
          </div>
        </div>
        <img src="https://www.apple.com/v/home/aj/images/promos/apple-fitness-plus-winter/tile_winter__bpktzwl6hsc2_large.jpg" alt="fitness+"></img>
      </a>
      <a href="https://www.apple.com/uk/macbook-pro-14-and-16/" className='macBookContent' target="_blank" rel="noreferrer">
        <div className='macbookContentHeader'>
          <div className='macbookPro'>MacBook Pro</div>
          <div className='supercharged'>Supercharged for pros.</div>
          <div id='blue-links'>
            <a href='https://www.apple.com/uk/macbook-pro-14-and-16/' id='blue-text2' target="_blank" rel="noreferrer">Learn more</a>
            <span id='divider'>{'>'}</span>
            <a href='https://www.apple.com/uk/shop/buy-mac/macbook-pro/14-inch' id='blue-text3' target="_blank" rel="noreferrer">Buy</a>
            <span id='divider'>{'>'}</span>
          </div>
        </div>
        <img src="https://www.apple.com/v/home/aj/images/promos/macbook-pro/tile_macbookpro__cx0ur0qg9biq_large.jpg" alt="macbookPro" className='macbookImg'></img>
      </a>
    </section>
  )
}