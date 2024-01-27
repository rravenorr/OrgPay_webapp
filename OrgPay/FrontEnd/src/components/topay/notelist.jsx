import React, { useEffect, useState } from "react";
import "./topay.css";
import Sidebar from "../sidebar/sidebar";
import { FaFile } from "react-icons/fa";
import Modal from "../Modal2/Modal";
import Modal2 from "../Modal3/Modal";
import axios from "axios";

function Notelist() {
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [crem, setCrem] = useState();
  const [topay, setTopay] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3001/admin/topay")
      .then((result) => {
        setTopay(result.data);
        topay.map((data) => {
          console.log(data);
        });
      })
      .catch((err) => console.log(err));
  }, []);
  const handleExit = () => {
    setOpenModal(!openModal);
  };
  const handleExit2 = () => {
    setOpenModal2(!openModal2);
  };

  return (
    <>
      {openModal && <Modal OnExit={handleExit} />}
      {openModal2 && (
        <Modal2 OnExit={handleExit2} saved={handleExit} currem={crem} />
      )}
      <div className="maincont">
        <Sidebar />
        <div className="notePage">
          <section className="first">
            <h1>Hello Admin, </h1>
            <p>add a payment due</p>
          </section>
          <section className="second">
            {topay?.map((data) => (
              <section key={data._id} className="cardscont">
                <div className="cards">
                  <section className="Title">{data.Title}</section>
                  <section className="Desc">
                    Description : {data.Description}
                  </section>
                  <section className="Amount">
                    Amount : {data.Amount}
                    <section>
                      <button
                        className="edit"
                        onClick={() => {
                          setOpenModal2(true);
                          setCrem(data._id);
                          console.log(data.Title);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="del"
                        onClick={() => {
                          const id = data._id;
                          axios.delete(
                            `http://localhost:3001/admin/topay/${id}`
                          );
                          alert(
                            "The payment due is now deleted, please refresh the page"
                          );
                        }}
                      >
                        Delete
                      </button>
                    </section>
                  </section>
                </div>
              </section>
            ))}

            <button
              onClick={() => {
                setOpenModal(true);
              }}
            >
              <FaFile style={{ width: "40px", height: "40px" }} />
              Add to pay
            </button>
          </section>
        </div>
      </div>
    </>
  );
}

export default Notelist;
