import React, { useState,useEffect } from "react";
import Layout from "../../components/Layout/Layout";

import { useCart } from "../../context/cart";
import { useAuth } from "../../context/auth";
import {CDBInput} from 'cdbreact';

import Button from 'react-bootstrap/Button';
import UserMenu from "../../components/Layout/UserMenu";
import { useParams } from "react-router-dom";
import ReactPlayer from 'react-player/lazy'
const OrderStream = () => {
  const [auth, setAuth] = useAuth();
  const params = useParams();

  const [cart, setCart] = useCart();
  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
                <div className="row">
                  <div className="col-md-3">
                    <UserMenu />
                  </div>

          <div className="col-md-9">

      <h3>Now Streaming {params.slug}</h3>
            {cart?.map((p) => (

                <ReactPlayer
                url={`/api/v1/product/product-photo/${p.link}`}
                controls={true}
                width="90%"
                height="500px"
                playing={true}
                />
            ))}
            <div className='m-2 mt-3 w-10 d-flex gap-2'>
                    <Button variant="dark">👍Like</Button>
                    <Button variant="dark">👎Dislike</Button>
                    <Button variant="dark">⭐Favorite</Button>
            </div>

            <div className='m-3 mt-0 w-10'>
                    rating
                    <br />
                    ⭐⭐⭐⭐⭐
                </div>
                <div className='m-3 mt-0 w-10'>
                    Komentar
                    <CDBInput material hint="Comentar" type="Comentar" placeholder='Tinggalkan Komentar......' />
                </div>
            </div>
            </div>
            </div>

    </Layout>
  );
};

export default OrderStream;
