import axios from 'axios'
const VIEW_BASE_URL = "http://localhost:8888/addnew"


class Service{
    getByCHart(){
        return axios.get(VIEW_BASE_URL+'/getdesig')
    }
}

export default new Service()