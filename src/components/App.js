// بسم الله الرحمن الرحيم

import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import MovieCard from "./MovieCard";
import NavBar from "./NavBar";
import "./App.css";
import axios from "axios";

function App() {
    const [movies, setMovies] = useState([]);
    const [pageNumber, setPageNumber] = useState(1)
    const [pageCount, setPageCount] = useState(0);

    const config = {
        headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjQwYWVlZTdkZGI0OGUzY2U3ZTc4ZDI0NzQzYjAxMSIsInN1YiI6IjY1MzM2NDlhYWJkYWZjMDEyZGE4ODYyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RrYAqyqBxpfv8kTtvl5BTc9lpsNJIbav62Dl2YPIslo` }
    };

    const fetchingData = async () => {
        const res = await axios.get("https://api.themoviedb.org/3/movie/popular?language=ar&page="+pageNumber, config);
        setMovies(res.data.results);
        setPageCount(res.data.total_pages)
    }

    useEffect(() => {
        fetchingData();

    }, [pageNumber]);

    async function handleSubmit(search){

        if(search !== "") {
            const res = await axios.get("https://api.themoviedb.org/3/search/movie?language=ar&query="+search+"&page=1", config);
            setMovies(res.data.results)
            setPageCount(res.data.total_pages);
        }
        else {
            setMovies(movies);
        }

    }

    async function handlePageClick (data) {
        const res = await axios.get("https://api.themoviedb.org/3/movie/popular?language=en-US&page="+pageNumber, config);
        setPageCount(res.data.total_pages);
        setPageNumber(data.selected + 1)
    }

    return (
        <div>
            <NavBar handleSubmit={handleSubmit} />
            {/* فلسطين حرة */}

            <Container style={{padding: "0"}}>
                <MovieCard movies={movies} setPageNumber={setPageNumber} handlePageClick={handlePageClick} pageCount={pageCount}/>
            </Container>
        </div>
    );
}


export default App;

// الله اكبر