import React from 'react'
import Wrapper from './../Wrapper/index.js'

class Saved extends React.Component{
  state = {

  }
  componentDidMount () {
    fetch('/api/books')
      .then(results => results.json())
      .then(res => {
        console.log('saved mount', res)
      })
  }
  render() {
    return (
      <Wrapper>
        <h2 className='jumbotron text-center'>Saved Books</h2>
      </Wrapper>
    );
  }
}
  
  export default Saved;