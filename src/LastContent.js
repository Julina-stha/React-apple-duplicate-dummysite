import React from 'react';
import './LastContent.css';
import LastFiveColumns from './LastFiveColumns';


export default function LastContent() {
  return(
    <section className='container-fluid'>
      <div className='last-paragraph'>
          <p>1. £9.99/month after trial. Offer valid for three months after eligible device activation. One subscription per Family Sharing group. Plan automatically renews until cancelled. Restrictions and other terms apply.</p>
          <p>A subscription is required for Apple Fitness+.</p>
          <p>Apple Fitness+ requires iOS 14.3 or later, iPadOS 14.3 or later, watchOS 7.2 or later, and tvOS 14.3 or later.</p>
          <p>To get the newest features, use Apple Fitness+ with Apple Watch Series 3 or later with watchOS 8 or later, paired with iPhone 6s or later with iOS 15 or later; iPad with iPadOS 15 or later; and Apple TV 4K or Apple TV HD with tvOS 15 or later.</p>
        <p>Apple TV+ is £4.99/month after free trial. One subscription per Family Sharing group. Offer valid for three months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other terms apply.</p>
        <hr></hr>
      </div>
      <div className='last-five-columns'>
        <ul className='lastContent-links'> 
          <LastFiveColumns />
        </ul>
      </div>
      <div className='footer-content'>
        <footer>
          <p>
            More ways to shop: <span id='lastBlue-links'>find an Apple Store</span> or <span id='lastBlue-links'>other retailer</span> near you. Or call 0800 048 0408.
          </p>
          <hr></hr>
          <p>Copyright © 2022 Apple Inc. All rights reserved.
            <span>
              <ul>
                <li>Privacy Policy<span>|</span></li>
                <li>Use of Cookies<span>|</span></li>
                <li>Terms of Use<span>|</span></li>
                <li>Sales and Refunds<span>|</span></li>
                <li>Legal<span>|</span></li>
                <li>Site Map</li>
                <li className='footer-UK'>United Kingdom</li>
              </ul>
            </span>
          </p>

        </footer>
      </div>
    </section>
  )
}