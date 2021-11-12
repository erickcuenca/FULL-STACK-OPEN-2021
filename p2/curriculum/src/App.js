import React from 'react'
import Courses from './components/Courses'

const App = ({courseList}) => {
  return (
    <div>
      <Courses courseList={courseList} />
    </div>
  )
}

export default App
