import { StockTicketSearch } from '../components/StockTicketSearch'
import { StockTicketTable } from '../components/StockTicketTable'
import { useSelector } from 'react-redux'
function Home() {
  const stockTicket = useSelector((state) => state.stockTicket.value)

  return (
    <>
      <StockTicketSearch className="search-component" />
      {
        stockTicket.length > 0 && <StockTicketTable
          className="table-component"
          stockTicket={stockTicket}
        />
      }
    </>
  )
}

export { Home }
