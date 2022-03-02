const Movie = (props) => {
    const { Title, Year, imdbID, Type, Poster } = props
    return (
        <div className="row">
            <div className="col s12 m7">
                <div className="card">
                    <div className="card-image">
                        <img src={Poster} />
                        <span className="card-title"></span>
                    </div>
                    <div className="card-content">
                        <p> {Title} {Year}</p>
                        <span className="right">{Type}</span>
                    </div>
                    <div className="card-action" className='right'>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Movie