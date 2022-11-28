import React from 'react';
import { useNavigate, Link } from 'react-router-dom'
import Ragister from '../login-singUP/Ragister';
import Login from '../login-singUP/login';

export default function Header() {
    const navigate = useNavigate();

    let ShowName = localStorage.getItem('Name')
    ShowName = ShowName.replace(/^"(.+)"$/, '$1');

    const LogoutHandler = () => {
        localStorage.clear();
        navigate('/Login')
    }
    const LogoutHandler2 = () => {
        localStorage.clear();
        navigate('/Login')
    }
    return (
        <div>

            {/* // <!-- header --> */}
            <div className="header-bg">

                <header className="main-header">

                    <div className="container_header phone_view">

                        <div className="container-fluid">

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="logo d-flex align-items-center">
                                        <Link to="/"> <span className="logo-default">
                                            <img src="assets/images/logo.png" alt="" className="d-none d-lg-block" />
                                            <img src="assets/images/logo2.png" alt="" className="d-block d-lg-none" />

                                        </span> </Link>
                                        <div className="icon_menu">
                                            <a href="#" className="menu-toggler sidebar-toggler"></a>
                                        </div>
                                    </div>

                                    <div className="right_detail">
                                        <div className="row d-flex align-items-center justify-content-end">
                                            <div className="col-xl-7 col-12 d-flex justify-content-end">
                                                <div className="right_bar_top d-flex align-items-center">
                                                    <div className="search">
                                                        <div className="d-lg-none">
                                                            <a id="toggle_res_search" data-toggle="collapse"
                                                                data-target="#search_form" className="res-only-view collapsed"
                                                                href="javascript:void(0);" aria-expanded="false"> <i
                                                                    className=" icon-magnifier"></i> </a>
                                                            <form id="search_form" role="search"
                                                                className="search-form collapse" action="#">
                                                                <div className="input-group">
                                                                    <input type="text" className="form-control"
                                                                        placeholder="Search..." />
                                                                    <button type="button" className="btn"
                                                                        data-target="#search_form" data-toggle="collapse"
                                                                        aria-label="Close">
                                                                        <i className="ion-android-search"></i>
                                                                    </button>
                                                                </div>
                                                            </form>
                                                        </div>



                                                    </div>
                                                    {/* <!-- notification_Start --> */}
                                                    <div className="dropdown dropdown-notification">
                                                        <a href="javascript:;" className="dropdown-toggle"
                                                            data-toggle="dropdown" data-hover="dropdown"
                                                            data-close-others="true" aria-expanded="false"> <i
                                                                className="fa fa-bell-o"></i> <span className="badge_coun"> 6
                                                            </span> </a>
                                                        <ul className="dropdown-menu scroll_auto height_fixed">
                                                            <li className="bigger">
                                                                <h3><span className="bold">Notifications</span></h3>
                                                                <span className="notification-label">New 6</span>
                                                            </li>
                                                            <li>
                                                                <ul className="dropdown-menu-list">
                                                                    <li>
                                                                        <a href="javascript:;"> <span className="time">just
                                                                            now</span> <span className="details"> <span
                                                                                className="notification-icon deepPink-bgcolor">
                                                                                <i className="fa fa-check"></i> </span>
                                                                                Congratulations!. </span> </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="javascript:;"> <span className="time">3
                                                                            mins</span> <span className="details"> <span
                                                                                className="notification-icon purple-bgcolor">
                                                                                <i className="fa fa-user o"></i> </span>
                                                                                <b>John Micle </b>is now following you.
                                                                            </span> </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="javascript:;"> <span className="time">7
                                                                            mins</span> <span className="details"> <span
                                                                                className="notification-icon blue-bgcolor">
                                                                                <i className="fa fa-comments-o"></i> </span>
                                                                                <b>Sneha Jogi </b>sent you a message.
                                                                            </span> </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="javascript:;"> <span className="time">12
                                                                            mins</span> <span className="details"> <span
                                                                                className="notification-icon pink"> <i
                                                                                    className="fa fa-heart"></i> </span>
                                                                                <b>Ravi Patel </b>like your photo. </span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="javascript:;"> <span className="time">15
                                                                            mins</span> <span className="details"> <span
                                                                                className="notification-icon yellow"> <i
                                                                                    className="fa fa-warning"></i> </span>
                                                                                Warning! </span> </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="javascript:;"> <span className="time">10
                                                                            hrs</span> <span className="details"> <span
                                                                                className="notification-icon red"> <i
                                                                                    className="fa fa-times"></i> </span>
                                                                                Application error. </span> </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    {/* <!-- notification_End --> */}

                                                    {/* <!-- DropDown_Inbox --> */}
                                                    <div className="dropdown dropdown-inbox">
                                                        <a href="javascript:;" className="dropdown-toggle"
                                                            data-toggle="dropdown" data-hover="dropdown"
                                                            data-close-others="true"> <i className="fa fa-envelope-o"></i> <span
                                                                className="badge_coun"> 2 </span> </a>
                                                        <ul className="dropdown-menu scroll_auto height_fixed">
                                                            <li className="bigger">
                                                                <h3><span className="bold">Messages</span></h3>
                                                                <span className="notification-label">New 2</span>
                                                            </li>
                                                            <li>
                                                                <ul className="dropdown-menu-list">
                                                                    <li>
                                                                        <a href="#"> <span className="photo"> <img
                                                                            src="assets/images/about-1.jpg"
                                                                            className="img-circle" alt="" /> </span> <span
                                                                                className="subject"> <span className="from"> Sarah
                                                                                    Smith </span> <span className="time">Just
                                                                                        Now </span> </span> <span
                                                                                            className="message"> Jatin I found you on
                                                                                LinkedIn... </span> </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"> <span className="photo"> <img
                                                                            src="assets/images/about-1.jpg"
                                                                            className="img-circle" alt="" /> </span> <span
                                                                                className="subject"> <span className="from"> Sarah
                                                                                    Smith </span> <span className="time">Just
                                                                                        Now </span> </span> <span
                                                                                            className="message"> Jatin I found you on
                                                                                LinkedIn... </span> </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"> <span className="photo"> <img
                                                                            src="assets/images/about-1.jpg"
                                                                            className="img-circle" alt="" /> </span> <span
                                                                                className="subject"> <span className="from"> Sarah
                                                                                    Smith </span> <span className="time">Just
                                                                                        Now </span> </span> <span
                                                                                            className="message"> Jatin I found you on
                                                                                LinkedIn... </span> </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"> <span className="photo"> <img
                                                                            src="assets/images/about-1.jpg"
                                                                            className="img-circle" alt="" /> </span> <span
                                                                                className="subject"> <span className="from"> Sarah
                                                                                    Smith </span> <span className="time">Just
                                                                                        Now </span> </span> <span
                                                                                            className="message"> Jatin I found you on
                                                                                LinkedIn... </span> </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"> <span className="photo"> <img
                                                                            src="assets/images/about-1.jpg"
                                                                            className="img-circle" alt="" /> </span> <span
                                                                                className="subject"> <span className="from"> Sarah
                                                                                    Smith </span> <span className="time">Just
                                                                                        Now </span> </span> <span
                                                                                            className="message"> Jatin I found you on
                                                                                LinkedIn... </span> </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"> <span className="photo"> <img
                                                                            src="assets/images/about-1.jpg"
                                                                            className="img-circle" alt="" /> </span> <span
                                                                                className="subject"> <span className="from"> Sarah
                                                                                    Smith </span> <span className="time">Just
                                                                                        Now </span> </span> <span
                                                                                            className="message"> Jatin I found you on
                                                                                LinkedIn... </span> </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    {/* <!--DropDown_Inbox_End --> */}

                                                    {/* <!-- Dropdown_User --> */}
                                                    <div className="dropdown dropdown-user">
                                                        <Link to="#" className="dropdown-toggle"
                                                            data-toggle="dropdown" data-hover="dropdown"
                                                            data-close-others="true" aria-expanded="true">
                                                            <img className="img-circle pro_pic" src="assets/images/about-1.jpg" alt="" />
                                                            <span className="name_admin"> {ShowName} <i className="fa fa-angle-down" aria-hidden="true"></i> </span>
                                                        </Link>

                                                        <ul className="dropdown-menu dropdown-menu-default">
                                                            <li>
                                                                <Link to="#"> <i className="icon-user"></i> Edit Profile </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#"> <i className="icon-settings"></i> Settings </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#"> <i className="icon-directions"></i> Activity </Link>
                                                            </li>
                                                            <li className="divider"></li>
                                                            <li>
                                                                <Link to="lock_screen.html"> <i className="icon-lock"></i> Change Password
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/Login" > <i className="icon-logout" onClick={LogoutHandler}></i> Log Out </Link>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container_header border_top_bott">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="navigation scroll_auto">

                                        {
                                            localStorage.getItem("Admin") ?
                                                <>
                                                    <ul id="dc_accordion" className="sidebar-menu tree d-lg-flex">

                                                        <li>
                                                            <Link to="/"> <i className="fa fa-home"></i> <span>Home</span> </Link>
                                                        </li>
                                                        <li className="menu_sub">
                                                            <Link To="#"> <i className="fa fa-user"></i> <span>Manage Store</span> <span
                                                                className="arrow"></span> </Link>
                                                            <ul className="down_menu">
                                                                <li>
                                                                    <Link to="/Add Store">Add Store</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/Manage-Store">Manage Store</Link>
                                                                </li>
                                                                {/* <li>
                                                                    <Link to="/Sales Filter">Store Sales By Filter</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/Store Votes">Store Votes</Link>
                                                                </li> */}
                                                            </ul>
                                                        </li>




                                                        {/* <li className="menu_sub">
<a href="table-basic.html"> <i className="icon-grid"></i> <span>Manage Store</span></a>
</li> */}
                                                        <li className="menu_sub">
                                                            <a href="#"> <i className="fa fa-users"></i> <span>Manage Staff</span> <span
                                                                className="arrow"></span> </a>
                                                            <ul className="down_menu">
                                                                <li>
                                                                    <Link to="/Add Staff">Add Staff</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/Manage-Staff">Manage Staff</Link>
                                                                </li>
                                                                {/* <li>
                                                                    <Link to="/STaff Filter">Show Staff by Filter</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/Staff Votes">Retting Staff</Link>
                                                                </li> */}
                                                            </ul>
                                                        </li>
                                                        {/* <li className="menu_sub">
<a href="table-basic.html"> <i className="icon-grid"></i> <span>View Booking</span></a>
</li> */}
                                                        <li className="menu_sub">
                                                            <a href="#"> <i className="fa fa-list"></i> <span>Manage Booking</span> <span
                                                                className="arrow"></span> </a>
                                                            <ul className="down_menu">
                                                                <li>
                                                                    <Link to="/Booking status">Booking Status</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/Total Booking">Total Booking </Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/Cancled Booking">Canceled Booking</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/Direct Booking">Direct Booking Entry</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/Booking CheckOut"> Booking CheckOut</Link>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu_sub">
                                                            <a href="#"> <i className="fa fa-user"></i> <span>Inoventry</span> <span
                                                                className="arrow"></span> </a>
                                                            <ul className="down_menu">
                                                                <li>
                                                                    <Link to="/Add-Invo">Add Item</Link>
                                                                </li>
                                                                <li>
                                                                    <a href="portlet-advanced.html">Show Item</a>
                                                                </li>
                                                                {/* <li>
                                                                    <a href="portlet-advanced.html">Show item  By Filter</a>
                                                                </li>
                                                                <li>
                                                                    <a href="portlet-advanced.html">Item Quantity</a>
                                                                </li> */}
                                                            </ul>

                                                        </li>
                                                        <li className="menu_sub">
                                                            <a href="#"> <i className="fa fa-user"></i> <span>Manage Servises</span> <span
                                                                className="arrow"></span> </a>
                                                            <ul className="down_menu">
                                                                <li>
                                                                    <Link to="/Add-Servises">Add servises</Link>
                                                                </li>

                                                                <li>
                                                                    <Link to="/Manage-services">Manage Services </Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/update/:id">Update Services</Link>
                                                                </li>
                                                            </ul>

                                                        </li>
                                                        {/* <li>
   
                                                   <Linkto="/Login"> <i className="fa fa-sign-out"></i> <span>Logout({ShowName})</span> </Link>
                                                                  </li> */}


                                                        <li>
                                                            <Link> <i className="icon-logout" onClick={LogoutHandler}></i> <span>LogOut</span> </Link>
                                                        </li>




                                                    </ul> </>
                                                : localStorage.getItem("user") ? <>
                                                    <ul id="dc_accordion" className="sidebar-menu tree d-lg-flex">

                                                        <li>
                                                            <Link to="/"> <i className="fa fa-home"></i> <span>Home</span> </Link>
                                                        </li>


                                                        <li className="menu_sub">
                                                            <a href="#"> <i className="fa fa-users"></i> <span>Manage Staff</span> <span
                                                                className="arrow"></span> </a>
                                                            <ul className="down_menu">
                                                                <li>
                                                                    <Link to="/Add Staff">Add Staff</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/Manage-Staff">Manage Staff</Link>
                                                                </li>

                                                                <li>
                                                                    <Link to="/Staff Votes">Retting Staff</Link>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu_sub">
                                                            <a href="#"> <i className="fa fa-list"></i> <span>Manage Booking</span> <span
                                                                className="arrow"></span> </a>
                                                            <ul className="down_menu">
                                                                <li>
                                                                    <Link to="/Booking status">Booking Status</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/Total Booking">Total Booking </Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/Cancled Booking">Canceled Booking</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/Direct Booking">Ongoing Booking </Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/Booking CheckOut"> Booking CheckOut</Link>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu_sub">
                                                            <a href="#"> <i className="fa fa-user"></i> <span>Inoventry</span> <span
                                                                className="arrow"></span> </a>
                                                            <ul className="down_menu">
                                                                <li>
                                                                    <a href="portlet-base.html">Add Item</a>
                                                                </li>
                                                                <li>
                                                                    <a href="portlet-advanced.html">Show Item</a>
                                                                </li>
                                                                <li>
                                                                    <a href="portlet-advanced.html">Show item  By Filter</a>
                                                                </li>
                                                                <li>
                                                                    <a href="portlet-advanced.html">Item Quantity</a>
                                                                </li>
                                                            </ul>

                                                        </li>
                                                        <li>
                                                            <Link> <i className="icon-logout" onClick={LogoutHandler2}> </i> <span>LogOut</span> </Link>
                                                        </li>
                                                    </ul>

                                                </>
                                                    : <>{
                                                        navigate("/Login")
                                                    }
                                                    </>
                                        }

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </header>
                <div className="page_breadc">
                    <div className="container-fluid">
                        <div className="page-heading">
                            <div className="row d-flex align-items-center">
                                <div className="col-md-6">
                                    <div className="page-breadcrumb">
                                        <h1>Dashboard</h1>
                                    </div>
                                </div>
                                <div className="col-md-6 justify-content-md-end d-md-flex">
                                    <div className="breadcrumb_nav">
                                        <ol className="breadcrumb">
                                            <li>
                                                <i className="fa fa-home"></i>
                                                <a className="parent-item" href="index.html">Home</a>
                                                <i className="fa fa-angle-right"></i>
                                            </li>
                                            <li className="active">
                                                Dashboard
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

