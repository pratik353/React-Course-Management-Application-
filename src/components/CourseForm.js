import React from "react";
import { PropTypes } from "prop-types";
// import TextInput from "./common/TextInput";

function CourseForm(props) {
    // console.log(props.errors)
  return (
    <form onSubmit={props.onSubmit}>
        {/* <TextInput
            id='title'
            lable='title'
            onChange={props.onChange}
            name='title'
            value={props.course.title}
        /> */}

      <div className="form-group">
        <label htmlFor="title">Title</label>
        <div className="field">
          <input
            id="title"
            type="text"
            name="title"
            className="form-control"
            error={props.errors.title}
            value={props.course.title}
            onChange={props.onChange}
            />
            <span className="text-danger">{props.errors.title}</span>
    
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            value={props.course.authorId || ""}
            className="form-control"
            onChange={props.onChange}
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
        {/* {props.errors.author && (
            <div className="alert alert-danger">{props.errors.authorId}</div>
        )} */}
      </div>
      <span className="text-danger">{props.errors.authorId}</span>


      {/* <TextInput
            id='category'
            lable='Category'
            onChange={props.onChange}
            name='title'
            value={props.course.categoroy}
        /> */}


      <div className="form-group">
        <label htmlFor="category">Category</label>
        <div className="field">
          <input
            type="text"
            id="category"
            name="category"
            className="form-control"
            value={props.course.category}
            onChange={props.onChange}
            // error={props.errors.category}
          />
        </div>
      </div>
      <span className="text-danger">{props.errors.category}</span>
      <br/>

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}


CourseForm.prototype={
    course: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onchange: PropTypes.func.isRequired,
}

export default CourseForm;
