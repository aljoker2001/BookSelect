import React from 'react'

const SearchBox = (props) => {
    return (
        <form>
            <label htmlFor="title" className="text-center col">Enter a book title:</label><br />
            <input className='col-12' placeholder="Enter book title" onChange={props.handleInputChange} value={props.search} name='search'></input>
        </form>
    )
}

export default SearchBox