import { useState } from "react";
import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";
import Navig from "./Navig";
function Login() {
  const [Password, SetPassword] = useState();
  const [Email, SetEmail] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/Login", { Email, Password })
      .then((result) => {
        console.log(result);
        alert(result.data.datames);
        if (result.data === "admin") {
          navigate("/admin");
        } else if (result.data === "Doesn't have an account") {
          navigate("#");
        } else {
          navigate(`/User/${Email}`);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="signCont">
        <div className="signDiv">
          <div>
            <form className="formInDiv" onSubmit={handleSubmit}>
              <h1 style={{ marginLeft: "-10px", marginTop: "-10px" }}>
                Log In
              </h1>
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => SetEmail(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Password"
                onChange={(e) => SetPassword(e.target.value)}
                required
              />
              <p>
                <a
                  style={{
                    textDecoration: "none",
                    fontFamily: "'Acumin Pro', san-serif",
                    color: "#596e79",
                    fontSize: ".8rem",
                  }}
                  href=""
                >
                  Forgot Password ?{" "}
                </a>
              </p>
              <button type="submit" className="logButton">
                Login
              </button>
            </form>
          </div>
          <div className="colorRight ">
            <div className="textInColorRight">
              <h1 style={{ color: " rgb(239, 242, 248)" }}>New Here ? </h1>
              <p
                style={{
                  color: " rgb(215, 215, 215)",
                  fontFamily: "'Poppins' san-serif",
                  lineHeight: "1.5rem",
                  fontSize: ".9rem",
                  maxWidth: "300px",
                  marginLeft: "12%",
                }}
              >
                We provide the efficient way of paying bills so come and join in
                our community
              </p>
              <button className="logBut">
                <a href="/signup">Sign Up</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
