import React, { useState } from "react";
import "./modal.css";
import { TbCircleX } from "react-icons/tb";
import axios from "axios";
function Modal({ OnExit, currem, saved }) {
  const [usern, setUsern] = useState();
  const [email, setEmail] = useState();
  const [balance, setBalance] = useState();
  const onSave = () => {
    try {
      axios.put("http://localhost:3001/update", {
        id: currem,
        usern: usern,
        email: email,
        balance: balance,
      });
      alert("Data Updated, Please refresh the site");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="cont">
      <div className="modalCont">
        <section className="header">
          <h1>Update Profile</h1>
          <p>Please fill out all of it for an update</p>
          <TbCircleX
            className="ex"
            style={{
              width: "30px",
              height: "30px",
              position: "absolute",
              left: "62.2%",
              top: "21.3%",
            }}
            onClick={OnExit}
          />
        </section>
        <section className="content">
          <form action="">
            <input
              required
              type="text"
              onChange={(e) => {
                setUsern(e.target.value);
              }}
              placeholder="Username"
            />
            <input
              required
              type="text"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              required
              type="text"
              placeholder="Balance"
              onChange={(e) => {
                setBalance(e.target.value);
              }}
            />
          </form>
        </section>
        <section className="btnfoot">
          <button
            className="btn"
            onClick={() => {
              onSave();
              saved;
            }}
          >
            Save
          </button>
          <button className="btn" onClick={OnExit}>
            Exit
          </button>
        </section>
      </div>
    </div>
  );
}

export default Modal;
