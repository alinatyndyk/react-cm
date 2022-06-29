import axios from "axios";

let axiosInstanse = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
})

const getUsers = () => axiosInstanse.get('')
const getUserPosts = (id) => axiosInstanse.get(`/${id}/posts`)

export {getUsers, getUserPosts}