import React from 'react';
import './SecondContent.css';
import './FirstMainContent.css';


export default function SecondContent() {
  return (
    <div className='second-container'>
      <a href="https://www.apple.com/uk/iphone-13/" className='h3andh4' target="_blank" rel="noreferrer">
        <div className='secondMainContentHeader'>
          <h3 className='iPhone13'>iPhone 13</h3>
          <h4 className='superpower'>Your new superpower.</h4>
          <div className='sub-text'>
            <a href='https://www.apple.com/uk/iphone-13/' id='sub-text2' target="_blank" rel="noreferrer">Learn more</a>
            <span id='divider'>{'>'}</span>
            <a href='https://www.apple.com/uk/shop/buy-iphone/iphone-13' id='sub-text3' target="_blank" rel="noreferrer">Buy</a>
            <span id='divider'>{'>'}</span>
          </div>
        </div>
      </a>
    </div>
  )
}