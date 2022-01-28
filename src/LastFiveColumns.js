import React from 'react';
import './LastContent.css';



export default function LastFiveColumns() {
  let shopAndLearn = ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "iPod touch", "AirTag", "Accessories", "Gift Cards"];
  let services = ["Apple Music", "Apple TV+", "Apple Fitness+", "Apple News", "Apple Arcade", "iCloud", "Apple One", "Apple Pay", "Apple Books", "Apple Podcasts", "App Store"]
  let accounts = ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"];
  let appleStores = ["Find a Store", "Genius Bar", "Today at Apple", "Apple Summer Camp", "Apple Store App", "Refurbished and Clearance", "Financing", "Apple Trade In", "Order Status", "Shopping Help"];
  let forBusinesses = ["Apple and Business", "Shop for Business"];
  let forEducation = ["Apple and Education", "Shop for University"];
  let forHealthcare = ["Apple in Healthcare", "Health on Apple Watch", "Health Records on iPhone"];
  let appleValues = ["Accessibility", "Environment", "Privacy", "Supplier Responsibility"];
  let aboutApple = ["Newsroom", "Apple Leadership", "Career Oppoturnities", "Warranty", "Investors", "Ethics & Compliance", "Events", "European Job Creation", "Contact Apple"];

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6 col-sm-3'>
          <div id='lastLinksTitle'>Shop and Learn</div>
          <div>
            {shopAndLearn.map(function (shopLearn, index) {
              return (
                <div key={index} id="last-content-links">
                  {shopLearn}
                </div>
              )
            })}
          </div>
        </div>
        <div className='col-6 col-sm-3'>
          <div id='lastLinksTitle'>Services</div>
          <div>
            {services.map(function (service, index) {
              return (
                <div key={index} id="last-content-links">
                  {service}
                </div>
              )
            })}
          </div>
          <div id='lastLinksTitle2'>Account</div>
          <div>
            {accounts.map(function (account, index) {
              return (
                <div key={index} id="last-content-links">
                  {account}
                </div>
              )
            })}
          </div>
        </div>
        <div className='col-6 col-sm-3'>
          <div id='lastLinksTitle'>Apple Store</div>
          <div>
            {appleStores.map(function (appleStore, index) {
              return (
                <div key={index} id="last-content-links">
                  {appleStore}
                </div>
              )
            })}
          </div>
        </div>
        <div className='col-6 col-sm-3'>
          <div id='lastLinksTitle'>For Business</div>
          <div>
            {forBusinesses.map(function (forBusiness, index) {
              return (
                <div key={index} id="last-content-links">
                  {forBusiness}
                </div>
              )
            })}
          </div>
          <div id='lastLinksTitle2'>For Education</div>
          <div>
            {forEducation.map(function (forEdu, index) {
              return (
                <div key={index} id="last-content-links">
                  {forEdu}
                </div>
              )
            })}
          </div>
          <div id='lastLinksTitle2'>For Healthcare</div>
          <div>
            {forHealthcare.map(function (forHealth, index) {
              return (
                <div key={index} id="last-content-links">
                  {forHealth}
                </div>
              )
            })}
          </div>
        </div>
        <div className='col-6 col-sm-3'>
          <div id='lastLinksTitle'>Apple Values</div>
          <div>
            {appleValues.map(function (appleValue, index) {
              return (
                <div key={index} id="last-content-links">
                  {appleValue}
                </div>
              )
            })}
          </div>
          <div id='lastLinksTitle2'>About Apple</div>
          <div>
            {aboutApple.map(function (aboutAppleInfo, index) {
              return (
                <div key={index} id="last-content-links">
                  {aboutAppleInfo}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}