import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function FooterComp() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#212529' }}>

      <div className='text-center p-3' style={{ backgroundColor: '#212529' }}>
        © 2020 Copyright :
        <a className='text-white' href='StandupIndoMalang'>
        StandupIndoMalang
        </a>
      </div>
    </MDBFooter>
  );
}