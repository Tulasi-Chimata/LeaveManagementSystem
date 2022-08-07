import axios from 'axios'
const VIEW_BASE_URL = "http://localhost:8888/addnew"

class Service{


    getUserByName(username){
        return axios.get(VIEW_BASE_URL+'/findby/'+username)
    }

    getAllUsers(){
        return axios.get(VIEW_BASE_URL+'/getAllUsers')
    }
   
    getUserById(id){
        return axios.get(VIEW_BASE_URL+'/'+id)
    }

    getByUserVisor(supervisor){
        return axios.get(VIEW_BASE_URL+'/getBySupervisor/'+supervisor)
    }

    updateByAdmin(id,user){
        return axios.put(VIEW_BASE_URL+'/updateByAdmin/'+id,user)
    }

    updateUser(id,user){
        return axios.put(VIEW_BASE_URL+'/updateuser/'+id,user)
    }
    deleteById(id){
        return axios.delete(VIEW_BASE_URL+'/deleteuser/'+id)
    }




}

export default new Service()