import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./send.css";
import axios from "axios";

const SendModal = (props) => {
  const [usern, setUsern] = useState();
  const [em, setEm] = useState();
  const [id, setId] = useState();
  const [UEmail, setEmail] = useState();
  const [sendid, setSendId] = useState();
  const [sendem, setSendEm] = useState();
  const [balance, setbalance] = useState();
  const [sendbalance, setSendBalance] = useState();
  const { email } = useParams();
  const [amount, setamount] = useState();
  const [reference, setreference] = useState();
  const [newBalance, setNewBalance] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3001/User/")
      .then((result) => {})
      .catch((err) => console.log(err));
  }, [email]);

  const checkBal = async () => {
    try {
      // Check if reference number is empty
      if (!reference) {
        alert("Reference number cannot be empty.");
        return;
      }
  
      // Fetch user data
      const userData = await axios.post("http://localhost:3001/User/:email", {
        id: reference,
        UEmail: email,
      });
  
      // Check if user data is empty or does not have matching IDs
      if (!userData.data.Log || !userData.data.transact) {
        alert("No matching IDs found.");
        return;
      }
  
      setbalance(userData.data.Log.Balance);
      setId(userData.data.Log._id);
      setEmail(userData.data.Log.Email);
      setSendId(userData.data.transact._id);
      setSendEm(userData.data.transact.Email);
      setSendBalance(userData.data.transact.Balance);
  
      // Check if the sender and receiver emails are the same
      if (userData.data.transact.Email === email) {
        alert("Cannot send money to yourself.");
        return;
      }
  
      // Check if the amount is empty, not a positive number, or less than or equal to 0
      if (!amount || isNaN(amount) || amount <= 0) {
        alert("Please enter a valid positive amount.");
        return;
      }
  
      // Check if the amount is less than the balance
      if (amount < userData.data.Log.Balance) {
        // Make the transaction
        await axios.post("http://localhost:3001/transaction", {
          User: userData.data.Log.Email,
          senderEm: userData.data.transact.Email,
          title: "User to User",
          Samount: amount,
        });
        console.log(userData.data.Log.Email)
        console.log(userData.data.transact.Email)
  
        // Update balances
        const newBalance = userData.data.Log.Balance - amount;
        const sendBalance =
          Number(userData.data.transact.Balance) + Number(amount);
  
        await axios.put("http://localhost:3001/User/:email", {
          userlogId: userData.data.Log._id,
          baltoUp: newBalance,
          sendLogId: userData.data.transact._id,
          sendbalancetoup: sendBalance,
        });
  
        // Display success message
        alert("Transaction executed");
      } else {
        alert("Insufficient Balance");
      }
    } catch (error) {
      console.error(error);
  
      // Check if the error is due to no matching reference ID
      if (error.response && error.response.status === 404) {
        alert("No matching reference ID found.");
      }
    }
    window.location.reload();
  };
  
  return (
    <nav>
      <div className="send-content">
        <div style={{ gridRow: " 1 / span 2", gridColumn: " 1/ span 2" }}>
          <div className="circle"></div>
        </div>
        <div
          style={{ gridRow: " 1 / span 2", gridColumn: " 2/ span 1" }}
          className="sendMain"
        >
          <h1 style={{ marginBottom: "20px", fontSize: "20px" }}>
            Send Currency
          </h1>
          <h3 style={{ textAlign: "left" }}>Reference No.</h3>
          <input
            className="inputField"
            type="integer"
            onChange={(e) => setreference(e.target.value)}
          />
          <br />
          <h3 style={{ textAlign: "left" }}>Amount to Send</h3>
          <input
            className="inputField"
            type="integer"
            onChange={(e) => setamount(e.target.value)}
          />
          <button className="confButton hovbutt" onClick={checkBal}>
            CONFIRM
          </button>
        </div>
      </div>
    </nav>
  );
};

export default SendModal;
