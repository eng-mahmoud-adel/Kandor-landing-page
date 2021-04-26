import Container from 'react-bootstrap/Container';
import BaseButton from '../../../components/Button/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Prompts from '../../../images/prompts.png'
import './PracticeSection.css';

function PracticeSection() {
    return(
        <Container id="practice-section" className="text-center">
            <Row className="practice justify-content-center">
                <h2>Daily prompts for practice!</h2>
                 <Col className="order-2 order-md-1">
                    <p>Practice the most popular questions asked in previous IELTS exams &amp; get better scores!</p>
                </Col>

                <Col className="order-1 order-md-2">
                    <div className="prompts-image mt-3 mt-md-5 mb-4 mb-md-0">
                        <img src={Prompts} className="w-100" alt="prompts"/>
                    </div>
                </Col>
            </Row>

            <Row className="lets-practice mt-3 mt-md-5">
                <h2 className="text-white mb-4">Let’s crack IELTS with Kandor!</h2>

                <Col xs={7} md={3} className="mx-auto">
                    <BaseButton text="Start practice" />
                </Col>
            </Row>
        </Container>
    )
}

export default PracticeSection;