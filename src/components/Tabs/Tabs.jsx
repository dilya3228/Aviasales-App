import { React } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/action'
import classes from './Tabs.module.scss'

const Tabs = ({ tabs, sortTime, sortCheapest, sortOptimal }) => {
  return (
    <div className={classes.tabs}>
      <button
        onClick={() => {
          sortCheapest()
        }}
        className={`${classes.tabs__item} ${tabs.sortTab === 'SORT_BY_CHEAPEST' ? classes.tabs__active : ''}`}
      >
        Самый дешевый
      </button>

      <button
        onClick={() => {
          sortTime()
        }}
        className={`${classes.tabs__item} ${tabs.sortTab === 'SORT_BY_TIME' ? classes.tabs__active : ''}`}
      >
        Самый быстрый
      </button>

      <button
        onClick={() => {
          sortOptimal()
        }}
        className={`${classes.tabs__item} ${tabs.sortTab === 'SORT_BY_OPTIMAL' ? classes.tabs__active : ''}`}
      >
        Оптимальный
      </button>
    </div>
  )
}

const mapStateToProps = (store) => {
  return {
    tabs: store.tabReducer,
  }
}

export default connect(mapStateToProps, actions)(Tabs)
