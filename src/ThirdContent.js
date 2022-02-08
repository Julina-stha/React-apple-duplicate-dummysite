import React from 'react';
import './FirstMainContent.css';
import './ThirdContent.css';


export default function ThirdContent() {
  return (
    <section className='third-container'>
      <a href="https://www.apple.com/uk/apple-watch-series-7/" className='thirdContentLink'target="_blank" rel="noreferrer">
        <div className='thirdContentHeader'>
          <div className='new'>New</div>
          <h5 className='watch7'><i class="fab fa-apple"></i>WATCH</h5>
          <div className='series7'>SERIES 7</div>
          <p>Introducing our largest display yet.</p>
          <div className='sub-text'>
            <a href='https://www.apple.com/uk/iphone-13/' id='sub-text2' target="_blank" rel="noreferrer">Learn more</a>
            <span id='divider'>{'>'}</span>
            <a href='https://www.apple.com/uk/shop/buy-iphone/iphone-13' id='sub-text3' target="_blank" rel="noreferrer">Buy</a>
            <span id='divider'>{'>'}</span>
          </div>
        </div>
      </a>
    </section>
  )
}