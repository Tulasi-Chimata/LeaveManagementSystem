import axios from 'axios'

const VIEW_BASE_URL = "http://localhost:8888/managereq"

class ManagerReq{

    getAllreq(){
        return axios.get(VIEW_BASE_URL+"/getAllRequests")
    }

    getLeave(leaveid){
        return axios.get(VIEW_BASE_URL+'/leave/'+leaveid)
    }
    
    getbyManagerId(id){
            return axios.get(VIEW_BASE_URL+'/getbyManager/'+id)
    }

    getBYLeaveid(leaveid){
        return axios.get(VIEW_BASE_URL+'/getleave/'+leaveid)
    }
}

export default new ManagerReq()