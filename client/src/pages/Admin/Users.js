/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable */
import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Users = () => {
  const [products, setProducts] = useState([]);
  let VID_REGEX =
  /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;


  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("https://standupindo.vercel.app/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout title={"Dashboard - All Users"}>
      <div className="container-fluid m-3 p-3">
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9 ">
          <h1 className="text-center">All History Upload</h1>
          <div className="d-flex flex-wrap">
            {products?.map((p) => (

                <div className="card m-2 w-100 d-flex flex-row">

                <img
                    src={`https://img.youtube.com/vi/${p.link.match(VID_REGEX)[1]}/hqdefault.jpg`}
                    className="card-img-top w-25"
                    alt={p.name}
                    height={"150px"} />

                  <div className="card-body w-50">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">Tanggal Upload : {p.createdAt}</p>
                  </div>

                  <div className="card-body">
                    complete
                  </div>
                </div>

            ))}
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default Users;
