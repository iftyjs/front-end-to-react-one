import { Link } from "@reach/router";
import SiteLogo from './../assets/favicon-light.png';
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-floating">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={SiteLogo} alt="Logo" width="40" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav ml-auto mt-3 mt-lg-0">
            <li className="nav-item dropdown active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/updates">What's New</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="ml-auto my-2 my-lg-0">
            <button className="btn btn-primary rounded-pill">Download Now</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
