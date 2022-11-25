import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './component/Header';
import Footer from './component/footer';
import RYTCOntent from './component/RYTContent';
import Ragister from './login-singUP/Ragister';
import Login from './login-singUP/login';
import React from 'react';
import { PrivateComponent } from './PrivateCompo/PrivateComponent';

import { Add_Store } from './component/Store-Managment/Add-Store';
import Manage_Store from './component/Store-Managment/Manage-Store';
import UpdateStore from './component/Store-Managment/UpdateStore';


import { Add_Staff } from './component/Staff-Manage/Add-staff';
import Manage_Staff from './component/Staff-Manage/Manage-Staff';

import { Add_Servise } from './component/Servise-Manage/AddServise';
import Manage_servises from './component/Servise-Manage/Manage-Servises';
import UpdateServises from './component/Servise-Manage/UpdateServises';
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
          <Route path='/Add Store' element={<Add_Store />} />
          <Route path='/Manage-Store' element={<Manage_Store />} />
          <Route path="/UpdateStore" element={<UpdateStore />} />
          <Route path="/UpdateStore/:StoreCode" element={<UpdateStore/>} />


          <Route path='/Sales Filter' element={<h1> Walcome to Sales Filter</h1>} />
          <Route path='/Store Votes' element={<h1> Walcome to VIsite Store Ratting</h1>} />

          {/* Manage Staff Button */}
          <Route path='/Add Staff' element={<Add_Staff />} />
          <Route path='/Manage-Staff' element={<Manage_Staff />} />
          <Route path='/STaff Filter' element={<h1> Walcome to Sales Staff</h1>} />
          <Route path='/Staff Votes' element={<h1> Walcome to VIsite Staff Ratting</h1>} />
          {/* Manage Booking Button */}
          <Route path='/Booking status' element={<h1> Booking Status</h1>} />
          <Route path='/Total Booking' element={<h1> Total booking</h1>} />
          <Route path='/Cancled Booking' element={<h1> Canceled  Booking</h1>} />
          <Route path='/Direct Booking' element={<h1> Direct Booking Entry </h1>} />
          <Route path='/Booking CheckOut' element={<h1>  Booking CheckOut </h1>} />

          {/*Manage Servises */}
          <Route path='/Add-Servises' element={<Add_Servise />} />
          <Route path='/Manage-services' element={<Manage_servises />} />
          <Route path="/UpdateServises/:Scode" element={<UpdateServises />} />









        </Route>
      </Routes>
    </div>


  );
}

export default App;
