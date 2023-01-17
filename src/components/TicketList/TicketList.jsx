import * as actions from '../../store/action'
import Ticket from '../Ticket/Ticket.jsx'
import ShowMore from '../ShowMore/ShowMore'
import Loader from '../Lodaer/Lodaer'
import { useEffect, React } from 'react'
import { connect } from 'react-redux'
import { AlertFilter, ErrorDate } from '../AlertAttention/AlertAttention'
import { sortByTab } from '../../assets/Format'
import classes from './TicketList.module.scss'

const TicketList = (store) => {
  const { tab, filterTransfers, ticketsReducer } = store
  const { sortTab } = tab
  const { ticketsError, tickets, ticketsLoading, ticketsCounter } = ticketsReducer

  let filterTikets = [...tickets]
  let selectedFilters = [10]
  let doneFilterTikets

  for (let filter in filterTransfers) {
    if (filterTransfers['all']) selectedFilters.push(10)
    if (filterTransfers['zero']) selectedFilters.push(0)
    if (filterTransfers['one']) selectedFilters.push(1)
    if (filterTransfers['two']) selectedFilters.push(2)
    if (filterTransfers['three']) selectedFilters.push(3)
  }
  selectedFilters = new Set([...selectedFilters])
  selectedFilters = [...selectedFilters]

  if (ticketsError) return <ErrorDate></ErrorDate>

  useEffect(() => {
    const { getIdTikets } = actions
    getIdTikets(store)
  }, [])

  if (!filterTikets.length) return null

  filterTikets = sortByTab(sortTab, filterTikets)

  filterTikets = filterTikets.filter((ticket) => {
    const ticketTransfersCount = ticket.segments[0].stops.length + ticket.segments[1].stops.length
    return selectedFilters.includes(ticketTransfersCount)
  })

  doneFilterTikets = filterTikets.slice(0, ticketsCounter).map((element, idx) => {
    return <Ticket key={idx} elem={element}></Ticket>
  })

  const renderTikets = !filterTikets.length ? <AlertFilter></AlertFilter> : doneFilterTikets

  const renderButton = filterTikets.length ? <ShowMore></ShowMore> : null

  const loading = ticketsLoading ? <Loader></Loader> : null
  return (
    <div className={classes.flight_list}>
      {renderTikets}
      {renderButton}
      {loading}
    </div>
  )
}

const mapStateToProps = (store) => {
  return {
    filterTransfers: store.filterReducer,
    tab: store.tabReducer,
    ticketsReducer: store.ticketsReducer,
  }
}
export default connect(mapStateToProps, actions)(TicketList)
