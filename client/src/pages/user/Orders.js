import React, { useState,useEffect } from "react";

import Layout from "../../components/Layout/Layout";
import { useCart } from "../../context/cart";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import UserMenu from "../../components/Layout/UserMenu";

import { Link } from "react-router-dom";
const { Option } = Select;


const Orders = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  let VID_REGEX =
  /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

  const navigate = useNavigate();
  const params = useParams();

  //get single product
  const getSingleProduct = async () => {
    try {
      await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleProduct();
    //eslint-disable-next-line
  }, []);

  return (
    <Layout>

        <div className="container-fluid m-3 p-3">
                <div className="row">
                  <div className="col-md-3">
                    <UserMenu />
                  </div>

          <div className="col-md-9">
            <h4 className="text-center">
              {cart?.length
                ? `You Have ${cart.length} items in your favorite ${
                    auth?.token ? "" : "please login to checkout"
                  }`
                : " Your Favorite Is Empty"}
            </h4>
        <div className="row">
          <div className="">
            {cart?.map((p) => (
              <div className="row mb-2 p-3 card flex-row">
                <div className="col-md-3">
                  <img
                    src={`https://img.youtube.com/vi/${p.link.match(VID_REGEX)[1]}/hqdefault.jpg`}
                    className="card-img-top"
                    alt={p.name}
                    height={"150px"}
                  />
                </div>
                <div className="col-md-8">
                  <p>Nama : {p.name}</p>
                  <p>Deskripsi :{p.description.substring(0, 30)}</p>
                  <Link
                    key={p._id}
                    to={`stream/${p.slug}`}
                    className="btn btn-info"
                  >Stream Now!</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
      </div>
    </Layout>
  );
};

export default Orders;
