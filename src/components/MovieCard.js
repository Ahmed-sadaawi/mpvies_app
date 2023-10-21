/* بسم الله الرحمن الرحيم */

import {Col, Image, Row} from "react-bootstrap";

function MovieCard() {
    return (
        <Row className="d-flex flex-row justify-content-between my-5">

            <Col sm="3" className="col-card text-center  my-1">
                <Image src="preson.jpeg" alt="person-img"  width={320} height={420} className="card-img rounded-2"  />
                <div className="card-img-overlay bg-dark text-white d-flex flex-column justify-content-center align-items-center text-center img-hover rounded-2" >
                    <p>hello</p>
                    <p>hello</p>
                    <p>hello</p>
                    <p>hello</p>
                </div>
            </Col>

        </Row>

    )
}

export default MovieCard;
/* الله اكبر  فوق كيد المعتدي */