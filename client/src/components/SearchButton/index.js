import React from 'react'

const SearchButton = (props) => {
    return (
        <div className='col text-center'>
            <button className='my-3' onClick={props.handleFormSubmit}>Search</button>
        </div>
    )
}

export default SearchButton