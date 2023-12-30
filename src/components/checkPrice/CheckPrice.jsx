import { Container, Row, Col, Button, Form } from "react-bootstrap";

import "./style.css";

const CheckPrice = () => {
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center gap-22 p-36 mb-5 mt-5">
            {/* Replace this placeholder with your actual content */}

            <Row className="rounded-5 bg-white shadow-lg p-4 w-100">
                <Col md={3}>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="origin" className="form-label">
                                Origin:
                            </label>
                            <input
                                type="text"
                                id="origin"
                                className="form-control"
                            />
                        </div>
                    </form>
                </Col>
                <Col md={3}>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="destination" className="form-label">
                                Destination:
                            </label>
                            <input
                                type="text"
                                id="destination"
                                className="form-control"
                            />
                        </div>
                    </form>
                </Col>
                <Col md={3}>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="weight" className="form-label">
                                Weight:
                            </label>
                            <input
                                type="text"
                                id="weight"
                                className="form-control"
                            />
                        </div>
                    </form>
                </Col>
                {/* </Row> */}
                {/* <Row> */}
                <Col>
                    <Button
                        variant="outline-dark"
                        className="d-flex px-4 py-2 justify-content-center align-items-center text-white"
                        style={{
                            transition: "background-color 0.3s",
                            marginTop: "20px",
                            width: "250px",
                            height: "100px",
                            borderRadius: "12px",
                            backgroundColor: "#2C2D5B"
                        }}
                    >
                        Check Price
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default CheckPrice;
