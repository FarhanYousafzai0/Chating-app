import axios from 'axios'

// Register User
const register = async (userData) => {
    const response = await axios.post('http://localhost:5000/api/auth/signup', userData)
    return response.data
}

// Login User
const login = async (userData) => {
    const response = await axios.post('http://localhost:5000/api/auth/login', userData)
   if(response.data){
    localStorage.setItem('user',JSON.stringify(response.data))
   }
    return response.data
   
}

const logout = async()=>{
    await axios.post('http://localhost:5000/api/auth/logout')
    localStorage.removeItem('user')
}

const authServices = { register, login,logout }

export default authServices
