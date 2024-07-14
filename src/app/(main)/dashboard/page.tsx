import React from "react";
import DumbComponent from "./_components/dumb";

type DashboardProps = {
  children: React.ReactNode;
};

const Dashboard = async ({ children }: DashboardProps) => {
  return (
    <div>
      <DumbComponent />
    </div>
  );
};

export default Dashboard;
