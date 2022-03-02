import React from "react";

class Search extends React.Component {


    state = {
        search: '',
        type: 'All'
    }

    hendleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchFilms(this.state.search,this.state.type)
        }
    }

    handleFilter = (event) => {
        this.setState(() =>({ type: event.target.value }),() =>{
                this.props.searchFilms(this.state.search,this.state.type)
        });
    }

    render() {

        return (
            <div className="row">
                <div className="input-field ">
                    <input
                        value={this.state.search}
                        id="first_name2"
                        type="search"
                        className="validate"
                        placeholder="Search"
                        onChange={(e) => this.setState({ search: e.target.value })}
                        onKeyDown={this.hendleKey}
                    />
                    <label className="active" for="first_name2">Enter a film</label>
                    <a onClick={() => this.props.searchFilms(this.state.search,this.state.type)} className="waves-effect waves-light btn">search</a>
                    <div className="radioBtnBox">
                        <label>
                            <input 
                            name="type" 
                            value='All' 
                            type="radio" 
                            onChange={this.handleFilter} 
                            checked={this.state.type==='All'}
                            />
                            <span>All</span>
                        </label>
                        <label>
                            <input 
                            name="type" 
                            value='movie' 
                            type="radio" 
                            onChange={this.handleFilter} 
                            checked={this.state.type==='movie'}
                            />
                            <span>Only films</span>
                        </label>
                        <label>
                            <input 
                            name="type" 
                            value='series' 
                            type="radio" 
                            onChange={this.handleFilter} 
                            checked={this.state.type==='series'}
                            />
                            <span>Only series</span>
                        </label>
                    </div>
                </div>
            </div >)
    }
}

export default Search 