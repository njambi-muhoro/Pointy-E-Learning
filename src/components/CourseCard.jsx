
// import Courses from "./Courses";
// import React, { useState, useEffect } from "react";

// function CourseCard(){
//   const [searchedData, setDataFromAPI] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:2870/courses")
//       .then((res) => res.json())
//       .then((data) => {
//         setDataFromAPI(data);
//       });
//   }, []);
// console.log(searchedData)
//   return(
//     <div>
// <Courses searchedData={searchedData} />
//     </div>
//   )
// }export default CourseCard

















// // import React, { useState } from "react";
// // import Time from "./Time";

// // function Courses({ onCourseFavorite }) {
// //   const coursesData = [
// //     {
// //       id: 1,
// //       title: "Introduction to React",
// //       subtopics: ["React basics", "React components", "React props"],
// //       duration: "1h 30m",
// //       isFavorite: false
// //     },
// //     {
// //       id: 2,
// //       title: "JavaScript Fundamentals",
// //       subtopics: ["JavaScript syntax", "Data types", "Functions"],
// //       duration: "2h 15m",
// //       isFavorite: true
// //     },
// //     {
// //       id: 3,
// //       title: "Node.js Essentials",
// //       subtopics: ["Node.js basics", "Working with modules", "HTTP server"],
// //       duration: "1h 45m",
// //       isFavorite: false
// //     }
// //   ];

// //   const [searchValue, setSearchValue] = useState("");

// //   const handleSearchInputChange = (event) => {
// //     setSearchValue(event.target.value);
// //   };

// //   const filteredCourses = coursesData.filter((course) => {
// //     const subtopics = course.subtopics.join(", ").toLowerCase();
// //     return subtopics.includes(searchValue.toLowerCase());
// //   });

// //   return (
// //     <div
// //       style={{
// //         width: "90%",
// //         margin: "0 auto",
// //         backgroundColor: "rgb(242,241,249)",
// //         border: "9px solid black",
// //         borderRadius: "10px"
// //       }}
// //     >
// //       <div
// //         style={{
// //           display: "flex",
// //           justifyContent: "flex-end",
// //           border: "2px solid red"
// //         }}
// //       >
// //         <h1>START</h1>
// //         <form className="d-flex">
// //           <input
// //             className="form-control mr-sm-2"
// //             type="search"
// //             placeholder="Search For Any Topic"
// //             aria-label="Search"
// //             value={searchValue}
// //             onChange={handleSearchInputChange}
// //           />
// //           <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
// //             <i className="fa-solid fa-magnifying-glass"></i>
// //           </button>
// //         </form>
// //       </div>
// //       <div style={{ display: "flex", gap: "50px" }}>
// //         <Time />
// //         <h1 style={{ fontSize: "30px" }}>SUBJECTS</h1>
// //       </div>
// //       <div>
// //         {filteredCourses.map((course) => (
// //           <div key={course.id} style={{ margin: "20px 0" }}>
// //             <h2>{course.title}</h2>
// //             <p>Duration: {course.duration}</p>
// //             <p>Subtopics: {course.subtopics.join(", ")}</p>
// //             <button onClick={() => onCourseFavorite(course.id)}>
// //               {course.isFavorite ? "Remove Favorite" : "Add Favorite"}
// //             </button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Courses;


