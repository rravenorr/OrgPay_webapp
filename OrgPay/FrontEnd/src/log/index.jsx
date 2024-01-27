import { useEffect, useState } from "react";
import axios from "axios";
import "./log.css";
import { useParams } from "react-router-dom";

const LogMain = (props) => {
  const [th, setTh] = useState([]);
  const { email } = useParams();

  useEffect(() => {
    axios
      .post(`http://localhost:3001/User/${email}`, { tem: email })
      .then((result) => {
        console.log(email);
        console.log(result);
        setTh(result.data.transloc || []);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [email]);

  return (
    <nav>
      <div className="logMain">
        <div className="logHead">
          <h1 style={{ fontSize: "30px" }}>TRANSACTION {email.toUpperCase()} </h1>
          {/* Replace "history" with email variable */}
        </div>
        <div className="logCont">
            <div className="logHolder">
              <div className="logNo">Type</div>
              <div className="logFrom">Sender</div>
              <div className="logChange">Reciever</div>
              <div className="logInfo">Amount</div>
              <div className="logInfo">Date</div>
            </div>
          {th.map((trans) => (
            <div className="logHolder" key={trans._id}>
              <div className="logNo"> {trans.Title}</div>
              <div className="logFrom">{trans.SenderEmail}</div>
              <div className="logChange">{trans.RecieverEmail}</div>
              <div className="logInfo">{trans.Amount}</div>
              <div className="logInfo">{trans.Date}</div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default LogMain;
