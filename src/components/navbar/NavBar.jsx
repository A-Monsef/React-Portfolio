import "./NavBar.css"


const NavBar = () => {
    return (
      <nav class="navbar navbar-expand-lg bg-transparent">
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav  mb-2 mb-lg-0 mx-auto">
              <li class="nav-item">
                <a class="nav-link fw-bold" href="#home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold" href="#skills">
                  Experience
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold" href="#project">
                  Portfolio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold" href="#connect">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}
export default NavBar