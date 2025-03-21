import axios from "axios";

const fetchUsers = async (token) => {
    const response = await axios.get('http://localhost:5000/api/users/getuser', {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

export default fetchUsers;
