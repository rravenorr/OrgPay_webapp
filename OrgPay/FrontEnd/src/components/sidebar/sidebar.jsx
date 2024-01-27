import "./sidebar.css";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import GroupIcon from "@mui/icons-material/Group";
import ReceiptIcon from "@mui/icons-material/Receipt";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">OrgPay</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul className="side">
          <Link to="/admin" style={{ textDecoration: "none" }}>
            <li className="sidetags">
              <SpaceDashboardIcon className="iccon" />
              <span className="Menu">Dashboard</span>
            </li>
          </Link>
          <Link to="/admin/users" style={{ textDecoration: "none" }}>
            <li className="sidetags">
              <GroupIcon className="iccon" />
              <span className="Menu">Users</span>
            </li>
          </Link>
          <Link to="/admin/transactions" style={{ textDecoration: "none" }}>
            <li className="sidetags">
              <ReceiptIcon className="iccon" />
              <span className="Menu">Transactions</span>
            </li>
          </Link>
          <Link to="/admin/topay" style={{ textDecoration: "none" }}>
            <li className="sidetags">
              <ReceiptIcon className="iccon" />
              <span className="Menu">To Pay</span>
            </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li className="sidetagsLL">
              <LogoutIcon className="iccon" />
              <span className="Menu">Logout</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
