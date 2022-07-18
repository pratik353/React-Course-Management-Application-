import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CourseList = (props) => {
  return (
    <table className='table'>
        <thead>
            <tr>
                <th>title</th>
                <th>Author Id</th>
                <th>Category</th>
            </tr>
        </thead>
        <tbody>
            {props.courses.map((course)=>{
                return (
                    <tr key={course.id}>
                        <td>
                            <Link to={'course/' + course.slug}>{course.title}</Link>  {/* Link with passing URl parameters slug */}
                        </td>
                        <td>{course.authorId}</td>
                        <td>{course.category}</td>
                    </tr>
                )
            })}
        </tbody>
    </table>
  )
}

CourseList.propTypes={
    courses : PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        authorId: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
    })).isRequired,
}


export default CourseList