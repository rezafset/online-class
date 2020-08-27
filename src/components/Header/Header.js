import React from 'react';
import './Header.css';
import { Container, Row,  Col} from 'react-bootstrap'

const Header = () => {
    return (
        <Container>
            <Row>
                <Col><h1 className="display-4 text-center py-4">Online Class Website</h1></Col>
            </Row>
        </Container>
    );
};

export default Header;