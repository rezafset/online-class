import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Course from '../Course/Course';
import Price from '../Price/Price';
import fakeData from '../../fakeData/course.js';
import './Holder.css';

const Holder = () => {
    
    const [course, setCourse] = useState(fakeData);
    const [price, setPrice] = useState([]);
    console.log(fakeData);
    const handleCourseAdd = (course) =>{
        console.log("Course Enroll" , course);
        const newPrice = [...price, course];
        setPrice(newPrice);
    }
    return (
        <Container>
            <Row>
                <Col className="holder-container">
                    <div className="course-part">
                        {
                            course.map(course => <Course handleCourseAdd={handleCourseAdd} course={course}></Course>)
                        }
                    </div>
                    <div className="price-part">
                        <h4 className="text-center font-weight-bold">Order Summary</h4>
                        <Price price={price}></Price>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Holder;