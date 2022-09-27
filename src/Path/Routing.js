import React, { useState } from 'react'
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
import Adminmanager from '../Pages/ApproveLeave/Admin/Adminmanager'
import ViewRequest from '../Pages/ApproveLeave/Admin/ViewRequest'
import Adminresponse from '../Pages/ApproveLeave/Admin/Adminresponse'
import Chart from '../Pages/Charts/Chart'
import { fetchUserData } from '../Api/AuthenticationService'



function Routing() {
  const [data,setData] = useState([])
  const [roleCode,setRoleCode] = useState("")
  React.useEffect(()=>{
    fetchUserData().then((response)=>{
      setData(response.data)
      setRoleCode(response.data.roleCode)
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            {localStorage.getItem("USER_KEY") &&
            <>
              {roleCode ==="ADMIN" &&
            <Route path='/signup' element={<Signup/>}/>
            
            }
            </>}
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
            <Route path='/viewRequests' element={<Adminmanager/>}/>
            <Route path='/viewDetails/:id' element={<ViewRequest/>}/>
            <Route path='/adminresponse' element={<Adminresponse/>}/>
            <Route path='/calendar' element={<Calendar/>}/>
            <Route path='/chart' element={<Chart/>}/>
            <Route path='*' element={<Login/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Routing