import axios from 'axios'

const VIEW_BASE_URL = "http://localhost:8888/managereq"

class Service{

    getAllreq(){
        return axios.get(VIEW_BASE_URL+"/getAllRequests")
    }

    getByIds(id){
        return axios.get(VIEW_BASE_URL+'/getManagerReq/'+id)
    }

    updater(id,request){
        return axios.put(VIEW_BASE_URL+'/update/'+id,request)
    }

}

export default new Service()