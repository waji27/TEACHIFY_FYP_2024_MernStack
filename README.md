# Teachify 🎓

Teachify is a MERN stack–based tutoring platform that connects students with teachers for **online** or **home tuition**.  
It’s designed to simplify the process of finding the right tutor and managing study sessions, inspired by platforms like _TeacherOn_.

---

## ✨ Features

- 🔐 **Authentication & Authorization**  
  Secure signup/login with role-based access (Student / Teacher).

- 👩‍🏫 **Dynamic Signup**  
  Different input fields based on role (student/teacher).

- 🔄 **Role Switching**  
  Users can switch roles later without creating a new account.

- 📚 **Tutor Listings**  
  Teachers can create, update, and delete tutoring posts.

- 🔎 **Search & Filters**  
  Students can search tutors by subject, location, or mode (online/home).

- 🖥️ **Admin Dashboard**  
  Manage users, tutoring posts, and system activity.

- 🌍 **Responsive UI**  
  Built with React + Tailwind CSS for a clean, modern design.

---

## 🛠️ Tech Stack

**Frontend**

- React (with Vite)
- Tailwind CSS
- Axios
- React Router

**Backend**

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT for authentication

**Others**

- bcrypt (password hashing)
- dotenv (environment variables)

---

## 📂 Project Structure

Teachify/
│
├── client/ # React frontend
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── pages/ # App pages (Home, Dashboard, etc.)
│ │ ├── context/ # Auth context
│ │ └── App.jsx
│ └── vite.config.js
│
├── server/ # Express backend
│ ├── controllers/ # Business logic
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API routes
│ ├── middleware/ # Auth middlewares
│ └── server.js
│
└── README.md

yaml
Copy code

---

## 🚀 Getting Started

### Prerequisites

- Node.js (>= 18)
- MongoDB (local or Atlas)
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/teachify.git
cd teachify
Backend Setup
bash
Copy code
cd server
npm install

# Add environment variables in .env
PORT=3030
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key

npm run dev
Frontend Setup
bash
Copy code
cd client
npm install
npm run dev
Now open http://localhost:5173 in your browser 🎉

📸 Screenshots (Optional)
Add some UI screenshots here once you have them.

🧑‍💻 Contributing
Contributions are welcome! If you’d like to improve Teachify:

Fork the repo

Create a new branch (feature/new-feature)

Commit changes

Open a pull request

📜 License
This project is licensed under the MIT License.
Feel free to use and modify it for personal or commercial projects.

🙌 Acknowledgements
Inspired by TeacherOn

Built with ❤️ using the MERN stack
```
