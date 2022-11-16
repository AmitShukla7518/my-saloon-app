
import Header from './component/Header';
import Footer from './component/footer';
import RYTCOntent from './component/RYTContent';
import Ragister from './login-singUP/Ragister';
import Login from './login-singUP/login';
import React from 'react';
import { PrivateComponent } from './PrivateCompo/PrivateComponent';
import $ from "jquery";
import Add_servise from './component/Staff-Manage/Add_Servise';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Add_Staff } from './component/Staff-Manage/Add-staff';
import { Add_Servise } from './component/Servise-Manage/AddServise';
function App() {
  return (

    <div>

      <Routes>
        {/* Admin Panal Button */}
        <Route path='/Login' element={<Login />} />
        <Route path='/SingUP' element={<Ragister />} />


        {/* </Routes> */}


        <Route element={<PrivateComponent />}>
          <Route path="/" element={[<Header />, <RYTCOntent />, <Footer />]} />
          <Route path='/hello' element={<h1>Hello,Walcome To DAshBoard-1 </h1>} />
          {/* Manage Store Button */}
          <Route path='/Add Store' element={<h1>Add Store</h1>} />
          <Route path='/Delete Store' element={<h1> Walcome to Delete Store</h1>} />
          <Route path='/Sales Filter' element={<h1> Walcome to Sales Filter</h1>} />
          <Route path='/Store Votes' element={<h1> Walcome to VIsite Store Ratting</h1>} />

          {/* Manage Staff Button */}
          <Route path='/Add Staff' element={<Add_Staff />} />
          <Route path='/Delete Staff' element={<Add_servise />} />
          <Route path='/STaff Filter' element={<h1> Walcome to Sales Staff</h1>} />
          <Route path='/Staff Votes' element={<h1> Walcome to VIsite Staff Ratting</h1>} />
          {/* Manage Booking Button */}
          <Route path='/Booking status' element={<h1> Booking Status</h1>} />
          <Route path='/Total Booking' element={<h1> Total booking</h1>} />
          <Route path='/Cancled Booking' element={<h1> Canceled  Booking</h1>} />
          <Route path='/Direct Booking' element={<h1> Direct Booking Entry </h1>} />
          <Route path='/Booking CheckOut' element={<h1>  Booking CheckOut </h1>} />

          {/*Manage Servises */}
          <Route path='/Add-Servises' element={<Add_Servise/>} />
          <Route path='/servise-Price' element={<h1>Servise Price</h1>} />
          <Route path='/Total-servise' element={<h1> Total Servises</h1>} />









          <Route path='/Login' element={<Login />} />



        </Route>
      </Routes>
    </div>


  );
}

export default App;
