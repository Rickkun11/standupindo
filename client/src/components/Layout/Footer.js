import React from "react";
import { MDBFooter } from 'mdb-react-ui-kit';
const Footer = () => {
  return (
    <MDBFooter className='footer text-center text-white m-0' style={{ backgroundColor: '#212529' }}>

      <div className='text-center p-3' style={{ backgroundColor: '#212529' }}>
        © 2023 Copyright :
        <a className='text-white' href='/'>
        StandupIndoMalang
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
