import React from 'react'
import { connect } from 'react-redux'
import BossCard from './BossCard'

function BossList(props) {
  const { bosses } = props
  return (
    <div className='BossList'>
      {
        bosses.map(boss => <BossCard key={boss.id} boss={boss} />)
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    bosses: state.bossReducer.bosses
  }
}

export default connect(mapStateToProps, {})(BossList)