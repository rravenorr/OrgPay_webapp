import Sidebar from "../sidebar/sidebar";
import "./transactions.css";
import List from "../table/list2";

const Transactions = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <h2 className="pangaln">Transaction History</h2>
        <div className="table">
          <List />
        </div>
      </div>
    </div>
  );
};

export default Transactions;
