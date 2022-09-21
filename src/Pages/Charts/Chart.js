import React, { useEffect, useState } from 'react'
import './Styles/Style.css'
import {CChart} from '@coreui/react-chartjs'
import JordanService from './Service/Service'
import Headers from "../Navbar/Headers";


function Chart() {
    const [associateSoftware, setAssociateSoftware] = useState("")
    const [consultant, setConsultant] = useState("")
    const [engineer, setEngineer] = useState('')
    const [powerProgrammer,setPowerProgrammer] = useState("")
    const [leadConsultant,setLeadConsultant] = useState("")
    


    useEffect(() => {
        getByValues()
    }, [])



    const getByValues = () => {
        JordanService.getByCHart().then((response) => {
            setPowerProgrammer(response.data.PowerProgrammer)
            setLeadConsultant(response.data.LeadConsultant)
            setAssociateSoftware(response.data.AssociateSoftware)
            setConsultant(response.data.Consultant)
            setEngineer(response.data.Engineer)
            
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }


    return (
        <div className='chart'>
            <Headers/>
            <div className='analysis'>Analysis</div>
            <div className='avaliablejordan'>Designations </div>
            <CChart style={{height:"30%",width:"40%",marginLeft:"22%"}}
                type="doughnut"
                data={{
                    labels: ['AssociateSoftware', 'Consultant', 'Engineer','PowerProgrammer','LeadConsultant'],
                    datasets: [
                        {
                            
                            backgroundColor: ['yellow','brown', 'green','skyblue','pink'],
                            data: [associateSoftware, consultant, engineer,powerProgrammer,leadConsultant],
                        },
                    ],
                }}
                labels="variety"
            />
            
        </div>
    )
}

export default Chart