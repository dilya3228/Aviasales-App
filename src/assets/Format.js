export const sortByTab = (sortTab, filterTikets) => {
  switch (sortTab) {
    case 'SORT_BY_CHEAPEST':
      return filterTikets.sort((a, b) => (a.price > b.price ? 1 : -1))

    case 'SORT_BY_TIME':
      return filterTikets.sort((a, b) => {
        const aSum = a.segments[0].duration + a.segments[1].duration
        const bSum = b.segments[0].duration + b.segments[1].duration
        return aSum > bSum ? 1 : -1
      })

    case 'SORT_BY_OPTIMAL':
      return filterTikets.sort((a, b) => {
        const aSum = a.segments[0].duration + a.segments[1].duration
        const bSum = b.segments[0].duration + b.segments[1].duration
        return aSum + a.price > bSum + b.price ? 1 : -1
      })

    default:
      return filterTikets
  }
}
