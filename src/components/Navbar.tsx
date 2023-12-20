import "../App.css";

interface Props {
  firstName: String;
  lastName: String;
}

const Navbar = ({ firstName, lastName }: Props) => {
  return (
    <header className="bg-dark text-white p-2">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="#">
            {firstName}
            <span>{lastName}</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a className="navbar-btn" href="#contact">
                  Contact me
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
