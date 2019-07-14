// import APIKEY from './keys.js'
const BASEURL = 'https://www.googleapis.com/books/v1/volumes?q='

export default {
    search: function (query) {
        return fetch(BASEURL + query)
    }
}