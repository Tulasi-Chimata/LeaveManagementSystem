import React, { useEffect, useState } from 'react'
import Headers from '../Navbar/Headers'
import './Styles/Dashboard.css'
import {fetchUserData} from '../../Api/AuthenticationService'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
    const [data,setData] = useState('')
    const usenavigate = useNavigate()

    React.useEffect(()=>{
        fetchUserData().then((response)=>{
            setData(response.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])

    //Hi change this raina9486 as some default password which used for all new user registration it automatically redirect
    //to change password

    useEffect(()=>{
        if(data.password==="123456789"){
            usenavigate('/changepassword')
        }
    },[data])

    return (
        <div>
            <Headers />
            <div className='dignity'>
            <h1>
                <span>We</span>
                <span>Are</span>
                <span>Happy To Help!</span>
                <h1>Raise A Request</h1>
            </h1>
            </div>
        </div>
    )
}

export default Dashboard