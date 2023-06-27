import React, { useState } from 'react'

export default function BossCard(props) {
  const [flipped, setFlipped] = useState(false)

  const handleEnter = () => {
    setFlipped(true)
    console.log(flipped)
  }

  const handleLeave = () => {
    setFlipped(false)
    console.log(flipped)
  }

  const { name, image, description, region, location, healthPoints, drops } = props.boss
  return (
    <div className='bosscard'>
      <h4>{name}</h4>
      <div className='flipImg' onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        <img className={flipped ? 'hidden' : ''} src={image} alt='boss' />
        <p className={flipped ? '' : 'hidden'}>{description}</p>
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