import React from 'react'
import Wrapper from './../Wrapper/index.js'
import API from './../../utils/API.js'
import BookDetail from './../BookDetail.js'
import SearchBox from './../SearchBox/index.js'
import SearchButton from './../SearchButton/index.js'

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
                this.setState({results: res.items})
            })
            .catch(err => console.log(err))
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
                <BookDetail results={this.state.results} />
            </Wrapper>
        );
    }
}

export default Search;