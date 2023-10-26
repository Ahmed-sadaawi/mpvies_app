/* بسم الله الرحمن الرحيم */

import NavBar from "./NavBar";
import { Col, Container, Image, Row,Button} from "react-bootstrap";
import jasmin from "../images/jasmin.jpg";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";


function MovieDetails( ) {
    const [movieDetails, setMovieDetails] = useState({});
    const {id} = useParams();

    const config = {
        headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjQwYWVlZTdkZGI0OGUzY2U3ZTc4ZDI0NzQzYjAxMSIsInN1YiI6IjY1MzM2NDlhYWJkYWZjMDEyZGE4ODYyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RrYAqyqBxpfv8kTtvl5BTc9lpsNJIbav62Dl2YPIslo` }
    };
    async function fetchingDetails() {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=ar`, config);
        setMovieDetails(res.data);
        console.log(res.data)
    }

    useEffect(() => {
        fetchingDetails();
    }, []);


    return(
        <div>
            <NavBar />
            <Container>

            <Row className="mt-5 details-up rounded-3">
                <Col sm="3" className="d-flex justify-content-between p-0 ">
                    <a href={movieDetails.homepage}><Image src={"https://image.tmdb.org/t/p/original/"+movieDetails.poster_path} alt=""  width={320} height={420} className="rounded-end-3"/></a>
                </Col>
                <Col sm="9" className="d-flex flex-column justify-content-center align-items-center text-center borBottom">
                    <p><span style={{fontWeight: "bold", fontSize: "2rem"}}>اسم الفيلم:  </span>{movieDetails.title}</p>
                    <p><span style={{fontWeight: "bold", fontSize: "2rem"}}>تاريخ الاصدار:  </span>{movieDetails.release_date}</p>
                    <p><span style={{fontWeight: "bold", fontSize: "2rem"}}>التقييم:  </span>{movieDetails.vote_count}</p>
                </Col>
            </Row>

            <Row className="mt-2 details-up rounded-3">
                <Col sm="12" className="">
                    <h2>القصة: </h2>
                    <p>{movieDetails.overview}</p>
                </Col>
            </Row>
            <div className="text-center my-3 fs-5 ">
                <Link to="/" className="text-center text-bg-orange border-0 py-1 px-3 rounded-1 text-decoration-none ms-1">العودة الي الرئيسية</Link>
                <a href={movieDetails.homepage} className="text-center text-bg-orange border-0 py-1 px-3 rounded-1 text-decoration-none me-1">مشاهدة الفيلم</a>
            </div>

            </Container>
        </div>

    )
}
export default MovieDetails;
/* الله اكبر */