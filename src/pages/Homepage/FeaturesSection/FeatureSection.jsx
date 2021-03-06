import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './FeatureSection.css';

function FeatureSection() {
    return(
        <Container id="feature-section" className="text-center">
            <h4 className="title mb-5"><b>Kandor features that our customers love!</b></h4>
            <Row>
                <Col md={4} className="mb-3 mb-md-5">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 5L13 1H3C1.895 1 1 1.895 1 3V37C1 39.209 2.791 41 5 41H43C45.209 41 47 39.209 47 37V9C47 6.791 45.209 5 43 5H17Z" fill="#F9D44C"/>
                        <path d="M47 11H1V3C1 1.895 1.895 1 3 1H13L17 5H43C45.209 5 47 6.791 47 9V11Z" fill="#C7AA3D"/>
                        <path d="M38 33C37.448 33 37 32.552 37 32V28C37 26.346 35.654 25 34 25C32.346 25 31 26.346 31 28V32C31 32.552 30.552 33 30 33C29.448 33 29 32.552 29 32V28C29 25.243 31.243 23 34 23C36.757 23 39 25.243 39 28V32C39 32.552 38.552 33 38 33Z" fill="#444444"/>
                        <path d="M41 47H27C25.895 47 25 46.105 25 45V33C25 31.895 25.895 31 27 31H41C42.105 31 43 31.895 43 33V45C43 46.105 42.105 47 41 47Z" fill="#E6E6E6"/>
                        <path d="M36 38C36 36.895 35.105 36 34 36C32.895 36 32 36.895 32 38C32 38.738 32.405 39.376 33 39.723V43H35V39.723C35.595 39.376 36 38.738 36 38Z" fill="#444444"/>
                    </svg>

                    <h4>100% Secure</h4>

                    <p>Recordings in video &amp; audio format are maintained in secure environments.</p>
                </Col>

                <Col md={4} className="mb-3 mb-md-5">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 47C5.48828 47 4.97607 46.8047 4.58594 46.4141C3.80469 45.6333 3.80469 44.3667 4.58594 43.5859L9.85889 38.313C10.6392 37.5317 11.9067 37.5317 12.687 38.313C13.4683 39.0937 13.4683 40.3603 12.687 41.1411L7.41406 46.4141C7.02393 46.8047 6.51172 47 6 47Z" fill="#335262"/>
                        <path d="M42 47C41.4883 47 40.9761 46.8047 40.5859 46.4141L35.313 41.1411C34.5317 40.3603 34.5317 39.0937 35.313 38.313C36.0933 37.5317 37.3608 37.5317 38.1411 38.313L43.4141 43.5859C44.1953 44.3667 44.1953 45.6333 43.4141 46.4141C43.0239 46.8047 42.5117 47 42 47Z" fill="#335262"/>
                        <path d="M24 45C33.9411 45 42 36.9411 42 27C42 17.0589 33.9411 9 24 9C14.0589 9 6 17.0589 6 27C6 36.9411 14.0589 45 24 45Z" fill="white"/>
                        <path d="M24 47C12.9722 47 4 38.0278 4 27C4 15.9722 12.9722 7 24 7C35.0278 7 44 15.9722 44 27C44 38.0278 35.0278 47 24 47ZM24 11C15.1777 11 8 18.1777 8 27C8 35.8223 15.1777 43 24 43C32.8223 43 40 35.8223 40 27C40 18.1777 32.8223 11 24 11Z" fill="#43A6DD"/>
                        <path d="M17 35C16.7441 35 16.4883 34.9023 16.293 34.707C15.9023 34.3164 15.9023 33.6836 16.293 33.293L23.293 26.293C23.6836 25.9023 24.3164 25.9023 24.707 26.293C25.0976 26.6836 25.0976 27.3164 24.707 27.707L17.707 34.707C17.5117 34.9023 17.2559 35 17 35Z" fill="#E86C60"/>
                        <path d="M24 28C23.4473 28 23 27.5522 23 27V17C23 16.4477 23.4473 16 24 16C24.5527 16 25 16.4477 25 17V27C25 27.5522 24.5527 28 24 28Z" fill="#223E49"/>
                        <path d="M34 28H24C23.4473 28 23 27.5523 23 27C23 26.4477 23.4473 26 24 26H34C34.5527 26 35 26.4477 35 27C35 27.5523 34.5527 28 34 28Z" fill="#223E49"/>
                        <path d="M24 30C25.6569 30 27 28.6569 27 27C27 25.3431 25.6569 24 24 24C22.3431 24 21 25.3431 21 27C21 28.6569 22.3431 30 24 30Z" fill="#223E49"/>
                        <path d="M17.959 4.04809C18.4507 3.64829 18.454 2.89263 17.9642 2.49057C14.0062 -0.758391 8.18409 -0.892131 4.057 2.46392C-0.0700893 5.81997 -1.12634 11.547 1.24728 16.0844C1.54102 16.6459 2.28148 16.7967 2.77313 16.3969L17.959 4.04809Z" fill="#335262"/>
                        <path d="M30.0409 4.04809C29.5493 3.64829 29.5459 2.89263 30.0357 2.49057C33.9937 -0.758391 39.8159 -0.892131 43.943 2.46392C48.07 5.81997 49.1263 11.547 46.7527 16.0844C46.4589 16.6459 45.7185 16.7967 45.2268 16.3969L30.0409 4.04809Z" fill="#335262"/>
                    </svg>

                    <h4>Instant Feedback</h4>

                    <p>Get feedback in a few seconds after a recording. No need to wait for it!</p>
                </Col>

                <Col md={4} className="mb-3 mb-md-5">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 14H13C12.4477 14 12 14.4477 12 15V43C12 43.5523 12.4477 44 13 44H17C17.5523 44 18 43.5523 18 43V15C18 14.4477 17.5523 14 17 14Z" fill="#76B5B5"/>
                        <path d="M26 24H22C21.4477 24 21 24.4477 21 25V43C21 43.5523 21.4477 44 22 44H26C26.5523 44 27 43.5523 27 43V25C27 24.4477 26.5523 24 26 24Z" fill="#458BC4"/>
                        <path d="M35 14H31C30.4477 14 30 14.4477 30 15V43C30 43.5523 30.4477 44 31 44H35C35.5523 44 36 43.5523 36 43V15C36 14.4477 35.5523 14 35 14Z" fill="#76B5B5"/>
                        <path d="M44 24H40C39.4477 24 39 24.4477 39 25V43C39 43.5523 39.4477 44 40 44H44C44.5523 44 45 43.5523 45 43V25C45 24.4477 44.5523 24 44 24Z" fill="#458BC4"/>
                        <path d="M8 4H4C3.44772 4 3 4.44772 3 5V43C3 43.5523 3.44772 44 4 44H8C8.55228 44 9 43.5523 9 43V5C9 4.44772 8.55228 4 8 4Z" fill="#458BC4"/>
                    </svg>

                    <h4>Practice Analytics</h4>

                    <p>See your daily practice calendar and get daily practice reminders!</p>
                </Col>

                <Col md={4} className="mb-3 mb-md-0">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 37C23.813 37 23.627 36.948 23.463 36.844L1.46302 22.844C1.15902 22.651 0.983015 22.308 1.00102 21.948C1.02002 21.589 1.23002 21.266 1.55302 21.105L24 7L46.447 21.105C46.769 21.266 46.98 21.588 46.999 21.948C47.018 22.308 46.841 22.65 46.537 22.844L24.537 36.844C24.373 36.948 24.187 37 24 37Z" fill="#A67C52"/>
                        <path d="M39 38H9V2C9 1.448 9.448 1 10 1H38C38.552 1 39 1.448 39 2V38Z" fill="#E6E6E6"/>
                        <path d="M46 47C45.916 47 45.831 46.989 45.748 46.968L22.748 40.968L23 34L47 22V46C47 46.31 46.856 46.602 46.611 46.792C46.435 46.928 46.219 47 46 47Z" fill="#B28F77"/>
                        <path d="M46 47H2C1.447 47 1 46.552 1 46V22L46.479 45.122C46.88 45.341 47.083 45.804 46.969 46.247C46.856 46.69 46.457 47 46 47Z" fill="#C19F85"/>
                        <path d="M32 10H16C15.448 10 15 9.553 15 9C15 8.447 15.448 8 16 8H32C32.552 8 33 8.447 33 9C33 9.553 32.552 10 32 10Z" fill="#B3B3B3"/>
                        <path d="M32 17H16C15.448 17 15 16.553 15 16C15 15.447 15.448 15 16 15H32C32.552 15 33 15.447 33 16C33 16.553 32.552 17 32 17Z" fill="#B3B3B3"/>
                        <path d="M25 24H16C15.448 24 15 23.553 15 23C15 22.447 15.448 22 16 22H25C25.552 22 26 22.447 26 23C26 23.553 25.552 24 25 24Z" fill="#B3B3B3"/>
                    </svg>

                    <h4>Reminder emails</h4>

                    <p>Recordings in video &amp; audio format are maintained in secure environments.</p>
                </Col>

                <Col md={4} className="mb-3 mb-md-0">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28 35H20V43H28V35Z" fill="#282828"/>
                        <path d="M46 8H2C1.447 8 1 8.447 1 9V38C1 38.553 1.447 39 2 39H46C46.553 39 47 38.553 47 38V9C47 8.447 46.553 8 46 8Z" fill="#444444"/>
                        <path d="M32 44H16C15.447 44 15 43.553 15 43C15 42.447 15.447 42 16 42H32C32.553 42 33 42.447 33 43C33 43.553 32.553 44 32 44Z" fill="#444444"/>
                        <path d="M43 36H5C4.448 36 4 35.552 4 35V12C4 11.448 4.448 11 5 11H43C43.552 11 44 11.448 44 12V35C44 35.552 43.552 36 43 36Z" fill="#E86C60"/>
                        <path d="M40 2H25C23.897 2 23 2.897 23 4V22C23 23.103 23.897 24 25 24H40C41.103 24 42 23.103 42 22V4C42 2.897 41.103 2 40 2Z" fill="#B3B3B3"/>
                        <path d="M16 28H8C6.895 28 6 28.895 6 30V44C6 45.105 6.895 46 8 46H16C17.105 46 18 45.105 18 44V30C18 28.895 17.105 28 16 28Z" fill="#B3B3B3"/>
                        <path d="M15 43H9C8.448 43 8 42.552 8 42V31C8 30.448 8.448 30 9 30H15C15.552 30 16 30.448 16 31V42C16 42.552 15.552 43 15 43Z" fill="#8E8E8E"/>
                        <path d="M38 20H27C26.448 20 26 19.552 26 19V6C26 5.448 26.448 5 27 5H38C38.552 5 39 5.448 39 6V19C39 19.552 38.552 20 38 20Z" fill="#8E8E8E"/>
                    </svg>

                    <h4>Mobile &amp; web</h4>

                    <p>Get feedback in a few seconds after a recording. No need to wait for it!</p>
                </Col>

                <Col md={4} className="mb-3 mb-md-0">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M43 13C43 11.8954 42.1046 11 41 11H6C4.3457 11 3 9.6543 3 8C3 7.44775 2.55225 7 2 7C1.44775 7 1 7.44775 1 8V40C1 43.866 4.13401 47 8 47H41C42.1046 47 43 46.1046 43 45V13Z" fill="#A67C52"/>
                        <path d="M46 24H36C33.2432 24 31 26.2432 31 29C31 31.7568 33.2432 34 36 34H46C46.5522 34 47 33.5522 47 33V25C47 24.4477 46.5522 24 46 24Z" fill="#87613E"/>
                        <path d="M4 5H32C33.1046 5 34 5.89543 34 7V11H4C2.34315 11 1 9.65686 1 8C1 6.34314 2.34314 5 4 5Z" fill="#87613E"/>
                        <path d="M36 31C37.1046 31 38 30.1046 38 29C38 27.8954 37.1046 27 36 27C34.8954 27 34 27.8954 34 29C34 30.1046 34.8954 31 36 31Z" fill="#EFD358"/>
                        <path d="M37 2H7C6.44772 2 6 2.44772 6 3V11H38V3C38 2.44772 37.5523 2 37 2Z" fill="#4DA34D"/>
                        <path d="M35 5H9V11H35V5Z" fill="#9EDB9E"/>
                    </svg>

                    <h4>Free!</h4>

                    <p>See your daily practice calendar and get daily practice reminders!</p>
                </Col>
            </Row>
        </Container>
    )
}

export default FeatureSection;