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

const UsersVideo = () => {
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
              <CDBLink to="/users/" ><CDBSidebarMenuItem icon="th-large" >Favorit</CDBSidebarMenuItem></CDBLink>
              <CDBLink to="/users/video" className='text-dark'><CDBSidebarMenuItem icon="sticky-note" active>Video Disukai</CDBSidebarMenuItem></CDBLink>
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
            <CDBLink to="/"><CDBSidebarMenuItem icon="power-off" style={{color:'red'}}>Logout</CDBSidebarMenuItem></CDBLink>
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
                Video
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

export default UsersVideo;