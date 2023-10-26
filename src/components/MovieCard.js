/* بسم الله الرحمن الرحيم */

import {Col, Image, Row} from "react-bootstrap";
import Pagination from "./Pagination";
import {Link} from "react-router-dom";

function MovieCard({movies ,handlePageClick, pageCount}) {

    /*/ "اللهم انت تعلم ان هذه الصدقة ليست فرصاً علي ولكني اعلم انني ما خلقت الا لعبادتك...فاللهم تقبل مني صدقتي وعبادتي واحشرني مع النبي الكريم (ص) في الفردوس الاعلي من الجنه يا رب العالمين ، واسألك شفاءاً لعلتي وامراضي انك سميع قريب مجيب الدعاء يا رب العالمين ويا ارحم الراحمين*/

    return (
        <Row className="d-flex flex-row justify-content-between my-5">
            {movies.map(movie => (
                    <Col  key={movie.id} sm="3" className="col-card text-center  my-1">
                <Link to={`/movie/${movie.id}`}>
                        <Image src={"https://image.tmdb.org/t/p/original/" + movie.poster_path} alt="person-img"  width={320} height={420} className="card-img rounded-2"  />
                        <div className="card-img-overlay bg-dark text-white d-flex flex-column justify-content-center align-items-center text-center img-hover rounded-2" >
                            <p>اسم الفيلم: {movie.title}</p>
                            <p>تاريخ الاصدار: {movie.release_date}</p>
                            <p>التقييم: {movie.vote_count}</p>
                        </div>
                </Link>
                    </Col>
            ))}

            <Pagination handlePageClick={handlePageClick} pageCount={pageCount}/>
        </Row>
    )
}

export default MovieCard;
/* الله اكبر  فوق كيد المعتدي */