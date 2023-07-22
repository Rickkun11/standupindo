import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
            <h3 align="center">Information</h3>
              <span><h3>Name      : {auth?.user?.name}</h3></span>
              <span><h3>Email     : {auth?.user?.email}</h3></span>
              <span><h3>Address    : {auth?.user?.address}</h3></span>
              <span><h3>Phone : {auth?.user?.phone}</h3></span>
              <span><h3>Role : Admin</h3></span>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
