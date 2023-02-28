import { Link } from "react-router-dom";


function NavBar() {
  return (
    <div>
    <div
      className="container-fluid top-bar theme-bg-primary-darken justify-content-between" id="navSectionDive"
      style={{ border: "1px solid red" }}
    >
      <nav
        className="navbar navbar-expand-lg navbar-dark position-relative"
        id="navsecondDiv"
      >
        <div id="pointy">
          <li className="list-inline-item ">
            <i
              className="fa-solid fa-chalkboard-user"
              style={{ fontSize: "2em", color:"white" }}
            ></i>
          </li>
          <h2 style={{color:"white"}}>Pointy E-learning</h2>
        </div>

        <div
          className="sliderLists "
          id="linkDiv"
          style={{ border: "2px solid green", width: "600px", height: "73px" }}
        >
          <div className="nav-item me-lg-4" id="linkstyling">
            <Link style={{color:"white"}} to="/">Home</Link>
          </div>
            
          <div className="nav-item me-lg-4" id="linkstyling">
            <Link style={{color:"white"}} to="/courses">Courses</Link>
          </div>

          <div className="nav-item me-lg-4">
            <Link style={{color:"white"}} to="/students">Student</Link>
          </div>

          <div className="nav-item me-lg-4">
            <Link style={{color:"white"}} to="/teachers">Teachers</Link>
          </div>
        </div>
      </nav>
    </div>
    
    </div>
  );
}
export default NavBar;
