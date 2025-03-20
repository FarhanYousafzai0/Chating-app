import axios from 'axios'

// Register User
const register = async (userData) => {
    const response = await axios.post('http://localhost:5000/api/auth/signup', userData)
    return response.data
}

// Login User
const login = async (userData) => {
    const response = await axios.post('http://localhost:5000/api/auth/login', userData)
    if (response.data.token) {
        localStorage.setItem('token', response.data.token)  // Store token for authenticated routes
    }
    return response.data
    console.log(response.data)
}

const authServices = { register, login }

export default authServices
