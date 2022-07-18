import React, { useState, useEffect } from 'react';

import { getCourses } from "../api/courseApi";
import CourseList from './CourseList';
import { Link } from 'react-router-dom';



const Courses= () => {
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        getCourses().then((_courses)=>{
            setCourses(_courses);
        })  
    }, []);

    return(
        <>
        <h1>Courses</h1>
        <Link className='btn btn-primary' to="/course">Add Course</Link>
        <CourseList courses = {courses}/>   {/* It work as Controller view */}
        </>
    )
}




// Using functional components lifeCycle
// const Courses=()=>{
//     const [courses, setCourses] = useState([]);

//     useEffect(()=>{
//         getCourses().then((_courses)=>{
//             setCourses(_courses);
//         })  
//     }, []);

//     return(
//         <table className='table'>
//             <thead>
//                 <tr>
//                     <th>title</th>
//                     <th>Author Id</th>
//                     <th>Category</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {courses.map((course)=>{
//                     return (
//                         <tr key={course.id}>
//                             <td>{course.title}</td>
//                             <td>{course.authorId}</td>
//                             <td>{course.category}</td>
//                         </tr>
//                     )
//                 })}
//             </tbody>

//         </table>
        
//     )
// }




//Using class component lifeCyle
// class Courses extends React.Component{
//      state = {
//         courses : [],
//      };

//      componentDidMount(){
//         getCourses().then((courses)=>{
//             this.setState({courses : courses});
//         });
//      };

//     renderRow(course){
//     return <tr> 
//         <td>{course.title}</td>
//         <td>{course.authorId}</td>
//         <td>{course.catagory}</td>
//     </tr>
//     }
     
//     render(){
//         return(
//             // <table< used to add html table 
//             <table className='table'>
//                 {/* <thead> used to add table head in Html table */}
//                 <thead>
//                     <tr>{/* <tr> used to add Table rows in html Table */}
//                         <th>Title</th>{/* <th> used to add Table tables Heading Data in html Table */}
//                         <th>Author Id</th>
//                         <th>Catagory</th>
//                     </tr>
//                 </thead>
//                 {/* <tbody> is used to Add head Body in hmtl table */}
//                 <tbody> 
//                     {this.state.courses.map((course)=>{ 
//                         return <tr key={course.id}>
//                                     <td>{course.title}</td>
//                                     <td>{course.authorId}</td>
//                                     <td>{course.category}</td>
//                             </tr>
//                         })
//                     }

//                     {/* {this.state.courses.map(this.renderRow)}  We can also pass function to map to display data */}

//                 </tbody>
//             </table>
//                     )
//     }
// }



export default Courses