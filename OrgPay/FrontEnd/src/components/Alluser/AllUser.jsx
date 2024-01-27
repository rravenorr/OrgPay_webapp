import "./Au.css";
import Sidebar from "../sidebar/sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../Modal/Modal";
function Alluser() {
  const [users, setUsers] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [crem, setCrem] = useState();
  const up = "Update";
  const del = "Delete";
  const handleClose = () => {
    setOpenModal(!openModal);
  };
  useEffect(() => {
    axios
      .get("http://localhost:3001/admin")
      .then((users) => setUsers(users.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {openModal && (
        <Modal OnExit={handleClose} saved={handleClose} currem={crem} />
      )}
      <div className="home">
        <section>
          <Sidebar />
        </section>
        <div className="homeContainer">
          <section>
            <h3 className="headdit">All Users</h3>
            <div className="datacont">
              <table>
                <thead>
                  <tr>
                    <th>Username</th>
                    <th> Email</th>
                    <th>Balance</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user) => (
                    <tr className="data" key={user.Username}>
                      <td>{user.Username}</td>
                      <td>{user.Email}</td>
                      <td>{user.Balance}</td>
                      <td>
                        <button
                          className="aubut"
                          onClick={() => {
                            const id = user._id;
                            setCrem(id);
                            setOpenModal(true);
                          }}
                        >
                          {up}
                        </button>
                      </td>
                      <td>
                        <button
                          className="aubut"
                          onClick={() => {
                            const id = user._id;
                            axios.delete(
                              `http://localhost:3001/admin/user/${id}`
                            );
                          }}
                        >
                          {del}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>{" "}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
export default Alluser;
