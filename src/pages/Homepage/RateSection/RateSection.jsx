import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Avatar1 from '../../../images/avatar1.png'
import Avatar2 from '../../../images/avatar2.png'
import Avatar3 from '../../../images/avatar3.png'
import './RateSection.css';

function RateSection() {
    const [stars, setStars] = useState([1, 2, 3, 4, 5])
    return(
        <Container id="rate-section" className="text-center">
            <h4>Students love Kandor!</h4>

            <Row className="mx-0">
                <Col md={4} className="mb-4 mb-md-0">
                    {stars.map((item, index) => {
                        return (
                            <svg key={index} width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.4827 6.63374C16.4236 6.49468 16.2871 6.40436 16.1359 6.40436H11.5411L9.38233 1.78706C9.32034 1.65444 9.18735 1.56982 9.04112 1.56982C8.89489 1.56982 8.7619 1.65444 8.69991 1.78706L6.54117 6.40436H1.94631C1.79511 6.40436 1.65863 6.49468 1.59958 6.63374C1.54053 6.7728 1.57015 6.93375 1.67518 7.04264L5.07773 10.5714L3.70939 16.0447C3.67279 16.1912 3.72705 16.3453 3.84735 16.4364C3.96764 16.5274 4.1308 16.5379 4.26177 16.4632L9.04112 13.732L13.8205 16.4632C13.8786 16.4965 13.943 16.5129 14.0074 16.5129C14.0877 16.5129 14.1679 16.4871 14.2349 16.4364C14.3552 16.3453 14.4095 16.1912 14.3728 16.0447L13.0045 10.5714L16.4071 7.04264C16.5121 6.93374 16.5417 6.7728 16.4827 6.63374Z" fill="#EFD358"/>
                            </svg>
                        )
                    })}

                    <blockquote className="mb-0">
                        <q>Accurate speaking feedback</q>
                    </blockquote>

                    <img src={Avatar1} alt="avatar1"/>
                </Col>

                <Col md={4} className="mb-4 mb-md-0">
                    {stars.map((item, index) => {
                        return (
                            <svg key={index} width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.4827 6.63374C16.4236 6.49468 16.2871 6.40436 16.1359 6.40436H11.5411L9.38233 1.78706C9.32034 1.65444 9.18735 1.56982 9.04112 1.56982C8.89489 1.56982 8.7619 1.65444 8.69991 1.78706L6.54117 6.40436H1.94631C1.79511 6.40436 1.65863 6.49468 1.59958 6.63374C1.54053 6.7728 1.57015 6.93375 1.67518 7.04264L5.07773 10.5714L3.70939 16.0447C3.67279 16.1912 3.72705 16.3453 3.84735 16.4364C3.96764 16.5274 4.1308 16.5379 4.26177 16.4632L9.04112 13.732L13.8205 16.4632C13.8786 16.4965 13.943 16.5129 14.0074 16.5129C14.0877 16.5129 14.1679 16.4871 14.2349 16.4364C14.3552 16.3453 14.4095 16.1912 14.3728 16.0447L13.0045 10.5714L16.4071 7.04264C16.5121 6.93374 16.5417 6.7728 16.4827 6.63374Z" fill="#EFD358"/>
                            </svg>
                        )
                    })}

                    <blockquote className="mb-0">
                        <q>Accurate speaking feedback</q>
                    </blockquote>

                    <img src={Avatar2} alt="avatar1"/>
                </Col>

                <Col md={4}>
                    {stars.map((item, index) => {
                        return (
                            <svg key={index} width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.4827 6.63374C16.4236 6.49468 16.2871 6.40436 16.1359 6.40436H11.5411L9.38233 1.78706C9.32034 1.65444 9.18735 1.56982 9.04112 1.56982C8.89489 1.56982 8.7619 1.65444 8.69991 1.78706L6.54117 6.40436H1.94631C1.79511 6.40436 1.65863 6.49468 1.59958 6.63374C1.54053 6.7728 1.57015 6.93375 1.67518 7.04264L5.07773 10.5714L3.70939 16.0447C3.67279 16.1912 3.72705 16.3453 3.84735 16.4364C3.96764 16.5274 4.1308 16.5379 4.26177 16.4632L9.04112 13.732L13.8205 16.4632C13.8786 16.4965 13.943 16.5129 14.0074 16.5129C14.0877 16.5129 14.1679 16.4871 14.2349 16.4364C14.3552 16.3453 14.4095 16.1912 14.3728 16.0447L13.0045 10.5714L16.4071 7.04264C16.5121 6.93374 16.5417 6.7728 16.4827 6.63374Z" fill="#EFD358"/>
                            </svg>
                        )
                    })}

                    <blockquote className="mb-0">
                        <q>Accurate speaking feedback</q>
                    </blockquote>

                    <img src={Avatar3} alt="avatar1"/>
                </Col>
            </Row>
        </Container>
    )
}

export default RateSection;