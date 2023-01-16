import { React } from 'react'
import { baseUrlImageLogo } from '../../store/Constants'
import { format } from 'date-fns'
import classes from './Ticket.module.scss'

const Ticket = ({ elem }) => {
  const { price, segments, carrier } = elem

  const priceFormat = (price) => {
    return `${price.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ')}`
  }

  const transfersNumFormat = (transfer) => {
    const textForms = ['ПЕРЕСАДКА', 'ПЕРЕСАДКИ', 'ПЕРЕСАДОК']
    let form = ''
    if (transfer >= 4) form += textForms[2]
    if (transfer > 1 && transfer <= 4) form += textForms[1]
    if (transfer === 1) form += textForms[0]
    return transfer ? `${transfer} ${form}` : ' '
  }

  const transferTimeFormat = (data, duration) => {
    const startDate = format(new Date(data), 'HH:mm')
    const endDate = format(new Date(new Date(data).getTime() + duration * 60000), 'HH:mm')
    return `${startDate} - ${endDate}`
  }

  const dateTimeFormat = (duration) => {
    return `${Math.trunc(duration / 60)}ч ${duration % 60}м`
  }

  return (
    <div className={classes.flight_item}>
      <div className={classes.flight_item__head}>
        <span className={classes.flight_item__title}>{priceFormat(price)} ₽</span>
        <img className={classes.flight_item__img} src={`${baseUrlImageLogo}${carrier}.png`} alt={carrier} />
      </div>

      <div className={classes.flight_item__body}>
        <div className={classes.flight_item__description}>
          <span className={classes.flight_item__description_title}>
            {segments[0].origin} – {segments[0].destination}
          </span>
          <span className={classes.flight_item__description_text}>{transferTimeFormat(segments[0].date, segments[0].duration)}</span>
        </div>
        <div className={classes.flight_item__description}>
          <span className={classes.flight_item__description_title}>В пути</span>
          <span className={classes.flight_item__description_text}>{dateTimeFormat(segments[0].duration)}</span>
        </div>
        <div className={classes.flight_item__description}>
          <span className={classes.flight_item__description_title}>{transfersNumFormat(segments[0].stops.length)}</span>
          <span className={classes.flight_item__description_text}>{segments[0].stops.join(', ')}</span>
        </div>

        <div className={classes.flight_item__description}>
          <span className={classes.flight_item__description_title}>
            {segments[1].origin} – {segments[1].destination}
          </span>
          <span className={classes.flight_item__description_text}>{transferTimeFormat(segments[1].date, segments[1].duration)}</span>
        </div>
        <div className={classes.flight_item__description}>
          <span className={classes.flight_item__description_title}>В пути</span>
          <span className={classes.flight_item__description_text}>{dateTimeFormat(segments[1].duration)}</span>
        </div>
        <div className={classes.flight_item__description}>
          <span className={classes.flight_item__description_title}>{transfersNumFormat(segments[1].stops.length)}</span>
          <span className={classes.flight_item__description_text}>{segments[1].stops.join(', ')}</span>
        </div>
      </div>
    </div>
  )
}

export default Ticket
