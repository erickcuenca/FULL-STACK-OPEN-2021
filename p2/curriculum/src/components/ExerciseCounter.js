import React from "react";

const ExerciseCounter = ({courseList}) => {
    let totalExercises = 0;
    courseList.forEach(course => {course.parts.forEach(exercise => {totalExercises += exercise.exercises})});
    
    
    return (
        <>
            <p>total of {totalExercises} exercises</p>
        </>
    )
}

export default ExerciseCounter