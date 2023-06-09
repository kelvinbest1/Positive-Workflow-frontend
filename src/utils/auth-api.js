const BASE_URL = process.env.REACT_APP_AUTH_URL
console.log(BASE_URL)
// register fetch

export async function registerUser(data){

    try {
        // register logic here
        const url = `${BASE_URL}/register`
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(url, options)

        if(response.ok){
            // parse the JSON sent from the backend -> JS 
            return response.json()
        } else {
            throw new Error(response.statusText)
        }
    }catch(err){
       console.log(err) 
       return err
    }

}





// login 
export async function loginUser(data){
    try {
        // register logic here
        const url = `${BASE_URL}/login`
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(url, options)

        if(response.ok){
            // parse the JSON sent from the backend -> JS 
            return response.json()
        } else {
            throw new Error(response.statusText)
        }
    }catch(err){
       console.log(err) 
       return err
    }

}