import { React } from 'react'
import TransferList from '../TransferList/TransferList'
import Tabs from '../Tabs/Tabs'
import TicketList from '../TicketList/TicketList'
import classes from './Main.module.scss'

const Main = () => {
  return (
    <main className={classes.main}>
      <TransferList></TransferList>
      <Tabs></Tabs>
      <TicketList></TicketList>
    </main>
  )
}

export default Main
