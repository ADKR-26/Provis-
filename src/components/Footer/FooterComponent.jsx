import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

const FooterComponent = () => {
    return (
        <footer className="footer text-white py-5">
            <Container>
                <Row>
                    <Col md={6} className="w-100" style={{ maxWidth: "280px" }}>
                        <h5>
                            Ship
                            <span
                                style={{
                                    color: "#F67366",
                                    // fontSize: "24px",
                                    // fontStyle: "normal",
                                    // fontWeight: 900,
                                    // lineHeight: "normal",
                                }}
                            >
                                Up
                            </span>
                        </h5>
                        <p className="w-100 p-1" style={{ maxWidth: "280px" }}>
                            ShipUp delivers an unparalleled customer service
                            through dedicated customer teams, engaged people
                            working in an agile culture, and a global footprint.
                        </p>
                    </Col>
                    <Col md={3}>
                        <h5>Explore</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a
                                    href="#"
                                    className="text-white text-decoration-none"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white text-decoration-none"
                                >
                                    Our Warehouses
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white text-decoration-none"
                                >
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white text-decoration-none"
                                >
                                    News and Media
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5>Legal</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a
                                    href="#"
                                    className="text-white text-decoration-none"
                                >
                                    Terms
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white text-decoration-none"
                                >
                                    Privacy
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5>Social Media</h5>
                        <Row className="flex">
                            <Col>
                                <a
                                    href="#"
                                    className="text-decoration-none"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        style={{
                                            backgroundColor: "#F4F6F9",
                                            borderRadius: "20px",
                                        }}
                                        viewBox="0 0 30 30"
                                        fill="none"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M16.0635 22.8197V14.6589H18.3162L18.6147 11.8466H16.0635L16.0673 10.4391C16.0673 9.70559 16.137 9.31257 17.1905 9.31257H18.5988V6.5H16.3457C13.6395 6.5 12.6869 7.86425 12.6869 10.1585V11.8469H11V14.6592H12.6869V22.8197H16.0635Z"
                                            fill="url(#paint0_linear_1_2504)"
                                        />
                                        <mask
                                            id="mask0_1_2504"
                                            // style="mask-type:luminance"
                                            maskUnits="userSpaceOnUse"
                                            x="11"
                                            y="6"
                                            width="8"
                                            height="17"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M16.0635 22.8197V14.6589H18.3162L18.6147 11.8466H16.0635L16.0673 10.4391C16.0673 9.70559 16.137 9.31257 17.1905 9.31257H18.5988V6.5H16.3457C13.6395 6.5 12.6869 7.86425 12.6869 10.1585V11.8469H11V14.6592H12.6869V22.8197H16.0635Z"
                                                fill="white"
                                            />
                                        </mask>
                                        <g mask="url(#mask0_1_2504)">
                                            <rect
                                                width="30"
                                                height="30"
                                                fill="url(#paint1_linear_1_2504)"
                                            />
                                        </g>
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear_1_2504"
                                                x1="11"
                                                y1="14.6598"
                                                x2="18.6147"
                                                y2="14.6598"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#2C2D5B" />
                                                <stop
                                                    offset="1"
                                                    stopColor="#9FA1FF"
                                                />
                                            </linearGradient>
                                            <linearGradient
                                                id="paint1_linear_1_2504"
                                                x1="0"
                                                y1="15"
                                                x2="30"
                                                y2="15"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#2C2D5B" />
                                                <stop
                                                    offset="1"
                                                    stopColor="#9FA1FF"
                                                />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </a>
                            </Col>
                            <Col>
                                <a href="#">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{
                                            backgroundColor: "#F4F6F9",
                                            borderRadius: "20px",
                                        }}
                                        width="30"
                                        height="30"
                                        viewBox="0 0 30 30"
                                        fill="none"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M14.5508 12.1922L14.5822 12.7112L14.0576 12.6477C12.148 12.404 10.4798 11.5778 9.06334 10.1902L8.37085 9.50169L8.19248 10.0101C7.81477 11.1435 8.05609 12.3405 8.843 13.1455C9.26269 13.5904 9.16826 13.654 8.4443 13.3891C8.19248 13.3044 7.97215 13.2408 7.95116 13.2726C7.87772 13.3468 8.12953 14.3107 8.32888 14.692C8.60168 15.2217 9.15777 15.7407 9.76631 16.0479L10.2804 16.2915L9.67188 16.3021C9.08432 16.3021 9.06334 16.3127 9.12629 16.5351C9.33613 17.2236 10.165 17.9545 11.0883 18.2723L11.7388 18.4947L11.1723 18.8337C10.3329 19.321 9.34663 19.5964 8.36036 19.6175C7.88821 19.6281 7.5 19.6705 7.5 19.7023C7.5 19.8082 8.78005 20.4014 9.52499 20.6344C11.7598 21.3229 14.4144 21.0264 16.4079 19.8506C17.8243 19.0138 19.2408 17.3507 19.9018 15.7407C20.2585 14.8827 20.6152 13.315 20.6152 12.5629C20.6152 12.0757 20.6467 12.0121 21.2343 11.4295C21.5805 11.0906 21.9058 10.7198 21.9687 10.6139C22.0737 10.4126 22.0632 10.4126 21.5281 10.5927C20.6362 10.9105 20.5103 10.8681 20.951 10.3915C21.2762 10.0525 21.6645 9.43813 21.6645 9.25806C21.6645 9.22628 21.5071 9.27924 21.3287 9.37458C21.1398 9.4805 20.7202 9.63939 20.4054 9.73472L19.8388 9.91479L19.3247 9.56524C19.0414 9.37458 18.6427 9.16273 18.4329 9.09917C17.8978 8.95087 17.0794 8.97206 16.5967 9.14154C15.2852 9.6182 14.4563 10.8469 14.5508 12.1922Z"
                                            fill="url(#paint0_linear_1_2511)"
                                        />
                                        <mask
                                            id="mask0_1_2511"
                                            // style="mask-type:luminance"
                                            maskUnits="userSpaceOnUse"
                                            x="7"
                                            y="9"
                                            width="16"
                                            height="12"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M14.5508 12.1922L14.5822 12.7112L14.0576 12.6477C12.148 12.404 10.4798 11.5778 9.06334 10.1902L8.37085 9.50169L8.19248 10.0101C7.81477 11.1435 8.05609 12.3405 8.843 13.1455C9.26269 13.5904 9.16826 13.654 8.4443 13.3891C8.19248 13.3044 7.97215 13.2408 7.95116 13.2726C7.87772 13.3468 8.12953 14.3107 8.32888 14.692C8.60168 15.2217 9.15777 15.7407 9.76631 16.0479L10.2804 16.2915L9.67188 16.3021C9.08432 16.3021 9.06334 16.3127 9.12629 16.5351C9.33613 17.2236 10.165 17.9545 11.0883 18.2723L11.7388 18.4947L11.1723 18.8337C10.3329 19.321 9.34663 19.5964 8.36036 19.6175C7.88821 19.6281 7.5 19.6705 7.5 19.7023C7.5 19.8082 8.78005 20.4014 9.52499 20.6344C11.7598 21.3229 14.4144 21.0264 16.4079 19.8506C17.8243 19.0138 19.2408 17.3507 19.9018 15.7407C20.2585 14.8827 20.6152 13.315 20.6152 12.5629C20.6152 12.0757 20.6467 12.0121 21.2343 11.4295C21.5805 11.0906 21.9058 10.7198 21.9687 10.6139C22.0737 10.4126 22.0632 10.4126 21.5281 10.5927C20.6362 10.9105 20.5103 10.8681 20.951 10.3915C21.2762 10.0525 21.6645 9.43813 21.6645 9.25806C21.6645 9.22628 21.5071 9.27924 21.3287 9.37458C21.1398 9.4805 20.7202 9.63939 20.4054 9.73472L19.8388 9.91479L19.3247 9.56524C19.0414 9.37458 18.6427 9.16273 18.4329 9.09917C17.8978 8.95087 17.0794 8.97206 16.5967 9.14154C15.2852 9.6182 14.4563 10.8469 14.5508 12.1922Z"
                                                fill="white"
                                            />
                                        </mask>
                                        <g mask="url(#mask0_1_2511)">
                                            <rect
                                                width="30"
                                                height="30"
                                                fill="url(#paint1_linear_1_2511)"
                                            />
                                        </g>
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear_1_2511"
                                                x1="7.5"
                                                y1="15"
                                                x2="22.021"
                                                y2="15"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#2C2D5B" />
                                                <stop
                                                    offset="1"
                                                    stopColor="#9FA1FF"
                                                />
                                            </linearGradient>
                                            <linearGradient
                                                id="paint1_linear_1_2511"
                                                x1="0"
                                                y1="15"
                                                x2="30"
                                                y2="15"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#2C2D5B" />
                                                <stop
                                                    offset="1"
                                                    stopColor="#9FA1FF"
                                                />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </a>
                            </Col>
                            <Col>
                                <a href="#">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{
                                            backgroundColor: "#F4F6F9",
                                            borderRadius: "20px",
                                        }}
                                        width="30"
                                        height="30"
                                        viewBox="0 0 30 30"
                                        fill="none"
                                    >
                                        <path
                                            d="M6.00361 24L7.22041 19.5288C6.41864 18.1544 5.9974 16.5912 6.00001 15C6.00001 10.0293 10.0293 6 15 6C19.9707 6 24 10.0293 24 15C24 19.9707 19.9707 24 15 24C13.4095 24.0026 11.847 23.5816 10.473 22.7805L6.00361 24ZM11.7519 10.7772C11.6357 10.7844 11.5221 10.815 11.418 10.8672C11.3204 10.9225 11.2313 10.9916 11.1534 11.0724C11.0454 11.1741 10.9842 11.2623 10.9185 11.3478C10.5859 11.7807 10.407 12.3121 10.41 12.858C10.4118 13.299 10.527 13.7283 10.707 14.1297C11.0751 14.9415 11.6808 15.801 12.4809 16.5975C12.6735 16.7892 12.8616 16.9818 13.0641 17.1609C14.0572 18.0352 15.2405 18.6657 16.5201 19.0023L17.0322 19.0806C17.1987 19.0896 17.3652 19.077 17.5326 19.0689C17.7947 19.0554 18.0507 18.9844 18.2823 18.861C18.4002 18.8003 18.5152 18.7342 18.627 18.663C18.627 18.663 18.6657 18.6378 18.7395 18.582C18.861 18.492 18.9357 18.4281 19.0365 18.3228C19.1112 18.2454 19.176 18.1545 19.2255 18.051C19.2957 17.9043 19.3659 17.6244 19.3947 17.3913C19.4163 17.2131 19.41 17.1159 19.4073 17.0556C19.4037 16.9593 19.3236 16.8594 19.2363 16.8171L18.7125 16.5822C18.7125 16.5822 17.9295 16.2411 17.4516 16.0233C17.4012 16.0013 17.3472 15.9888 17.2923 15.9864C17.2307 15.9801 17.1685 15.987 17.1098 16.0067C17.0512 16.0264 16.9974 16.0585 16.9521 16.1007V16.0989C16.9476 16.0989 16.8873 16.1502 16.2366 16.9386C16.1993 16.9888 16.1478 17.0267 16.0888 17.0475C16.0298 17.0684 15.966 17.0712 15.9054 17.0556C15.8468 17.0399 15.7893 17.0201 15.7335 16.9962C15.6219 16.9494 15.5832 16.9314 15.5067 16.8981L15.5022 16.8963C14.9873 16.6715 14.5106 16.3679 14.0892 15.9963C13.9758 15.8973 13.8705 15.7893 13.7625 15.6849C13.4084 15.3458 13.0999 14.9622 12.8445 14.5437L12.7914 14.4582C12.7533 14.4007 12.7224 14.3388 12.6996 14.2737C12.6654 14.1414 12.7545 14.0352 12.7545 14.0352C12.7545 14.0352 12.9732 13.7958 13.0749 13.6662C13.1596 13.5585 13.2386 13.4464 13.3116 13.3305C13.4178 13.1595 13.4511 12.984 13.3953 12.8481C13.1433 12.2325 12.8823 11.6196 12.6141 11.0112C12.561 10.8906 12.4035 10.8042 12.2604 10.7871C12.2118 10.7817 12.1632 10.7763 12.1146 10.7727C11.9937 10.7667 11.8726 10.7679 11.7519 10.7763V10.7772Z"
                                            fill="black"
                                        />
                                        <mask
                                            id="mask0_1_2518"
                                            // style="mask-type:luminance"
                                            maskUnits="userSpaceOnUse"
                                            x="6"
                                            y="6"
                                            width="18"
                                            height="18"
                                        >
                                            <path
                                                d="M6.00361 24L7.22041 19.5288C6.41864 18.1544 5.9974 16.5912 6.00001 15C6.00001 10.0293 10.0293 6 15 6C19.9707 6 24 10.0293 24 15C24 19.9707 19.9707 24 15 24C13.4095 24.0026 11.847 23.5816 10.473 22.7805L6.00361 24ZM11.7519 10.7772C11.6357 10.7844 11.5221 10.815 11.418 10.8672C11.3204 10.9225 11.2313 10.9916 11.1534 11.0724C11.0454 11.1741 10.9842 11.2623 10.9185 11.3478C10.5859 11.7807 10.407 12.3121 10.41 12.858C10.4118 13.299 10.527 13.7283 10.707 14.1297C11.0751 14.9415 11.6808 15.801 12.4809 16.5975C12.6735 16.7892 12.8616 16.9818 13.0641 17.1609C14.0572 18.0352 15.2405 18.6657 16.5201 19.0023L17.0322 19.0806C17.1987 19.0896 17.3652 19.077 17.5326 19.0689C17.7947 19.0554 18.0507 18.9844 18.2823 18.861C18.4002 18.8003 18.5152 18.7342 18.627 18.663C18.627 18.663 18.6657 18.6378 18.7395 18.582C18.861 18.492 18.9357 18.4281 19.0365 18.3228C19.1112 18.2454 19.176 18.1545 19.2255 18.051C19.2957 17.9043 19.3659 17.6244 19.3947 17.3913C19.4163 17.2131 19.41 17.1159 19.4073 17.0556C19.4037 16.9593 19.3236 16.8594 19.2363 16.8171L18.7125 16.5822C18.7125 16.5822 17.9295 16.2411 17.4516 16.0233C17.4012 16.0013 17.3472 15.9888 17.2923 15.9864C17.2307 15.9801 17.1685 15.987 17.1098 16.0067C17.0512 16.0264 16.9974 16.0585 16.9521 16.1007V16.0989C16.9476 16.0989 16.8873 16.1502 16.2366 16.9386C16.1993 16.9888 16.1478 17.0267 16.0888 17.0475C16.0298 17.0684 15.966 17.0712 15.9054 17.0556C15.8468 17.0399 15.7893 17.0201 15.7335 16.9962C15.6219 16.9494 15.5832 16.9314 15.5067 16.8981L15.5022 16.8963C14.9873 16.6715 14.5106 16.3679 14.0892 15.9963C13.9758 15.8973 13.8705 15.7893 13.7625 15.6849C13.4084 15.3458 13.0999 14.9622 12.8445 14.5437L12.7914 14.4582C12.7533 14.4007 12.7224 14.3388 12.6996 14.2737C12.6654 14.1414 12.7545 14.0352 12.7545 14.0352C12.7545 14.0352 12.9732 13.7958 13.0749 13.6662C13.1596 13.5585 13.2386 13.4464 13.3116 13.3305C13.4178 13.1595 13.4511 12.984 13.3953 12.8481C13.1433 12.2325 12.8823 11.6196 12.6141 11.0112C12.561 10.8906 12.4035 10.8042 12.2604 10.7871C12.2118 10.7817 12.1632 10.7763 12.1146 10.7727C11.9937 10.7667 11.8726 10.7679 11.7519 10.7763V10.7772Z"
                                                fill="white"
                                            />
                                        </mask>
                                        <g mask="url(#mask0_1_2518)">
                                            <rect
                                                x="1"
                                                y="1"
                                                width="30"
                                                height="30"
                                                fill="url(#paint0_linear_1_2518)"
                                            />
                                        </g>
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear_1_2518"
                                                x1="1"
                                                y1="16"
                                                x2="31"
                                                y2="16"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#2C2D5B" />
                                                <stop
                                                    offset="1"
                                                    stopColor="#9FA1FF"
                                                />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </a>
                            </Col>
                            <Col>
                                <a href="#">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{ backgroundColor: "#F4F6F9", borderRadius: "20px" }}
                                        width="30"
                                        height="30"
                                        viewBox="0 0 30 30"
                                        fill="none"
                                    >
                                        <path
                                            d="M14.9977 11.9987C13.3451 11.9987 11.9965 13.3474 11.9965 15C11.9965 16.6526 13.3451 18.0013 14.9977 18.0013C16.6504 18.0013 17.999 16.6526 17.999 15C17.999 13.3474 16.6504 11.9987 14.9977 11.9987ZM23.9993 15C23.9993 13.7572 24.0106 12.5256 23.9408 11.285C23.871 9.84402 23.5423 8.56515 22.4886 7.51144C21.4326 6.45548 20.156 6.12901 18.715 6.05921C17.4722 5.98941 16.2406 6.00067 15 6.00067C13.7572 6.00067 12.5256 5.98941 11.285 6.05921C9.84402 6.12901 8.56515 6.45773 7.51144 7.51144C6.45548 8.5674 6.12901 9.84402 6.05921 11.285C5.98941 12.5278 6.00067 13.7594 6.00067 15C6.00067 16.2406 5.98941 17.4744 6.05921 18.715C6.12901 20.156 6.45773 21.4348 7.51144 22.4886C8.5674 23.5445 9.84402 23.871 11.285 23.9408C12.5278 24.0106 13.7594 23.9993 15 23.9993C16.2428 23.9993 17.4744 24.0106 18.715 23.9408C20.156 23.871 21.4349 23.5423 22.4886 22.4886C23.5445 21.4326 23.871 20.156 23.9408 18.715C24.0128 17.4744 23.9993 16.2428 23.9993 15ZM14.9977 19.6179C12.4423 19.6179 10.3799 17.5555 10.3799 15C10.3799 12.4445 12.4423 10.3821 14.9977 10.3821C17.5532 10.3821 19.6156 12.4445 19.6156 15C19.6156 17.5555 17.5532 19.6179 14.9977 19.6179ZM19.8047 11.2715C19.2081 11.2715 18.7263 10.7897 18.7263 10.193C18.7263 9.59635 19.2081 9.11452 19.8047 9.11452C20.4014 9.11452 20.8832 9.59635 20.8832 10.193C20.8834 10.3347 20.8556 10.475 20.8015 10.6059C20.7474 10.7369 20.6679 10.8558 20.5677 10.956C20.4676 11.0562 20.3486 11.1356 20.2177 11.1897C20.0867 11.2439 19.9464 11.2717 19.8047 11.2715Z"
                                            fill="black"
                                        />
                                        <mask
                                            id="mask0_1_2526"
                                            // style="mask-type:luminance"
                                            maskUnits="userSpaceOnUse"
                                            x="6"
                                            y="6"
                                            width="19"
                                            height="18"
                                        >
                                            <path
                                                d="M14.9977 11.9987C13.3451 11.9987 11.9965 13.3474 11.9965 15C11.9965 16.6526 13.3451 18.0013 14.9977 18.0013C16.6504 18.0013 17.999 16.6526 17.999 15C17.999 13.3474 16.6504 11.9987 14.9977 11.9987ZM23.9993 15C23.9993 13.7572 24.0106 12.5256 23.9408 11.285C23.871 9.84402 23.5423 8.56515 22.4886 7.51144C21.4326 6.45548 20.156 6.12901 18.715 6.05921C17.4722 5.98941 16.2406 6.00067 15 6.00067C13.7572 6.00067 12.5256 5.98941 11.285 6.05921C9.84402 6.12901 8.56515 6.45773 7.51144 7.51144C6.45548 8.5674 6.12901 9.84402 6.05921 11.285C5.98941 12.5278 6.00067 13.7594 6.00067 15C6.00067 16.2406 5.98941 17.4744 6.05921 18.715C6.12901 20.156 6.45773 21.4348 7.51144 22.4886C8.5674 23.5445 9.84402 23.871 11.285 23.9408C12.5278 24.0106 13.7594 23.9993 15 23.9993C16.2428 23.9993 17.4744 24.0106 18.715 23.9408C20.156 23.871 21.4349 23.5423 22.4886 22.4886C23.5445 21.4326 23.871 20.156 23.9408 18.715C24.0128 17.4744 23.9993 16.2428 23.9993 15ZM14.9977 19.6179C12.4423 19.6179 10.3799 17.5555 10.3799 15C10.3799 12.4445 12.4423 10.3821 14.9977 10.3821C17.5532 10.3821 19.6156 12.4445 19.6156 15C19.6156 17.5555 17.5532 19.6179 14.9977 19.6179ZM19.8047 11.2715C19.2081 11.2715 18.7263 10.7897 18.7263 10.193C18.7263 9.59635 19.2081 9.11452 19.8047 9.11452C20.4014 9.11452 20.8832 9.59635 20.8832 10.193C20.8834 10.3347 20.8556 10.475 20.8015 10.6059C20.7474 10.7369 20.6679 10.8558 20.5677 10.956C20.4676 11.0562 20.3486 11.1356 20.2177 11.1897C20.0867 11.2439 19.9464 11.2717 19.8047 11.2715Z"
                                                fill="white"
                                            />
                                        </mask>
                                        <g mask="url(#mask0_1_2526)">
                                            <rect
                                                x="-1.97534"
                                                y="-2.97363"
                                                width="30"
                                                height="30"
                                                fill="url(#paint0_linear_1_2526)"
                                            />
                                        </g>
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear_1_2526"
                                                x1="-1.97534"
                                                y1="12.0264"
                                                x2="28.0247"
                                                y2="12.0264"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#2C2D5B" />
                                                <stop
                                                    offset="1"
                                                    stopColor="#9FA1FF"
                                                />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="text-center text-white border-top pt-3">
                    <Col>
                        Ship
                        <span
                            style={{
                                color: "#F67366",
                                // fontSize: "24px",
                                // fontStyle: "normal",
                                // fontWeight: 900,
                                // lineHeight: "normal",
                            }}
                        >
                            Up
                        </span>
                        .ng
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default FooterComponent;
