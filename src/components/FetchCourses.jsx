import React, { useState, useEffect } from "react";
import Student from "./Student";

function FetchCourses(props) {
  const [favoriteCourses, setFavoriteCourses] = useState([]);

  const handleCourseFavorite = (course) => {
    if (favoriteCourses.includes(course)) {
      // Remove course from favorites
      const updatedFavorites = favoriteCourses.filter((c) => c !== course);
      setFavoriteCourses(updatedFavorites);
    } else {
      // Add course to favorites
      const updatedFavorites = [...favoriteCourses, course];
      setFavoriteCourses(updatedFavorites);
    }
  };

  const [onlineCourses, setCourses] = useState([]);

  const [showLikeButton, setShowLikeButton] = useState(false);

  useEffect(() => {
    fetch("http://localhost:2870/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {onlineCourses.map((course) => (
          <div
            key={course.id}
            className="col-lg-3 col-md-6 col-sm-12 mb-3"
            onMouseEnter={() => setShowLikeButton(true)}
            onMouseLeave={() => setShowLikeButton(false)}
          >
            <div className="card">
              <div className="card-image"></div>
              <div className="category">Video</div>
              <div className="heading">
                {course.title} - {course.subtopic}
                <div className="author">
                  {course.teachersname} By <span className="name">Abi</span> 4
                  days ago
                </div>
              </div>
              {showLikeButton && (
                <button onClick={() => props.onCourseFavorite(course)}>
                  Like
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FetchCourses;
