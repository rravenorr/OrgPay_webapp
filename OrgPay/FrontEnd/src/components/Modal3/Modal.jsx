import React, { useState } from "react";
import "./modal.css";
import { TbCircleX } from "react-icons/tb";
import axios from "axios";
function Modal({ OnExit, saved, currem }) {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [amount, setAmount] = useState();
  const onSave = () => {
    try {
      axios.put("http://localhost:3001/admin/topay/update", {
        id: currem,
        Title: title,
        Description: desc,
        Amount: amount,
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
          <h1>Update to pay</h1>
          <p>Please fill out title , description and amount</p>
          <TbCircleX
            onClick={OnExit}
            className="ex"
            style={{
              width: "30px",
              height: "30px",
              position: "absolute",
              left: "62.2%",
              top: "21.3%",
            }}
          />
        </section>
        <section className="content">
          <form action="">
            <input
              required
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              required
              onChange={(e) => setDesc(e.target.value)}
              className="ta"
              placeholder="Type Description"
              id=""
              cols="20"
              rows="3"
            ></textarea>
            <input
              required
              type="text"
              placeholder="Amount"
              onChange={(e) => setAmount(e.target.value)}
            />
            <section className="btnfoot">
              <button className="btn" type="submit">
                <span
                  onClick={() => {
                    onSave();
                    saved;
                    alert("data has been saved");
                  }}
                >
                  Save
                </span>
              </button>
              <button className="btn" onClick={OnExit}>
                Exit
              </button>
            </section>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Modal;
