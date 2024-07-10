import axios from "axios";

export const createNewPost = async (post,accessToken)=>{
    console.log("asdf", post)
    try {
         const headers = {
            'Authorization': `Bearer ${accessToken}`
        };
        let res = await axios.post("http://localhost:8080/post/create-post", post, {headers})
        return res;
    } catch (error) {
        return error.response;
    }
}

export const getPost = async (accessToken)=>{
    try {
        const headers = {
            'Authorization': `Bearer ${accessToken}`
        };
        let res = await axios.get("http://localhost:8080/post/get-post", {headers});
        // console.log(res)
        return res;
    } catch (error) {
        return error.response;
    }
}