import React from 'react'
import Wrapper from './../Wrapper/index.js'
import API from './../../utils/API.js'
import BookDetail from './../BookDetail.js'
import SearchBox from './../SearchBox/index.js'

class Search extends React.Component {
    state = {
        results: [],
        search: ''
    }
    componentDidMount() {
        this.searchBook('Hyperion')
    }
    searchBook = (query) => {
        console.log(query)
        API.search(query)
            .then(results => results.json())
            .then(res => {
                console.log('results', res.items)
                this.setState({ results: res.items })
            })
            .catch(err => console.log(err))
    }
    saveBook = (event) => {
        event.persist()
        console.log(event.target)
        let saved = {}
        for (let book of this.state.results) {
            if (event.target.id === book.id) {
                saved = book
            }
        saved.saved = true
        }
        console.log('saved book', saved)
        fetch('/api/books', {
            method: 'POST',
            body: JSON.stringify(saved),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(results => results.json())
            .then(data => {
                alert('Book Saved')
                event.target.disabled = true
                event.target.innerText = 'Saved'
            })
    }
    handleInputChange = (event) => {
        event.preventDefault()
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
        console.log(this.state.search)
    };
    handleFormSubmit = (event) => {
        event.preventDefault();
        this.searchBook(this.state.search);
        console.log('submit results', this.state.results)
    };
    render() {
        console.log('render', this.state.results)
        return (
            <Wrapper>
                <h2 className='jumbotron text-center'>Search for a Book</h2>
                <SearchBox
                    handleInputChange={this.handleInputChange}
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                />
                {/* <SearchButton
                    handleFormSubmit={this.handleFormSubmit}
                /> */}
                <BookDetail
                    results={this.state.results}
                    saveBook={this.saveBook}
                />
            </Wrapper>
        );
    }
}

export default Search;