import "./table.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { userRows } from "../datatablesource";
import axios from "axios";
import { useEffect, useState } from "react";

const List = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/admin")
      .then(
        (users) => setUsers(users.data),
        users.map((user) => {
          console.log(user.Username);
        })
      )
      .catch((err) => console.log(err));
  }, []);
  return (
    <TableContainer component={Paper} className="table">
      <Table
        sx={{ minWidth: 350, backgroundColor: "#596e79" }}
        aria-label="simple table"
        className="TTable"
      >
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Username</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>

            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.Username}>
              <TableCell className="tableCell">{user.Username}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">{user.Email}</div>
              </TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">{user.Email}</div>
              </TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">{user.Email}</div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
