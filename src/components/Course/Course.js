import React from 'react';
import './Course.css';

const Course = (props) => {
    const{img, name, instructor, price } = props.course;
    return (
        <div className="course-container mb-3">
            <div className="course-list">
                <div>
                    <img src={img} alt=""/>
                </div>
                <br/>
                <div className="course-info">
                    <h5>{name}</h5><br/>
                    <p>Instructor: {instructor}</p>
                    <p>Price: ${price} </p>
                    <div>
                        <button className="btn btn-success mt-3" onClick={() => props.handleCourseAdd(props.course)}>Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;