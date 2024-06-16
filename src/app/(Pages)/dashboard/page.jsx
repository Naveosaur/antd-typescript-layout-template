import axios from "axios";
import React from "react";

const Dashboard = async () => {
  const data = await axios.get("https://jsonplaceholder.typicode.com/posts");

  console.log(data);
  return <div>Dashboard</div>;
};

export default Dashboard;
