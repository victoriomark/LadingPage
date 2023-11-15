 import { Link } from "react-router-dom";
const Headers = () => {
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="container d-flex justify-content-between align-items-center ">
            <a className="navbar-brand text-warning fw-bold " href="#">
              VicDiv
            </a>
            <button
              className="navbar-toggler bg-warning"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto  d-flex justify-content-center">
              <li className="nav-item text-align-center">
                <Link className="nav-link active text-warning  text-center" to={"/"}>Home</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active text-warning text-center" to={"About"}>About</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active text-warning text-center" to={"Contact"}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Headers;
  