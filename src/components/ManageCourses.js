// import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import CourseForm from './CourseForm';
import { useState, useEffect } from 'react';
import * as courseApi from '../api/courseApi';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

// import { Prompt } from 'react-router-dom';


const ManageCourses = (props) => {
    const params = useParams()

    const [errors, setErrors] = useState({});
    const [course, setCourses] = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: ""
    });

    useEffect(()=>{
        const slug = params.slug; 
        console.log(slug)// from path /courses/course/:slug
        if(slug){
            courseApi.getCourseBySlug(slug).then((_course)=>{
                setCourses(_course);
                console.log(_course)
            })
        }
    }, [params.slug])

    function handleChange({target}){
        // const target = event.target; 
        const updatedCourse ={ ...course, [target.name]: target.value};
        setCourses(updatedCourse);
    }
    

    // form Validation
    function formIsValid(){
        const _errors = {};
        if(!course.title) _errors.title = "Title is required"
        if(!course.authorId) _errors.authorId = "AutorId is required"
        if(!course.category) _errors.category = "Category is required"

        setErrors(_errors);
        // console.log(_errors)
        // Form is valid  if _errors object has no property
        // console.log(Object.keys(_errors).length)
        return Object.keys(_errors).length === 0;
    }

    let Navigate = useNavigate();
    function handleSubmite(event){
        event.preventDefault(); // used to prevent page going to default page

        if( !formIsValid()) return; // check form validation

        courseApi.saveCourse(course).then(()=>{
        Navigate('/courses');  // navigate to courses page
        toast.success('saved succesfully!');
        })

    }


  return (
    <>
    {/* <Prompt when={true} message="Are ou want to leave" /> */}
    <h1>Manage Courses</h1>
    <CourseForm errors= {errors} course={course} onChange={handleChange} onSubmit={handleSubmite}/>
    {/* {params.slug} */}
    </>
  )
}

export default ManageCourses;