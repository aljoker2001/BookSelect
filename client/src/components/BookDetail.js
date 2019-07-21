import React from 'react'

const BookDetail = (props) => {
    console.log('book detail', props.results)
    return (
        <ul className="list-group">
            {props.results.map(result => (
                <li className="list-group-item" key={result.id}>
                    <div className='d-flex justify-content-between'>
                        <h2 className='col-10'>{result.volumeInfo.title}</h2>
                        <div>
                            <button><a href={result.volumeInfo.infoLink}><strong>Link</strong></a></button>
                            <button id={result.id} onClick={props.saveBook}>Save</button>
                        </div>
                    </div>
                    <img alt={result.volumeInfo.title} className="img-fluid" src={result.volumeInfo.imageLinks !== undefined ? result.volumeInfo.imageLinks.thumbnail : '#'} />
                    <h6><strong>Author(s): </strong>{result.volumeInfo.authors === undefined ? 'No Author Found' : result.volumeInfo.authors}</h6>
                    <h6><strong>Description: </strong>{result.volumeInfo.description === undefined ? 'No Description Found' : result.volumeInfo.description}</h6>
                </li>
            ))}
        </ul>
    );
}

export default BookDetail;
