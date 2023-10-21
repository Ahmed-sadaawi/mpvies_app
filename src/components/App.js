// بسم الله الرحمن الرحيم

import {useEffect} from "react";
import {Container} from "react-bootstrap";
import MovieCard from "./MovieCard";
import NavBar from "./NavBar";
import "./App.css";
import axios from "axios";

function App() {
    const baseUrl = "https://api.themoviedb.org/3/movie/157336?api_key=2bfa8bde3fa1a2878328d94e5d23e8ae&page=1";
    const fetchingData = async () => {
        const res = await axios.get(baseUrl);

        console.log(res);
    }

    useEffect(() => {
        fetchingData();
    }, []);

    return (
        <div className="App">
            <NavBar />
            {/* فلسطين حرة */}

            <Container>
                <MovieCard />
            </Container>
            </div>
    );
}

export default App;

// الله اكبر