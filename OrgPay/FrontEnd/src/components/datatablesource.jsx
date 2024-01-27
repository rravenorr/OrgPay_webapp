export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "balance",
      headerName: "Balance",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "SnowyS",
      img: "https://imbalances.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "paid",
      email: "1snow@gmail.com",
      balance: 35,
    },
    {
      id: 2,
      username: "Jamie Lannister",
      img: "https://imbalances.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "2snow@gmail.com",
      status: "unpaid",
      balance: 42,
    },
    {
      id: 3,
      username: "Lannister",
      img: "https://imbalances.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "3snow@gmail.com",
      status: "pending",
      balance: 45,
    },
    {
      id: 4,
      username: "Stark",
      img: "https://imbalances.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "4snow@gmail.com",
      status: "paid",
      balance: 16,
    },
    {
      id: 5,
      username: "Targaryen",
      img: "https://imbalances.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "5snow@gmail.com",
      status: "paid",
      balance: 22,
    },
    {
      id: 6,
      username: "Melisandre",
      img: "https://imbalances.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "6snow@gmail.com",
      status: "paid",
      balance: 15,
    },
    {
      id: 7,
      username: "Clifford",
      img: "https://imbalances.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "7snow@gmail.com",
      status: "unpaid",
      balance: 44,
    },
    {
      id: 8,
      username: "Frances",
      img: "https://imbalances.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "8snow@gmail.com",
      status: "paid",
      balance: 36,
    },
    {
      id: 9,
      username: "Roxie",
      img: "https://imbalances.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      status: "pending",
      balance: 65,
    },
    {
      id: 10,
      username: "Roxie",
      img: "https://imbalances.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      status: "paid",
      balance: 65,
    },
  ];