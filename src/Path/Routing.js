import React from 'react'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import ViewEmployees from '../Pages/Userprofile/ViewEmployees'
import Addleave from '../Pages/AddLeaves/Addleave'
import Approve from '../Pages/ApproveLeave/Approve'
import ManagerReq from '../Pages/ApproveLeave/ManagerReq'
import Review from '../Pages/ApproveLeave/UpdateLeaveRequest/Review'
import Authority from '../Pages/Authority/Authority'
import Permission from '../Pages/Authority/Permission'
import Dashboard from '../Pages/Dashboard/Dashboard'
import Password from '../Pages/Dashboard/Password/Password'
import Headers from '../Pages/Navbar/Headers'
import Login from '../Pages/Security/Login'
import Signup from '../Pages/Security/Signup'
import AllDetails from '../Pages/User/MoreView/AllDetails'
import ViewLeave from '../Pages/User/ViewLeave'
import Userprofile from '../Pages/Userprofile/Userprofile'
import ViewRedirect from '../Pages/Userprofile/ViewRedirect'
import EditRedirect from '../Pages/Userprofile/EditRedirect'

import Calendar from '../Pages/Calendar'



function Routing() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/addleave' element={<Addleave/>}/>
            <Route path='/leaves' element={<ViewLeave/>}/>
            <Route path='/viewrequest/:id' element={<AllDetails/>}/>
            <Route path='/approvallist' element={<Approve/>}/>
            <Route path='/reviewrequest/:id' element={<Review/>}/>
            <Route path='/grantAuthority' element={<Authority/>}/>
            <Route path='/permission/:id' element={<Permission/>}/>
            <Route path='/profile' element={<Userprofile/>}/>
            <Route path='/userinfo/:id' element={<ViewRedirect/>}/>
            <Route path='/edituserinfo/:id' element={<EditRedirect/>}/>
            <Route path='/changepassword' element={<Password/>}/>
            <Route path='/managerreq/:id' element={<ManagerReq/>}/>
            <Route path='/viewEmployees' element={<ViewEmployees/>}/>
            <Route path='/calendar' element={<Calendar/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Routing