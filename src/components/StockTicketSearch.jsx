import { useState } from "react";
import './StockTicketSearch.css'
import { useDispatch } from 'react-redux'
import { search } from '../store/features/stockTicket'


function StockTicketSearch({ ...rest }) {
  const dispatch = useDispatch()

  const [input, setInput] = useState('')

  const handleInputChange = (event) => {
    setInput(event.target.value)
  }

  const handleSearchSubmit = () => {
    if (input.length === 0) return;

    dispatch(search(input))
    console.log('Searching...', input);
    // dipatch(input.value); call Redux
  }

  return (
    <div {...rest}>
      <label className="search-label" htmlFor="search">
        Enter a Stock Ticket
      </label>
      <input
        className="search-input"
        id="search"
        onChange={handleInputChange}
        placeholder="AAPL"
        type="search"
      />
      <button className="search-button" onClick={handleSearchSubmit}>
        Search
      </button>
    </div>
  )
}

export { StockTicketSearch }
