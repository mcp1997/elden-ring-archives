import React from 'react'

export default function BossCard(props) {
  const { name, image, description, region, location, healthPoints, drops } = props.boss
  return (
    <div className='BossCard'>
      <h4 className='font-face-ers'>{name}</h4>
      <div className='boss-content'>
        <div className='flip-card'>
          <div className='flip-card-inner'>
            <div className='flip-card-front'>
              <img src={image} alt='boss' />
            </div>
            <div className='flip-card-back'>
              <span className='font-face-cinzel'>"{description}"</span>
            </div>
          </div> 
        </div>
        <div className='boss-info'>
          <p className='font-face-cinzel'>Region: {region}</p>
          <p className='font-face-cinzel'>Location: {location}</p>
          <p className='font-face-cinzel'>Health: {healthPoints}</p>
          <ul className='font-face-cinzel'>If Defeated, Drops:
            { drops.map((drop, idx) => <li key={idx} className='drop cinzel'>{drop}</li>) }
          </ul>
        </div>
      </div>
    </div>
  )
}