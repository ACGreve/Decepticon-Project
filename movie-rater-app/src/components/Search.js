import React, { useState } from 'react'

function Search(props) {
    let [searchTerm, setSearchTerm] = useState("")
  return (
    <div>
        <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
            <input id='search' className='input' type='text' placeholder='Search Movies'
            onChange={(e) => setSearchTerm(e.target.value)}/>
            <input type='submit' value='search' className='submit'/>
        </form>
    </div>
  )
}

export default Search