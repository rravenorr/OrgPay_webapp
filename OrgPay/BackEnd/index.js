const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UsersModel = require("./models/Users");
const ToPayModel = require("./models/Topay");
const TransacModel = require("./models/ItemTrans");
const transModel = require("./models/ItemTrans");
const app = express();

app.use(express.json());
app.use(cors());
app.get("/", (res, req) => {});
app.post("/signup", async (req, res) => {
  console.log("Hi");
  try {
    const allUsers = await UsersModel.find();
    console.log(allUsers);
    const findUser = await UsersModel.findOne({ Email: req.body.Email });
    if (findUser) {
      res.json("email is already used");
    } else {
      const users = await UsersModel.create(req.body);
      res.json(users);
    }
  } catch (err) {
    res.json(err);
  }
});
app.post("/admin/topay", async (req, res) => {
  try {
    const topay = await ToPayModel.create({
      Title: req.body.title,
      Description: req.body.desc,
      Amount: req.body.amount,
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/Login", async (req, res) => {
  try {
    const findUser = await UsersModel.findOne({ Email: req.body.Email });
    if (findUser) {
      if (req.body.Email === "admin@adminacc.com") {
        if (findUser.Password === req.body.Password) {
          res.json("admin");
        } else {
          res.json("Password didn't match");
          res.json({ data: "user", user: findUser });
        }
      } else {
        res.json({ datames: "user", user: findUser });
      }
    } else {
      res.json("Doesn't have an account");
    }
  } catch (err) {
    res.json(err);
  }
});

app.get("/admin", (req, res) => {
  UsersModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
app.get("/admin/transactions", (req, res) => {
  transModel
    .find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
app.get("/admin/topay", (req, res) => {
  ToPayModel.find()
    .then((topays) => res.json(topays))
    .catch((err) => res.json(err));
});
app.get("/admin/users", (req, res) => {
  UsersModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
app.put("/update", async (req, res) => {
  const id = req.body.id;
  const usern = req.body.usern;
  const email = req.body.email;
  const balance = req.body.balance;
  let doc = await UsersModel.findOneAndUpdate(
    { _id: id },
    { Username: usern, Email: email, Balance: balance }
  );
  let change = await UsersModel.findOne({ _id: id });
  console.log(doc);
  try {
  } catch (err) {
    console.log(err);
  }
  res.send("updated");
});
app.put("/admin/topay/update", async (req, res) => {
  const id = req.body.id;
  const title = req.body.Title;
  const desc = req.body.Description;
  const amount = req.body.Amount;
  let doc = await ToPayModel.findOneAndUpdate(
    { _id: id },
    { Title: title, Description: desc, Amount: amount }
  );
  let change = await UsersModel.findOne({ _id: id });
  console.log(doc);
  try {
  } catch (err) {
    console.log(err);
  }
  res.send("updated");
});
app.delete("/admin/user/:id", async (req, res) => {
  const id = req.params.id;
  await UsersModel.findOneAndDelete({ _id: id });
  res.send("Item Deleted");
});

app.delete("/admin/topay/:id", async (req, res) => {
  const id = req.params.id;
  await ToPayModel.findOneAndDelete({ _id: id });
  res.send("Item Deleted");
});
app.get("/User", async (req, res) => {
  const topay = await ToPayModel.find();
  try {
    res.send({ topay: topay });
  } catch (error) {
    res.send(error);
  }
});

app.post("/User/:email", async (req, res) => {
  const userEmail = req.body.UEmail; // Change this to UEmail
  const tem = req.body.tem;
  const id = req.body.id;
  const transac = await UsersModel.findOne({ _id: id });
  const findUser = await UsersModel.findOne({ Email: userEmail });
  const transloc = await transModel.find({ SenderEmail: tem });

  res.json({ Log: findUser, transact: transac, transloc: transloc });
});
app.get("/User/:email", async (req, res) => {
  const id = req.body.id;
  const findUser = await UsersModel.findOne({ Email: userEmail });
  res.json(findUser);
});

app.get("/User/:email/get", async (req, res) => {
  const tranLoc = await TransacModel.find()
  res.json(tranLoc);
});



app.put("/User/:email", async (req, res) => {
  const id = req.body.userlogId;
  const bal = req.body.baltoUp;
  const sendid = req.body.sendLogId;
  const sendbal = req.body.sendbalancetoup;
  let doc = await UsersModel.findOneAndUpdate({ _id: id }, { Balance: bal });
  let up = await UsersModel.findOneAndUpdate(
    { _id: sendid },
    { Balance: sendbal }
  );
  console.log(up);
  let change = await UsersModel.findOne({ _id: id });
  let sendChange = await UsersModel.findOne({ _id: sendid });
  res.send({ user: change, sendUser: sendChange });
  try {
  } catch (err) {
    console.log(err);
  }
});
app.post("/transaction", async (req, res) => {
  const senderEmail = req.body.senderEm;
  const emailUser = req.body.User;
  const title = req.body.title;
  const amount = req.body.Samount;

  const users = await transModel.create({
    Title: title,
    SenderEmail: emailUser,
    RecieverEmail: senderEmail,
    Amount: amount,
  });
  res.json(users);
});
mongoose
  .connect("mongodb://127.0.0.1:27017/Users")
  .then(() => {
    app.listen(3001, () => {
      console.log("connecting to server");
    });
  })
  .catch(() => {
    console.log("can't find db");
  });
