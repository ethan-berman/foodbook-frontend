const axios = require('axios').default;

const base_endpoint = "http://127.0.0.1:8080/api/";
export async function getAllEntities(endpoint){
    let api_req = base_endpoint + endpoint + "/";
    let axiosConfig = {
        headers: {
            'Authorization': localStorage.getItem('SavedToken'),
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
    };
    console.log(api_req);
    return axios.get(api_req, axiosConfig).then(function(res){
            return res.data;
        }
    );
}

export async function makePost(endpoint, data){
    let api_req = base_endpoint + endpoint + "/";
    let axiosConfig = {
        headers: {
            'Authorization': localStorage.getItem('SavedToken'),
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
    };
    return axios.post(api_req, data, axiosConfig).then(function(res){
        return res.data;
    });
}