import React from 'react';
import './FourthCContent.css';


export default function FourthCContent() {
  return (
    <section className='fourthC-container'>
      <a href="https://www.apple.com/uk/ipad-mini/" className='valentineContent' target="_blank" rel="noreferrer">
        <div className='iPadMiniContentHeader'>
          <div className='iPad'>iPad 
            <span className="coloredFont">  mini</span>
          </div>
          <div id='megapower'>Megapower. Mini size. </div>
          <div id='blue-links'>
            <a href='https://www.apple.com/uk/ipad-mini/' id='blue-text2' target="_blank" rel="noreferrer">Learn more</a>
            <span id='divider'>{'>'}</span>
            <a href='https://www.apple.com/uk/shop/buy-ipad/ipad-mini' id='blue-text3' target="_blank" rel="noreferrer">Buy</a>
            <span id='divider'>{'>'}</span>
          </div>
        </div>
        <img src="https://www.apple.com/v/home/aj/images/promos/ipad-mini/promo_ipad_mini__spq4zjcuuaie_large.jpg" alt="iPadMini"></img>
      </a>
      <a href="https://www.apple.com/uk/homepod-mini/" className='tv+Content' target="_blank" rel="noreferrer">
        <div className='tv+ContentHeader'>
          <div className='tv+'><i class="fab fa-apple"></i>tv+</div>
          <div id='gift'>THE TRAGEDY OF </div>
          <div id='gift' className='timeToRun'>MAcBETH</div>
          <div id='gift' className='timeToRun'>Directed by Joel Coen</div>
          <div id='blue-links'>
            <a href='https://www.apple.com/uk/homepod-mini/' id='blue-text2' target="_blank" rel="noreferrer">Stream now</a>
            <span id='divider'>{'>'}</span>
          </div>
        </div>
        <img src="https://www.apple.com/v/home/aj/images/promos/tv-plus-macbeth/promo_macbeth__e671onn69r8m_large.jpg" alt="tv+" className='tvPlusImg'></img>
      </a>
    </section>
  )
}