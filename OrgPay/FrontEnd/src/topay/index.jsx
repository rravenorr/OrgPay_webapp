import React from "react";
import "./topay.css";
import { BsCash } from "react-icons/bs";
import { PiHamburgerBold } from "react-icons/pi";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function show({ id }) {}

const ToPay = (props) => {
  const [item, setitem] = useState();
  const [item_id, setitem_id] = useState();
  const [topay, setTopay] = useState();
  const [id, setId] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3001/admin/topay")
      .then((result) => {
        setTopay(result.data);
        console.log(result)
      })
      .catch((err) => console.log(err));
  }, []);

  function showMod(selectedItem) {
    console.log(selectedItem)
    setitem(selectedItem.Title); // Set the selected item's title
    setitem_id(selectedItem.Description);
    modal.style.display = "block";
    console.log("agay");
  }  
  
  function hideMod() {
    modal.style.display = "none";
  }

  let modal = document.getElementById("mod");
  let conf = document.getElementById("conf");
  let cans = document.getElementById("cans");

  return (
    <nav>
      <div className="itemHolder">
      {topay?.map((data) => (
        <button
          key={data._id}
          className="item"
          onClick={() => showMod(data)} // Pass the entire data object
        >
        <BsCash size={25} />
        <h3>{data.Title}</h3>
        </button>
        ))}

      </div>
      <div className="conShade" id="mod">
        <div className="confirmModal">
          <h1>{item}</h1>
          <p>ID: {item_id}</p> {/* Display item ID here */}
          <div className="butthold">
            <button className="butt" id="cans" onClick={hideMod}>
            CLOSE
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default ToPay;
