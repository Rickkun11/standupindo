import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - StandupIndo"}>
      <div className="container-flui m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
            <h3 align="center">Information</h3>
              <span><h3>Name      : {auth?.user?.name}</h3></span>
              <span><h3>Email     : {auth?.user?.email}</h3></span>
              <span><h3>Address    : {auth?.user?.address}</h3></span>
              <span><h3>Phone : {auth?.user?.phone}</h3></span>
              <span><h3>Role : User</h3></span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
