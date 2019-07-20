import React from 'react'

const SearchBox = (props) => {
    return (
        <div>
            <form>
                <label htmlFor="title" className="text-center col">Enter a book title:</label><br />
                <input className='col-12' placeholder="Enter book title" onChange={props.handleInputChange} value={props.search} name='search'></input>
                <button className='my-3' onClick={props.handleFormSubmit}>Search</button>
            </form>
        </div>
    )
}

export default SearchBox