import axios from 'axios'

const url=`${process.env.REACT_APP_API_URL}/api/`
const user=JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const Token=currentUser?.accessToken;

export const userRequest=axios.create({
    baseURL:url
})
export const adminRequest=axios.create({
    baseURL:url,
    headers:{token:`Bearer ${Token}`}

})
