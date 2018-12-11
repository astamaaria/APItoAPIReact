import axios from 'axios';

export function GetLainsaadantoData (callback){
    axios.get('/api/v1/hankeikkuna/lainsaadanto/')
    .then(response =>{
        callback(response.data);
    });
}

export default GetLainsaadantoData;