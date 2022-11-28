import React from 'react';
import { Navigate, Outlet } from 'react-router-dom'

export const PrivateComponent = () => {
    const Admin = localStorage.getItem('Admin');
    const user = localStorage.getItem('user');
    return Admin ? <Outlet />
   : user ? <Outlet/>

    : <Navigate to="/login" />
}





