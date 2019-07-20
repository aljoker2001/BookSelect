import React from 'react'

const BookDetail = (props) => {
    console.log('book detail', props.results)
    return (
        <ul className="list-group">
            {props.results.map(result => (
                <li className="list-group-item" key={result.id}>
                    <img alt={result.volumeInfo.title} className="img-fluid" src={result.volumeInfo.imageLinks.thumbnail} />
                    <h2>{result.volumeInfo.title}</h2>
                    <h6><strong>Author(s): </strong>{result.volumeInfo.authors}</h6>
                    <h6><strong>Description: </strong>{result.volumeInfo.description}</h6>
                    <h6><a href={result.volumeInfo.infoLink}><strong>Link</strong></a></h6>
                </li>
            ))}
        </ul>
    );
}
// console.log('Book Detail', props)
// if (props.items === undefined) {
//     return null
// } else {
//     for (let book of props.items) {
//         let info = book.volumeInfo,
//             title = info.title,
//             image = info.imageLink.thumbnail,
//             description = info.description,
//             author = info.authors,
//             link = info.infoLink
//         console.log('book results', title)
//         if (title) {
//             return (
//                 <div className="text-center">
//                     <img alt={props.title} className="img-fluid" src={props.image} style={{ margin: "0 auto" }} />
//                     <h3>Title: {props.title}</h3>
//                     <h3>Author(s): {props.author}</h3>
//                     <h3>Description: {props.description}</h3>
//                     <h3>Link: {props.link}</h3>
//                 </div>
//             );
//         } else {
//             return (<h3>No Results to Display</h3>)
//         }
//     }
// }
// }

export default BookDetail;
