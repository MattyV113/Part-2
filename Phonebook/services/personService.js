import axios from "axios";

const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
    const req = axios.get(baseURL)
    return req.then(response => response.data)
  }


const create = newPerson => {
 const req = axios.post(baseURL, newPerson)
    return req.then(response => response.data)
}

const update =  (id, newPerson) => {
    const req =  axios.put(`${baseURL}/${id}`, newPerson)
    return req.then(response => response.data)
}

const remove = (id) => {
    axios.delete(`${baseURL}/${id}`)
    return getAll()
  }


export default {getAll, create, update, remove}
