import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchUserData } from '../../../Api/AuthenticationService'
import Headers from '../../Navbar/Headers'
import Service from './Service/Service'
import * as BootStrap from 'react-bootstrap'
import './Styles/Password.css'
import { ToastContainer, toast } from 'react-toastify';
function Password() {
    const [data,setData] = useState('')
    const usenavigate = useNavigate()
    const [password,setPassword] = useState('')
    

    React.useEffect(()=>{
        fetchUserData().then((response)=>{
            setData(response.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])

    const updatePassword = () =>{
        const details = {password}
        Service.updatePassword(data.id,details).then((response)=>{
            console.log(response)
            toast("PasswordChanged Sucessfully")
            usenavigate(-1)
        }).catch((err)=>{
            console.log(err)
        })
    }


    
  return (
    <div>
        <ToastContainer/>
        <Headers/>
        <div className='passwordchanger'>
            <div className='defaulttext'>Change To Your Password From The Default One</div>
        <input onChange={(e)=>setPassword(e.target.value)}></input>
        <br/>
        <br/>
        <BootStrap.Button variant='warning' onClick={updatePassword}>Submit</BootStrap.Button>
        </div>
    </div>
  )
}

export default Password