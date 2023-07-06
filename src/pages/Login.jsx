import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function Login() {

  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink className='bg-dark' onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <br/>
        <MDBTabsItem>
          <MDBTabsLink className='bg-dark' onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>

      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === 'tab1'}>
          <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>
          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <MDBTabsLink className='btn-link text-primary cursor-pointer' onClick={() => handleJustifyClick('tab3')} active={justifyActive === 'tab3'}>
            Forgot password?
          </MDBTabsLink>
          </div>
          <MDBBtn className="mb-4 w-100 bg-dark">Sign in</MDBBtn>
          <p className="text-center">Not a member? <a href="#!">Register</a></p>
        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>
          <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>
          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>
          <MDBBtn className="mb-4 w-100 bg-dark">Sign up</MDBBtn>
        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab3'}>
          <MDBInput wrapperClass='mb-4' label='New Email' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='New Password' id='form1' type='password'/>
          <MDBInput wrapperClass='mb-4' label='Re-type New Password' id='form1' type='password'/>
          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>
          <MDBBtn className="mb-4 w-100 bg-dark">Confirm</MDBBtn>
        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
  );
}

export default Login;