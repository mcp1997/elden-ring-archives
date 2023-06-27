import React, { useState } from 'react'

export default function BossCard(props) {
  const [flipped, setFlipped] = useState(false)

  const { name, image, description, region, location, healthPoints, drops } = props.boss
  return (
    <div className='bosscard'>
      <h4>{name}</h4>
      <div className='flipImg'>
        <img className={flipped ? 'flip' : 'no-flip'} src={image} alt='boss' />
        <p className={flipped ? 'flip' : 'no-flip'}>{description}</p>
      </div>
      <p>Region: {region}</p>
      <p>Location: {location}</p>
      <p>Health: {healthPoints}</p>
      <ul>
        { drops.map((drop, idx) => <li key={idx}>{drop}</li>) }
      </ul>
    </div>
  )
}