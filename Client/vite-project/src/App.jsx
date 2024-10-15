import  { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [response, setResponse] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object to hold the data including the avatar file
    const formData = new FormData();
    formData.append('userName', userName);
    formData.append('email', email);
    formData.append('avatar', avatar); // 'avatar' should match the field name in multer

    try {
      // Send POST request to backend API
      const res = await axios.post('http://localhost:3000/api/v1/users/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true, // Send credentials like cookies (if required)
      });

      // Handle successful response
      setResponse(res.data);
      console.log('User created successfully:', res.data);
    } catch (error) {
      console.error('Error creating user:', error.response?.data || error.message);
    }
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setAvatar(e.target.files[0]); // Set the selected file as the avatar
  };

  return (
    <div>
      <h2>Register User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Name:</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Avatar:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>

      {response && (
        <div>
          <h3>User Created Successfully:</h3>
          <p>UserName: {response.user.userName}</p>
          <p>Email: {response.user.email}</p>
          <img src={response.user.avatar} alt="Avatar" width="150" />
        </div>
      )}
    </div>
  );
};

export default Register;
