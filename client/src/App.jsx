import { useState } from "react";
import axios from 'axios';

const App = () => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [total, setTotal] = useState(1)
    const [noData, setNoData] = useState(false);

    const posterUrl = 'https://image.tmdb.org/t/p/w500';

    const fetchMovies = async(query) => {
        if(!query) {
            setNoData(true);
        } else {
            setNoData(false);
            const response = await axios.request('http://localhost:8080/search', {params: {query: query}})
            .then(res => {
                setMovies(res.data.results)
                setTotal(res.data.total_results)
            })
            .catch(err => console.error(err));
        };
    };
    const searchMovies = (e) => {
        e.preventDefault();
        fetchMovies(query)
    };

    return (
        <div>
            <form onSubmit={searchMovies} id='formContainer'>
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Type in a movie name...'/>
                <button>search</button>
            </form>
            {noData ? <h3 id='warning'>Please type in a movie name</h3> : ''}
            <section id='moviesContainer'>
                {movies.length > 0 ? movies.map((movie) => ( 
                    <div key={movie.id} className='movieCard'>
                        <img alt='movie poster' src={movie.poster_path ? posterUrl + movie.poster_path : './noImage.jpg'}/>
                        <section className='movieData'>
                            <h3>{movie.title}</h3>
                            <p><b>Release date:</b> {movie.release_date}</p>
                            <p><b>Description:</b> {movie.overview}</p>
                        </section>
                    </div>
                )) 
                : total <= 0 ? <h3 className='waiting'>No matches found</h3>
                : <h3 className='waiting'>Waiting for input...</h3>}
            </section>
            
        </div>
    )
};

export default App;