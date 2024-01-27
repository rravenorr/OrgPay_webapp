import React from "react";
import { FaHistory, FaMoneyBillAlt } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import SendModal from "../sendModal";
import "./contentone.css";
import LogMain from "../log";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ToPay from "../topay";

function ContentOne() {
  const [usern, setUsern] = useState();
  const [em, setEm] = useState();
  const [id, setId] = useState();
  const [balance, setbalance] = useState();
  const { email } = useParams();
  useEffect(() => {
    console.log(email);
    axios
      .get("http://localhost:3001/User/")
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => console.log(err));
  }, [email]);
  useEffect(() => {
    console.log(email);
    axios
      .post("http://localhost:3001/User/:email", { UEmail: email })
      .then((result) => {
        console.log(result.data);
        setUsern(result.data.Log.Username);
        setEm(result.data.Log.Email);
        setId(result.data.Log._id);
        setbalance(result.data.Log.Balance);
      })
      .catch((err) => console.log(err));
  }, []);

  function hello() {
    modal.style.display = "block";
  }

  function modalClose() {
    modal.style.display = "none";
  }

  function sending() {
    let send = document.getElementById("sendMoney");
    send.style.display = "block";
  }

  function sendClose() {
    let send = document.getElementById("sendMoney");
    send.style.display = "none";
    window.location.reload();
  }

  function logScroll() {
    log.scrollIntoView();
  }

  function topFunction() {
    top.scrollIntoView();
  }

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    let mybutton = document.getElementById("myBtn");
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  let modal = document.getElementById("myModal");
  let log = document.getElementById("logs");

  let top = document.getElementById("top1");

  return (
    <>
      <nav className="wew">
        <div className="head" id="top1"></div>
        <div className="contentMain">
          <div className="contentSub1">
            <h1>OrgPay</h1>
            <div className="infoMain">
              <h3 style={{ color: "aliceblue" }}>ACCOUNT INFO</h3>
              <br />
              <h4 className="hlev">Username: {usern}</h4>
              <br />
              <h4 className="hlev">Email: {em}</h4>
              <br />
              <h4 className="hlev">Reference No.: {id}</h4>
            </div>
            <a href="/">
              <button className="logOutButton hovbutt">LOG OUT</button>
            </a>
          </div>
          <div className="contentSub2">
            <div className="balanceCont">
              <h1 className="balanceGreeting">Welcome {usern}</h1>
              <div className="balanceMain">
                <div className="balanceLabel">AVAILABLE BALANCE:</div>
                <div className="balanceDisp">₱ {balance}</div>
              </div>

              <div className="buttonHolder">
                <button className="funcButton hovbutt" onClick={sending}>
                  <div className="iconHold">
                    <RiMailSendLine size="1.5em" id="b" />
                  </div>
                  SEND
                </button>
                <button className="funcButton hovbutt" onClick={logScroll}>
                  <div className="iconHold">
                    <FaHistory size="1.5em" id="b" />
                  </div>
                  HISTORY
                </button>
                <button
                  className="addFunds hovbutt"
                  id="addFunds"
                  onClick={hello}
                >
                  <div className="iconHold">
                    <FaMoneyBillAlt size="1.5em" id="b" />
                  </div>
                  ADD FUNDS
                </button>
              </div>
            </div>
          </div>
          <div className="contentSub3">
            <h3 style={{ color: "#596e79" }}>Quick ID Access</h3>
            <ToPay />
          </div>
        </div>
        <div id="myModal" className="modalTest">
          <div className="modal-content">
            <header className="heading">
              <h1 style={{ color: "aliceblue" }}>ADD FUNDS</h1>
            </header>

            <div className="fundsCont">
              <h3 style={{ color: "#596e79" }}>Dear User,</h3>
              <br />
              Please coordinate with your campus YPADS treasure to add funds to
              your account. Your current YPADS treasurer is Mark Jerome Gimena.
            </div>

            <footer className="footing">
              <button className="confcans" onClick={modalClose}>
                OK
              </button>
            </footer>
          </div>
        </div>
        <div id="sendMoney" className="sendMon">
          <div className="sendModal">
            <SendModal />
            <button className="hovbutt sendCans" onClick={sendClose}>
              Cancel
            </button>
          </div>
        </div>
        <div id="logs">
          <LogMain />
        </div>
        <button className="backToTop" onClick={topFunction} id="myBtn">
          Back to top
        </button>
      </nav>
    </>
  );
}

export default ContentOne;
