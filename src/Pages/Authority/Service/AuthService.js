import axios from 'axios'
const VIEW_BASE_URL = "http://localhost:8888/addnew"

class AuthService{

    updateAuthority(id,authority){
        return axios.put(VIEW_BASE_URL+'/updateAuthority/'+id,authority)
    }

    getAllUsers(){
        return axios.get(VIEW_BASE_URL+'/getAllUsers')
    }

    getById(id){
        return axios.get(VIEW_BASE_URL+'/getAuthority/'+id)
    }
    getExcel(){
        return axios.get(VIEW_BASE_URL+'/export-to-excel')
    }
    

}

export default new AuthService()