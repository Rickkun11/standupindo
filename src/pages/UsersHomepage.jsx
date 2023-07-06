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
import { CDBNavbar, CDBInput } from "cdbreact";
import CardContents from '../components/CardContents';

const UsersHomepage = () => {
  return (
    <>

          <div>
          {/*ini untuk class wrapper*/}
          <div className="wrapper">
            {/*ini untuk class sidebar*/}
            <div className="sidebar">
            <CDBSidebar backgroundColor="#1a1e21">
            <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>StandupIndo Malang </CDBSidebarHeader>
            <CDBSidebarContent>
            <CDBSidebarMenu>
                <CDBSidebarMenuItem icon="th-large" active><CDBLink to="/users/" className='text-dark'>Favorit</CDBLink></CDBSidebarMenuItem>
                <CDBSidebarMenuItem icon="sticky-note"><CDBLink to="/users/video" >Video Disukai</CDBLink></CDBSidebarMenuItem>
                <CDBSidebarMenuItem icon="sticky-note"><CDBLink to="/users/histori">Histori</CDBLink></CDBSidebarMenuItem>

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
            <CDBSidebarMenuItem icon="power-off" style={{color:'red'}}><CDBLink to="/">Logout</CDBLink></CDBSidebarMenuItem>
        </CDBSidebar>

            </div>
            <div className="main_content">
              {/*Navbar Menu*/}

                <CDBNavbar dark expand="md" scrolling className="justify-content-between w-100" style={{backgroundColor: '#1a1e21', height:'75px'}}>
                    <br/>
                  <CDBInput type="search" size="md" hint="Search" placeholder='Pencarian 🔍' className="input-nav w-25 text-center"/>
                  <div className="justify-content-start">
                    <i className="fas fa-user m-2 justify-content-end" style={{color: 'white'}}> users</i>
                  </div>
                  </CDBNavbar>
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