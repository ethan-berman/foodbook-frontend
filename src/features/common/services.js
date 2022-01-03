const axios = require('axios').default;

const base_endpoint = "http://127.0.0.1:8080/api/";
export async function getAllEntities(endpoint){
    let api_req = base_endpoint + endpoint + "/";
    console.log(api_req);
    return axios.get(api_req).then(function(res){
            return res.data;
        }
    );
}