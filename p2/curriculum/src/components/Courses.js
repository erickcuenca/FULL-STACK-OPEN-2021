import React from "react";
import Course from "./Course";
import ExerciseCounter from "./ExerciseCounter";

const Courses = ({courseList}) => {

    return (
        <div>
            <h1>Web Development Curriculum</h1>
            {courseList.map(course => <Course key={course.name} course={course} />)}
            <ExerciseCounter courseList={courseList} />
        </div>
    )
}
export default Courses 