import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUser = () => axios.get(URL)

export const fetchUserById = (id) => axios.get(`${URL}/${id}`)

export const createUser = (data) => axios.post(URL,data)

export const patchUser = (id,data) => axios.patch(`${URL}/${id}`,data)