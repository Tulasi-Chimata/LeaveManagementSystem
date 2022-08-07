import axios from "axios";

const USER_VIEW_URL = "http://localhost:8888/addnew"

class Service{

    updatePassword(id,user){
        return axios.put(USER_VIEW_URL+'/updatePassword/'+id,user)
    }

}

export default new Service();