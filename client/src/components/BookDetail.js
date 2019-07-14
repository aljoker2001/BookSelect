import React from 'react'

const BookDetail = (props) => {
    return (
        <div className="text-center">
            <img alt={props.title} className="img-fluid" src={props.image} style={{ margin: "0 auto" }} />
            <h3>Title: {props.title}</h3>
            <h3>Author(s): {props.author}</h3>
            <h3>Description: {props.description}</h3>
            <h3>Link: {props.link}</h3>
        </div>
    );
}

export default BookDetail;