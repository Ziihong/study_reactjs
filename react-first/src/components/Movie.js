import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({coverImg, title, year, summary, genres}){
    return(
        <div>
            <img src={coverImg} alt={title}/>
            <h2><Link to="/movie">{title}</Link> ({year})</h2>
            <p>{summary}</p>
            <ul>
                {genres.map((genre) => <li id={genre}>{genre}</li>)}
            </ul>
        </div>
    )
}

Movie.propTyes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Movie;