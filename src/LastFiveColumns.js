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
    <div className='five-container'>
      <div className='five-column'>
        <div className='col-6 col-sm-3'>
          <div id='lastLinksTitle' className='lastLink-responsive'>Shop and Learn</div>
          <hr className='hidden-hr'></hr>
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
          <div id='lastLinksTitle' className='lastLink-responsive'>Services</div>
          <hr className='hidden-hr'></hr>

          <div>
            {services.map(function (service, index) {
              return (
                <div key={index} id="last-content-links">
                  {service}
                </div>
              )
            })}
          </div>
          <div id='lastLinksTitle2' className='lastLink-responsive'>Account</div>
          <hr className='hidden-hr'></hr>

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
          <div id='lastLinksTitle' className='lastLink-responsive'>Apple Store</div>
          <hr className='hidden-hr'></hr>

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
          <div id='lastLinksTitle' className='lastLink-responsive'>For Business</div>
          <hr className='hidden-hr'></hr>

          <div>
            {forBusinesses.map(function (forBusiness, index) {
              return (
                <div key={index} id="last-content-links">
                  {forBusiness}
                </div>
              )
            })}
          </div>
          <div id='lastLinksTitle2' className='lastLink-responsive'>For Education</div>
          <hr className='hidden-hr'></hr>

          <div>
            {forEducation.map(function (forEdu, index) {
              return (
                <div key={index} id="last-content-links">
                  {forEdu}
                </div>
              )
            })}
          </div>
          <div id='lastLinksTitle2' className='lastLink-responsive'>For Healthcare</div>
          <hr className='hidden-hr'></hr>

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
          <div id='lastLinksTitle' className='lastLink-responsive'>Apple Values</div>
          <hr className='hidden-hr'></hr>

          <div>
            {appleValues.map(function (appleValue, index) {
              return (
                <div key={index} id="last-content-links">
                  {appleValue}
                </div>
              )
            })}
          </div>
          <div id='lastLinksTitle2' className='lastLink-responsive'>About Apple</div>
          <hr className='hidden-hr'></hr>
          
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