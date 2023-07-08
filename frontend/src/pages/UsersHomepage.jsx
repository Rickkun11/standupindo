import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
  CDBLink,
} from 'cdbreact';
import FooterComp from '../components/FooterComp';

import Header from '../components/Header';
import CardContents from '../components/CardContents';

const UsersHomepage = () => {
  return (
    <>

          <div>
          {/*ini untuk class wrapper*/}
          <div className="wrapper">
            {/*ini untuk class sidebar*/}
            <div className="sidebar">
            <CDBSidebar backgroundColor='#212529'>
            <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>StandupIndo Malang </CDBSidebarHeader>
            <CDBSidebarContent>
            <CDBSidebarMenu>
                <CDBLink to="/users/" className='text-dark'><CDBSidebarMenuItem icon="th-large" active>Favorit</CDBSidebarMenuItem></CDBLink>
                <CDBLink to="/users/video" ><CDBSidebarMenuItem icon="sticky-note">Video Disukai</CDBSidebarMenuItem></CDBLink>
                <CDBLink to="/users/histori"><CDBSidebarMenuItem icon="sticky-note">Histori</CDBSidebarMenuItem></CDBLink>

            </CDBSidebarMenu>
            </CDBSidebarContent>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div
                className="sidebar-btn-wrapper"
                style={{padding: '20px 5px'}}
            >

            </div>
            </CDBSidebarFooter>
        </CDBSidebar>

            </div>
            <div className="main_content">
              {/*Navbar Menu*/}

               <Header/>
            <div className="info">
            <div>
                Homepage
                <CardContents/>
            </div>
        </div>

            </div>
          </div>
        </div>

        <FooterComp/>


    </>
  );
};

export default UsersHomepage;