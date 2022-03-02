import Movies from "../components/Movies"
import React from "react"
import Preloader from "../components/Preloader"
import Search from "../components/Search"

const API_KEY = process.env.REACT_APP_API_KEY

console.log(API_KEY)

class Main extends React.Component {

    state = {
        movies: [],
        loading:true
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?s=star wars&apikey=${API_KEY}`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search ,loading:false}))
    }

    searchFilms = (str, type = 'all') => {
        this.setState({loading:true})
        fetch(`http://www.omdbapi.com/?s=${str}${type!=='All'?`&type=${type}`:''}&apikey=${API_KEY}`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search ,loading:false}))
    }


  


    render() {
        const { movies,loading } = this.state

        return <main className="container content">
            <Search searchFilms={this.searchFilms}  />
            { loading ?  <Preloader /> : <Movies movies={movies} /> }

        </main>
    }
}
export default Main