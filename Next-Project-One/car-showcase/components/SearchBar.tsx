'use client'

import SearchManufacturer from "./SearchManufacturer"
import { useState } from 'react'

const SearchBar = () => {
const [manufacturer, setManufacturer] = useState('')
console.log("inSearchBar", manufacturer)
  const handleSearch = () => {

  }
  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className="seachbar__item">
        <SearchManufacturer setManufacturer={setManufacturer} manufacturer={manufacturer}/>

      </div>



    </form>
  )
}

export default SearchBar