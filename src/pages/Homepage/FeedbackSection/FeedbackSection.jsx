import Container from 'react-bootstrap/Container';
import BaseButton from '../../../components/Button/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './FeedbackSection.css';

function FeedbackSection() {
    return(
        <Container id="feedback-section" className="text-center">
            <Row>
                <Col xs={12} className="mb-4 mb-md-2">
                    <h2>Record &amp; get feedback in a minute!</h2>
                </Col>

                <Col xs={12} className="order-2 order-md-1">
                    <p className="mb-0 mb-md-5 order-2 order-md-1">You don’t need to wait for a speaking partner or learn a lot. Start practicing &amp; improve your score.</p>
                </Col>

                <Col xs={12} className="mb-3 mb-md-2 order-1 order-md-2">
                    <iframe src="https://www.youtube.com/embed/QmDMpHYXQp0" className="order-1 order-md-2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Col>
            </Row>

            <Col xs={12} md={3} className="mx-auto mt-3 mt-md-4">
                <BaseButton text="Start practice" color="primary" />
            </Col>
        </Container>
    )
}

export default FeedbackSection;