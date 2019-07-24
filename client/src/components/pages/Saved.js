import React from 'react'
import Wrapper from './../Wrapper/index.js'
import BookDetail from '../BookDetail.js';

class Saved extends React.Component {
  state = {
    results: []
  }
  componentDidMount() {
    this.getBooks()
    // console.log('saved results', this.state.results)
  }
  getBooks = () => {
    fetch('/api/books')
      .then(response => {
        console.log('first then', response)
        return response.json()
      })
      .then(data => {
        console.log('saved mount', data)
        this.setState({ results: data })
      })
      .catch(err => console.log(err))
  }
  removeBook = (event) => {
    event.preventDefault()
        console.log(this.state.results)
        let saved = {}
        for (let book of this.state.results) {
            if (event.target.id === book.id) {
                saved = { id: book.id}
            }
        }
        console.log('removed book', saved)
        fetch('/api/books', {
            method: 'DELETE',
            body: JSON.stringify(saved),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(results => results.json())
            .then(data => console.log('data', data))
            .catch(err => console.log(err))
  }
  render() {
    return (
      <Wrapper>
        <h2 className='jumbotron text-center'>Saved Books</h2>
        <BookDetail
          results={this.state.results}
          removeBook={this.removeBook}
        />
      </Wrapper>
    );
  }
}

export default Saved;