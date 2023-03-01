import React, { useState, useEffect } from "react";
import YouTube from "react-player/youtube";
import ReactPlayer from "react-player";

function FetchCourses(props) {
  const { favouritedCourses, handleFavourite } = props;

  const [onlineCourses, setCourses] = useState([]);
    // setting useState as an array allows us to map over the data after fetch since it's added
    // to setCourses
  useEffect(() => {
    fetch("http://localhost:2870/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  }, []);

  return (
    // This code will render a card for each course item, 
    // displaying the course title, subtopic, teacher name, 
    // and an arbitrary author name
    <div className="container" >
        <div className="row">
      {onlineCourses.map((course) => (
        <div key={course.id} className="col-lg-3 col-md-6 col-sm-12 mb-3">
            <div className="card">
          <div className="card-image"></div>
          <div className="category">Video</div>
          <div className="heading">
            {course.title} - {course.subtopic}
            <div className="author">
              {course.teachersname} By <span className="name">Abi</span> 4 days ago
            </div>
            </div>
          </div>
          </div>
        
      ))}
      </div>
    </div>
  );
}

export default FetchCourses;
