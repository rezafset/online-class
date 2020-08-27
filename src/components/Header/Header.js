import React from 'react';
import './Header.css';
import { Container, Row,  Col} from 'react-bootstrap'

const Header = () => {
    return (
        <Container>
            <Row>
                <Col className="header">
                    <div>
                        <h1 className="display-5 py-4">Courses We Offer</h1>
                    </div>
                    <div>
                        <button className="btn btn-success">Sign Up</button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;