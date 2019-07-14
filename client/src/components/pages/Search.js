import React from 'react'
import Wrapper from './../Wrapper/index.js'
import API from './../../utils/API.js'
import BookDetail from './../BookDetail.js'
import SearchBox from './../SearchBox/index.js'
import SearchButton from './../SearchButton/index.js'

class Search extends React.Component {
    state = {
        result: {},
        search: ''
    }
    searchBook = (query) => {
        console.log(query)
        API.search(query)
            .then(results => results.json())
            .then(res => {
                console.log('results', res.items)
            })
            .catch(err => console.log(err))
    }
    handleInputChange = (event) => {
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
    };
    renderBook = () => {
        let { Title, Author, Description, Image, Link } = this.state.result
        if (Title) {
            return (
                <BookDetail
                    title={Title}
                    image={Image}
                    description={Description}
                    author={Author}
                    link={Link}
                />
            )
        } else {
            return (<h3>No Results to Display</h3>)
        }
    }
    render() {
        return (
            <Wrapper>
                <h2 className='jumbotron text-center'>Search for a Book</h2>
                <SearchBox
                    handleInputChange={this.handleInputChange}
                    search={this.state.search}
                />
                <SearchButton
                    handleFormSubmit={this.handleFormSubmit}
                />
                {this.renderBook()}
            </Wrapper>
        );
    }
}

export default Search;