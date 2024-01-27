import "./components.css";
function Navig() {
  return (
    <>
      <div className="sticky">
        <nav className="navCont">
          <section
            style={{
              display: "flex",
              color: "#6C7F89",
            }}
          >
            <h2>
              <a
                className="logo"
                style={{ color: "#596e79", textDecoration: "none" }}
                href="/"
              >
                OrgPay
              </a>
            </h2>
          </section>
          <section className="secNav2">
            <ul className="navList">
              <li>
                <a
                  href="#Ourservices"
                  style={{ color: "#656464", textDecoration: "none" }}
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#Features"
                  style={{ color: "#656464", textDecoration: "none" }}
                >
                  Features
                </a>
              </li>
            </ul>
            <button className="loginbutton">
              <a href="/login" style={{ textDecoration: "none" }}>
                Login
              </a>
            </button>
            <button className="signupbutton">
              <a href="/signup" style={{ textDecoration: "none" }}>
                Sign up
              </a>
            </button>
          </section>
        </nav>
      </div>
    </>
  );
}

export default Navig;
