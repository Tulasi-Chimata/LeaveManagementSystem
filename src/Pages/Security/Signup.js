import React, { useEffect}from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchUserData } from '../../Api/AuthenticationService'
import Headers from '../Navbar/Headers'
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';


function Signup() {
    const [data,setData] = useState({})
    const usenavigate = useNavigate()
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [phonenumber,setPhonenumber] = useState('')
    const [password,setPassword] = useState('')
    const [designation, setDesignation] = useState('')
    const [supervisor,setSupervisor] = useState('')
    const [allotedleave,setAllotedleave] = useState('')
    const authorities = [{roleCode:"USER",roleDescription:"USER"}]
    

    React.useEffect(() => {
        fetchUserData().then((response) => {
          setData(response.data)
          console.log(response.data)
        }).catch((error) => {
          console.log(error)
        })
      }, [])

      useEffect(()=>{
        setPassword("123456789")
      },[])

     /* useEffect(()=>{
        if(!localStorage.getItem("USER_KEY")){
            usenavigate('/')
        }else if(localStorage.getItem("USER_KEY")){
            if(data.roleCode==="MANAGER" || data.roleCode==="USER"){
                usenavigate('/')
            }
        }
      })*/

    const handleClick = (e) =>{
        e.preventDefault()
        const adddetails = {username,email,phonenumber,password,designation,supervisor,allotedleave,authorities}
        fetch("http://localhost:8888/addnew/save",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(adddetails)
        }).then((response)=>{
            console.log(response);
            if(!response.ok){
                toast("User Already Exists try Logining in");
                throw Error("User Already Exists With The Emailid")
                
            }
            if(response.ok){
                emailjs.sendForm('service_wztssph', 'template_3w3tjsg', e.target, 'O4AupeoHsIQupGqhl')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
                usenavigate('/')
                toast.success("User Added")
            }
        }).catch((error)=>{
            toast("User Already Present")
        })
        console.log(adddetails)
    }



    

    



    return (
        <div >
            <ToastContainer />
            <Headers/>
            <div className='login'>
            <section>
                <div class="container">
                    <div class="user signinBx">
                        <div class="imgBx"><img src="https://images.pexels.com/photos/8947692/pexels-photo-8947692.jpeg?cs=srgb&dl=pexels-karolina-grabowska-8947692.jpg&fm=jpg" alt=""/></div>
                        <div class="formBx">


                            <div >
                                <div >

                                    <div >
                                        <div >
                                            <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                                                
                                                <li className="nav-item">
                                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="/signup" role="tab" aria-controls="home" aria-selected="true">Signup</a>
                                                </li>
                                            </ul>
                                            <br></br>
                                            <h4 className="gradient">Signup</h4>

                                            <form className="my-login-validation" onSubmit={handleClick}   noValidate={false}>
                                                <div className="gradient">
                                                    
                                                    <input id="username" type="user_email" minLength={8}
                                                       placeholder='Enter Email' name="email"  onChange={(e)=>setUsername(e.target.value)} value={username} required />

                                                    <div className="invalid-feedback">
                                                        UserId is invalid
                                                    </div>



                                                </div>

                                                <div className="gradient">
                                                    <input id="username" type="username" minLength={5}
                                                       placeholder='Enter Username'  name="username" onChange={(e)=>setEmail(e.target.value)} value={email} required />
                                                    <div className="invalid-feedback">
                                                        Username is required
                                                    </div>
                                                </div>

                                                <div className="gradient">
                                                    <input id="phonenumber" type="phonenumber" minLength={10}
                                                       placeholder='Enter Phonenumber'name="phonenumber" onChange={(e)=>setPhonenumber(e.target.value)} value={phonenumber} required />
                                                    <div className="invalid-feedback">
                                                        Phonenumber is required
                                                    </div>
                                                </div>


                                                <div className="gradient">
                                                    <input id="password" type="password" minLength={8}
                                                       placeholder='Enter Password' name="password"  value={password} required />
                                                    <div className="invalid-feedback">
                                                        Password is required
                                                    </div>
                                                </div>

                                                <div className="gradient">
                                                    <input id="designation" type="state" minLength={2}
                                                       placeholder='Enter Designation' name="designation" onChange={(e)=>setDesignation(e.target.value)}  required />
                                                    <div className="invalid-feedback">
                                                        designation is required
                                                    </div>
                                                </div>

                                                <div className="gradient">
                                                    <input id="allotedleave" type="city" minLength={1}
                                                       placeholder='Enter Allotedleave' name="allotedleave" onChange={(e)=>setAllotedleave(e.target.value)}  required />
                                                    <div className="invalid-feedback">
                                                        Allotedleave is required
                                                    </div>
                                                </div>

                                                <div className="gradient">
                                                    <input id="supervisor" type="address" minLength={3}
                                                       placeholder='Enter Supervisor' name="supervisor" onChange={(e)=>setSupervisor(e.target.value)}  required />
                                                    <div className="invalid-feedback">
                                                        supervisor is required
                                                    </div>
                                                </div>






                                                <div className="form-group m-0">
                                                    <button type="submit" className="btn btn-primary" >

                                                       Register


                                                    </button>
                                                </div>
                                                
                                            </form>
                                            


                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            
        </div>



















               
            
        </div>
    )
}

export default Signup