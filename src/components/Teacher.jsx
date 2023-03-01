import React, { useState } from "react";

function Teacher() {
  const [course, setCourse] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [subtopic, setSubtopic] = useState("");

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const handleSubtopicChange = (event) => {
    setSubtopic(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCourse = {
      title: course,
      subtopic: subtopic,
      teachersname: "Your Name",
      description: description,
      link: link,
    };

    fetch("http://localhost:2870/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCourse),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCourse("");
        setDescription("");
        setLink("");
        setSubtopic("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2>Add New Course</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="course">Course:</label>
              <select
                className="form-control"
                id="course"
                name="course"
                value={course}
                onChange={handleCourseChange}
              >
                <option value="">Select Course</option>
                <option value="math">Math</option>
                <option value="chemistry">Chemistry</option>
                <option value="physics">Physics</option>
                <option value="biology">Biology</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="subtopic">Subtopic:</label>
              <input
                type="text"
                className="form-control"
                id="subtopic"
                name="subtopic"
                value={subtopic}
                onChange={handleSubtopicChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={description}
                onChange={handleDescriptionChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="link">Video Link:</label>
              <input
                type="text"
                className="form-control"
                id="link"
                name="link"
                value={link}
                onChange={handleLinkChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Teacher;
