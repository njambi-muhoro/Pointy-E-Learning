import FetchCourses from "./FetchCourses";
import React, { useState } from "react";

function Student(){
  const [favouritedCourses, setFavouritedCourses] = useState([]);

  const handleFavourite = (course) => {
    setFavouritedCourses([...favouritedCourses, course]);
  };

  return (
    <div>
      {/* Pass favouritedCourses and handleFavourite as props */}
      <FetchCourses favouritedCourses={favouritedCourses} handleFavourite={handleFavourite} />
    </div>
  );
}
export default Student
