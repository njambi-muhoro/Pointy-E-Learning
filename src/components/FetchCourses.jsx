import React, { useState, useEffect } from "react";
import Student from "./Student";

function FetchCourses(props) {
  const [onlineCourses, setCourses] = useState([]);
  const [showLikeButton, setShowLikeButton] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch("http://localhost:2870/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  }, []);

  
  const filteredCourses = onlineCourses.filter((course) => {
    const subtopics = course.subtopic.split(';');
    const subtopicsJoined = subtopics.join(", ").toLowerCase();
    return subtopicsJoined.includes(searchValue.toLowerCase());
  });

  // the split method is used to split the subtopic string into
  //  an array using a semicolon as the delimiter. Then, the join method
  //   is used to join the array back together with a comma and a space as 
  //   the separator. Finally, the toLowerCase method is used to convert the
  //    joined string and the search value to lowercase for case-insensitive
  //     comparison

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
          <form className="d-flex">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search For Any Topic"
              aria-label="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
        {filteredCourses.map((course) => (
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