import React from "react";
import FetchCourses from "./FetchCourses";
import Time from "./Time";

function Courses({ onCourseFavorite }) {
  return (
    <div
      style={{
        width: "90%",
        margin: "0 auto",
        backgroundColor: "rgb(242,241,249)",
        border: "9px solid black",
        borderRadius: "10px"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          border: "2px solid red"
        }}
      >
        <h1>START</h1>
        <form className="d-flex">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search For Any Topic"
            aria-label="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
      <div style={{ display: "flex", gap: "50px" }}>
        <Time />
        <h1 style={{ fontSize: "30px" }}>SUBJECTS</h1>
      </div>
      <FetchCourses onCourseFavorite={onCourseFavorite} />
    </div>
  );
}

export default Courses;
