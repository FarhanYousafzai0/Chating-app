# Chat Application

This is a **real-time chat application** built using **MongoDB**, **React**, **Socket.IO**, and **JWT** for authentication. The app allows users to create accounts, log in, and engage in real-time conversations securely.

## 🚀 Features
- **User Authentication** with JWT for secure login and signup
- **Real-time Messaging** powered by Socket.IO
- **MongoDB Integration** for data storage
- **Responsive UI** built with React and Tailwind CSS
- **Avatar System** for user profile pictures
- **Error Handling** for a smooth user experience
- **Secure Password Hashing** with `bcryptjs`

## 🛠️ Tech Stack
- **Frontend:** React, Tailwind CSS, Socket.IO Client
- **Backend:** Node.js, Express.js, MongoDB, Socket.IO Server, JWT
- **Authentication:** JWT (JSON Web Tokens)
- **Database:** MongoDB (Mongoose for data modeling)

## 📂 Project Structure
```
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── .env
│   ├── server.js
│   └── config
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── utils
│   │   ├── App.js
│   │   └── index.js
│
└── README.md
```

## ⚙️ Installation & Setup

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/chat-app.git
cd chat-app
```

### **2. Backend Setup**
```bash
cd backend
npm install
```

### **3. Environment Variables (.env)**
Create a `.env` file in the **backend** folder with the following variables:
```
PORT=5000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### **4. Start Backend Server**
```bash
npm start
```

### **5. Frontend Setup**
```bash
cd ../frontend
npm install
```

### **6. Start Frontend Server**
```bash
npm start
```

## 🔒 Authentication Flow
1. **Signup:** Users register with `username`, `password`, and `gender`. Default avatars are assigned automatically.
2. **Login:** Users authenticate using their `username` and `password`. A JWT token is generated for secure session management.
3. **Protected Routes:** Routes requiring authentication will validate the token to ensure secure access.

## 🔄 Real-time Messaging Flow
1. **Socket.IO Integration:** Upon login, users join a room.
2. **Event Handling:** Messages are sent and received in real-time with events like `message` and `disconnect`.
3. **MongoDB Storage:** Messages are stored in MongoDB for persistence.

## 🚧 Future Enhancements
- **Typing Indicators** for real-time feedback
- **Group Chats** functionality
- **Image/Video Sharing** feature
- **Push Notifications** for new messages

## 🐞 Common Issues & Solutions
**Error:** *"MongoDB connection error"*  
✅ Solution: Ensure your `.env` file has the correct `MONGO_URL`. Also, confirm your MongoDB cluster IP address settings allow access.

**Error:** *"Socket.IO events not firing"*  
✅ Solution: Ensure your frontend and backend URLs match in Socket.IO configuration.

## 💻 Contributing
If you'd like to contribute, feel free to fork the repository and submit a pull request.

## 📜 License
This project is licensed under the **MIT License**.

---

💬 If you have any questions, feel free to reach out!

