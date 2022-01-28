import React from 'react';
import './LastContent.css';
import LastFiveColumns from './LastFiveColumns';


export default function LastContent() {
  return(
    <section className='last-container'>
      <div className='last-paragraph'>
        <ul>
          <li>1. £9.99/month after trial. Offer valid for three months after eligible device activation. One subscription per Family Sharing group. Plan automatically renews until cancelled. Restrictions and other terms apply.</li>
          <li>A subscription is required for Apple Fitness+.</li>
          <li>Apple Fitness+ requires iOS 14.3 or later, iPadOS 14.3 or later, watchOS 7.2 or later, and tvOS 14.3 or later.</li>
          <li>To get the newest features, use Apple Fitness+ with Apple Watch Series 3 or later with watchOS 8 or later, paired with iPhone 6s or later with iOS 15 or later; iPad with iPadOS 15 or later; and Apple TV 4K or Apple TV HD with tvOS 15 or later.</li>
          <li>Apple TV+ is £4.99/month after free trial. One subscription per Family Sharing group. Offer valid for three months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other terms apply.</li>
        </ul>
      </div>
      <hr></hr>
      <div className='last-five-columns'>
        <ul className='lastContent-links'> 
          <LastFiveColumns />
        </ul>
        <footer>
          More ways to shop: <span id='lastBlue-links'>find an Apple Store</span> or <span id='lastBlue-links'>other retailer</span> near you. Or call 0800 048 0408.
          <hr></hr>
          Copyright © 2022 Apple Inc. All rights reserved.
          <ul>
            <li>Privacy Policy<span>|</span></li>
            <li>Use of Cookies<span>|</span></li>
            <li>Terms of Use<span>|</span></li>
            <li>Sales and Refunds<span>|</span></li>
            <li>Legal<span>|</span></li>
            <li  className='siteMap'>Site Map</li>
            <li>United Kingdom</li>
          </ul>
        </footer>
      </div>
    </section>
  )
}