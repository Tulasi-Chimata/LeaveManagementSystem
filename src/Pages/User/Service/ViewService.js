import axios from 'axios'
const VIEW_BASE_URL = "http://localhost:8888/leave"

class ViewService{


    getByUserId(id){
        return axios.get(VIEW_BASE_URL+'/getByUserid/'+id)
    }


    getByIds(id){
        return axios.get(VIEW_BASE_URL+'/'+id)
    }


    deleteById(id){
        return axios.delete(VIEW_BASE_URL+'/deleteleaverequest/'+id)
    }


    updateLeave(id,type){
        return axios.put(VIEW_BASE_URL+'/updateleave/'+id,type)
    }

}

export default new ViewService()