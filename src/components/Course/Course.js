import React from 'react';
import './Course.css'
// import { Card , Button, Container, Row, Col } from 'react-bootstrap';

const Course = (props) => {
    const{img, name, instructor, price } = props.course;
    return (
        <div className="course-container">
            <div className="course-list">
                <img src={img} alt=""/>
                <h3>{name}</h3>
                <p>{instructor}</p>
                <p>${price} </p>
                <button onClick={() => props.handleCourseAdd(props.course)}>Enroll Now</button>
            </div>
        </div>
    );
};

export default Course;