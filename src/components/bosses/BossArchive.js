import React, { useState } from 'react'
import { connect } from 'react-redux'
import BossList from './BossList'
import loadingGif from '../../assets/media/fetching-pot.gif'
import { getArchive } from '../../actions'

// const LIMIT = 24
// const ENDPOINT = `https://eldenring.fanapis.com/api/bosses?limit=24&page=${page}`

function BossArchive(props) {
  const [letter, setLetter] = useState('')
  const [region, setRegion] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    props.getArchive('https://eldenring.fanapis.com/api/bosses', 24)
  }

  const { loading, error } = props
  return (
    <div className='BossArchive font-face-cinzel'>
      <h2>Boss Archive</h2>
      <div className='boss-filter'>
        <h3>Filter Alphabetically/By Region, or leave blank to see all bosses</h3>
        <form onSubmit={handleSubmit}>
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
              <option value='MIQUELLAS HALIGTREE'>MIQUELLA'S HALIGTREE</option>
              <option value='CRUMBLING FARUM AZULA'>CRUMBLING FARUM AZULA</option>
              <option value='SIOFRA RIVER'>SIOFRA RIVER</option>
            </select>
          </label>
          <button className='cool-button'>Search</button>
        </form>
      </div>
      <div className='loading-container'>
        { loading && <img className='loading' src={loadingGif} alt='loading' />}
      </div>
      <div className='bosscard-container'>
        { error ? error : <BossList />}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    loading: state.bossReducer.loading,
    error: state.bossReducer.error
  }
}

export default connect(mapStateToProps, { getArchive })(BossArchive)