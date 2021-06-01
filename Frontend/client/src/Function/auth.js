import axios from 'axios';

export const create0update = async(authtokens) => {
    return(
        await axios.post("http://localhost:8000/api/create-update-user", {}, {
            headers: {
               
                authtoken: authtokens
            }
        })
    )
}

 
export const currentuser = async(authtokens) => {
    return(
        await axios.post("http://localhost:8000/api/current-user", {}, {
            headers: {
                
                authtoken: authtokens
            }
        })
    )
}

export const currentAdmin = async(authtokens) => {
    return(
        await axios.post("http://localhost:8000/api/current-admin", {}, {
            headers: {
               
                authtoken: authtokens
            }
        })
    )
}






