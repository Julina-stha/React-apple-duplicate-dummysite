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
          <div className='megapower'>Megapower. Mini size. </div>
          <div id='iPadblue-links'>
            <a href='https://www.apple.com/uk/ipad-mini/' id='blue-text2' target="_blank" rel="noreferrer">Learn more</a>
            <span id='divider'>{'>'}</span>
            <a href='https://www.apple.com/uk/shop/buy-ipad/ipad-mini' id='blue-text3' target="_blank" rel="noreferrer">Buy</a>
            <span id='divider'>{'>'}</span>
          </div>
        </div>
        <img src="https://www.apple.com/v/home/aj/images/promos/ipad-mini/promo_ipad_mini__spq4zjcuuaie_large.jpg" alt="iPadMini" className='iPadMiniImage'></img>
      </a>
      <a href="https://tv.apple.com/gb/movie/umc.cmc.4wpfk1xmi22h3zyv4a10lj1tw?ign-itscg=10000&ign-itsct=atv-apl_hp-pmo_wch-Macbeth-220113/" className='tv+Content' target="_blank" rel="noreferrer">
        <div className='tvPlusContentHeader'>
          <div className='tvPlus'><i class="fab fa-apple"></i>tv+</div>
          <div className='title-small'>THE <img src="https://img.icons8.com/small/12/ffffff/spa-flower.png" alt='flower' id='flower1' />
            <span className='macbeth'>TRAGEDY</span>
            <span className='title-small'><img src="https://img.icons8.com/small/12/ffffff/spa-flower.png" alt='flower' id='flower1'/> OF</span>
          </div>
          <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/20/ffffff/external-leaf-jungle-vitaliy-gorbachev-lineal-vitaly-gorbachev-1.png" className='leafImage'/>
          <div className='titleName'>MAcBETH</div>
          <div className='director'>Directed by Joel Coen</div>
          <div id='tvPlusblue-links'>
            <a href='https://tv.apple.com/gb/movie/umc.cmc.4wpfk1xmi22h3zyv4a10lj1tw?ign-itscg=10000&ign-itsct=atv-apl_hp-pmo_wch-Macbeth-220113' id='streamNow' target="_blank" rel="noreferrer">Stream now </a>
            <span><img src="https://img.icons8.com/ios-filled/18/ffffff/circled-play.png" alt='stream-button' className='stream'/></span>
          </div>
        </div>
        <img src="https://www.apple.com/v/home/aj/images/promos/tv-plus-macbeth/promo_macbeth__e671onn69r8m_large.jpg" alt="tvPlus" className='tvPlusImg'></img>
      </a>
    </section>
  )
}