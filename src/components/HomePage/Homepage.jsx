import { Container, Row, Col, Image, Button, Modal } from "react-bootstrap";
import "./style.css";

import ScooterImg from "../../assets/scooter.png";
import { useState } from "react";

const Homepage = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    return (
        <Container
            style={
                {
                    // marginTop: "10px",
                    // marginLeft: "75px",
                    // marginRight: "75px",
                }
            }
        >
            <Row>
                <Col md={6} style={{ marginTop: "100px" }}>
                    <span className="fs-1 ">
                        Quick & reliable &nbsp;
                        <span
                            style={{
                                color: "#F67366",
                                // fontSize: "24px",
                                // fontStyle: "normal",
                                // fontWeight: 900,
                                // lineHeight: "normal",
                            }}
                        >
                            Warehousing and Logistics{" "}
                        </span>
                        solution.
                    </span>
                    <br />
                    <p className="fs-12 ">
                        ShipUp delivers an unparalleled customer service through
                        dedicated customer teams, engaged people working in an
                        agile culture, and a global footprint
                    </p>
                    <Row className="gx-0">
                        <Col>
                            <Button
                                variant="outline-dark"
                                className="d-flex px-4 text-white py-2 justify-content-center align-items-center gap-2 bg-dark"
                                style={{
                                    borderRadius: "12px",
                                    background: "var(--simblue, #2C2D5B)",
                                    display: "flex",
                                    padding: "20px 40px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "10px",
                                }}
                            >
                                Check Price
                            </Button>
                        </Col>
                        <Col>
                            <Button
                                variant="outline-dark rounded-5"
                                onClick={handleShow}
                                id="playButton"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25"
                                    height="25"
                                    viewBox="0 0 29 29"
                                    fill="none"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M7.78887 5.95001H14.3918C17.1529 5.95001 19.0807 7.85271 19.0807 10.5795V18.4206C19.0807 21.1473 17.1529 23.05 14.3918 23.05H7.78887C5.02776 23.05 3.1 21.1473 3.1 18.4206V10.5795C3.1 7.85271 5.02776 5.95001 7.78887 5.95001ZM23.5721 8.66205C24.0725 8.40743 24.6597 8.43405 25.1373 8.73497C25.615 9.03472 25.9 9.55554 25.9 10.125V18.8758C25.9 19.4463 25.615 19.966 25.1373 20.2657C24.8763 20.4289 24.5844 20.5123 24.2903 20.5123C24.0452 20.5123 23.8001 20.4544 23.5709 20.3375L21.8826 19.4857C21.2579 19.1686 20.8703 18.532 20.8703 17.8249V11.1747C20.8703 10.4664 21.2579 9.82983 21.8826 9.51503L23.5721 8.66205Z"
                                        fill="#2C2D5B"
                                    />
                                </svg>
                                {/* Play */}
                            </Button>
                            <label htmlFor="playButton" className="mx-1">Play Demo</label>
                            <Modal
                                show={showModal}
                                onHide={handleClose}
                                size="lg"
                                centered
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>YouTube Video</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    {/* Embed YouTube video here */}
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe
                                            className="embed-responsive-item"
                                            src="https://www.youtube.com/embed/VIDEO_ID"
                                            allowFullScreen
                                            title="YouTube Video"
                                        ></iframe>
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} className="text-center">
                    <Image
                        src={ScooterImg}
                        alt="Image"
                        rounded
                        // style={{ maxWidth: "700px", height: "594px" }}
                        className="image mx-auto d-block img-fluid"
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default Homepage;
