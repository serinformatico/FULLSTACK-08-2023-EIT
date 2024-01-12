// La siguiente línea de código, importa la hoja de estilos.
import { useState, useEffect } from "react";
import axios from "axios";
import "./app.scss";

const App = () => {
    const [ movies, setMovies ] = useState([]);
    const [ pageNumber, setPageNumber ] = useState(1);

    const URL_API = "https://api.themoviedb.org/3/movie/popular";
    const params = new URLSearchParams({
        // eslint-disable-next-line camelcase
        api_key: "7be72508776961f3948639fbd796bccd",
        page: pageNumber,
    });

    useEffect(() => {
        axios.get(`${URL_API}?${params}`)
            .then((response) => setMovies(response.data.results));
    }, [pageNumber]);

    const handleOnClickGoToOne = () => {
        setPageNumber(1);
    };

    const handleOnClickPrev = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber-1);
        }
    };

    const handleOnClickNext = () => {
        setPageNumber(pageNumber+1);
    };

    return (
        <>
            <header>
                <h1>Ejercicio de UseEffect & Axios</h1>
            </header>

            <main>
                <div>
                    <button onClick={handleOnClickGoToOne}>Ir a página 1</button>
                    <button onClick={handleOnClickPrev}>Anterior</button>
                    <span> {pageNumber} </span>
                    <button onClick={handleOnClickNext}>Siguiente</button>
                </div>
                <div>
                    <ul>
                        { movies.map((movie) => {
                            return (<li key={movie.id}>{movie.title}</li>);
                        }) }
                    </ul>
                </div>
            </main>

            <footer>
            Footer
            </footer>
        </>
    );
};

export default App;