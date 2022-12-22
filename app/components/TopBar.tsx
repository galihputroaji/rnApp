import Link from "next/link";

function TopBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container flex mx-auto">
        <Link href="/" legacyBehavior>
          <a className="navbar-brand">TINR22</a>
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/mahasiswa" legacyBehavior>
                <a className="nav-link">Mahasiswa</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" legacyBehavior>
                <a className="nav-link">About</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default TopBar;
