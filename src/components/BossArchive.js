import React, { useState } from 'react'
import BossCard from './BossCard'
import fixedData from '../fixedData'

export default function BossArchive(props) {
  const [letter, setLetter] = useState('')
  const [region, setRegion] = useState('')
  const [bosses, setBosses] = useState([])

  const handleSearch = e => {
    e.preventDefault()
    console.log({ chosenLetter: letter, chosenRegion: region })
    setBosses(fixedData)
  }

  return (
    <div className='bossArchive'>
      <h2>Bosses</h2>
      <div className='boss-filter'>
        <h3>Filter Alphabetically/By Region, or leave blank to see ALL bosses</h3>
        <form onSubmit={handleSearch}>
          <label>Alphabetically&nbsp;
            <select name='byAlpha' onChange={e => { setLetter(e.target.value) }}>
              <option value=''></option>
              <option value='A'>A</option>
              <option value='B'>B</option>
              <option value='C'>C</option>
              <option value='D'>D</option>
              <option value='E'>E</option>
              <option value='F'>F</option>
              <option value='G'>G</option>
              <option value='H'>H</option>
              <option value='I'>I</option>
              <option value='J'>J</option>
              <option value='K'>K</option>
              <option value='L'>L</option>
              <option value='M'>M</option>
              <option value='N'>N</option>
              <option value='O'>O</option>
              <option value='P'>P</option>
              <option value='Q'>Q</option>
              <option value='R'>R</option>
              <option value='S'>S</option>
              <option value='T'>T</option>
              <option value='U'>U</option>
              <option value='V'>V</option>
              <option value='W'>W</option>
              <option value='X'>X</option>
              <option value='Y'>Y</option>
              <option value='Z'>Z</option>
            </select>
          </label>
          <label> By Region&nbsp;
            <select name='byRegion' onChange={e => { setRegion(e.target.value) }}>
              <option value=''></option>
              <option value='LIMGRAVE'>LIMGRAVE</option>
              <option value='WEEPING PENINSULA'>WEEPING PENINSULA</option>
              <option value='LIURNIA OF THE LAKES'>LIURNIA OF THE LAKES</option>
              <option value='CAELID'>CAELID</option>
              <option value='ALTUS PLATEAU'>ALTUS PLATEAU</option>
              <option value='MOUNT GELMIR'>MOUNT GELMIR</option>
              <option value='DRAGONBARROW'>DRAGONBARROW</option>
              <option value='MOUNTAINTOPS OF THE GIANTS'>MOUNTAINTOPS OF THE GIANTS</option>
              <option value='CONSECRATED SNOWFIELD'>CONSECRATED SNOWFIELD</option>
              <option value='CRUMBLING FARUM AZULA'>CRUMBLING FARUM AZULA</option>
              <option value='SIOFRA RIVER'>SIOFRA RIVER</option>
            </select>
          </label>
          <button>Search</button>
        </form>
      </div>
      <div className='bosscard-container'>
        {
          bosses.map(boss => {
            return <BossCard key={boss.id} boss={boss} />
          })
        }
      </div>
    </div>
  )
}