# 🚀 Advanced Task Manager API

A modern **Task Manager Web Application** built using **Node.js, Express, and REST APIs** with a responsive and attractive frontend UI.
This project demonstrates how to create a **RESTful backend API** and connect it with a **dynamic frontend dashboard** to manage tasks.

---

## 📌 Features

* ✅ Create new tasks
* 📋 View all tasks
* ✏️ Edit / update tasks
* ❌ Delete tasks
* 📊 Task status (Pending / Completed)
* 🎨 Modern dashboard UI
* 🌙 Dark / Light mode toggle
* ✨ Smooth animations
* 🌈 Animated gradient background
* ⚡ REST API architecture

---

## 🛠️ Tech Stack

**Frontend**

* HTML5
* CSS3
* JavaScript

**Backend**

* Node.js
* Express.js

**Other Tools**

* REST API
* JSON Data Storage
* Git & GitHub
* Render (Deployment)

---

## 📂 Project Structure

```
task5-rest-api
│
├── client
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── server
│   ├── server.js
│   │
│   ├── routes
│   │    └── taskRoutes.js
│   │
│   ├── controllers
│   │    └── taskController.js
│   │
│   └── data
│        └── tasks.json
│
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/yourusername/task-manager-api.git
```

### 2️⃣ Navigate to the project folder

```
cd task-manager-api
```

### 3️⃣ Install dependencies

```
npm install
```

### 4️⃣ Start the server

```
node server/server.js
```

Server will run at:

```
http://localhost:5000
```

---

## 🔗 API Endpoints

| Method | Endpoint         | Description     |
| ------ | ---------------- | --------------- |
| GET    | `/api/tasks`     | Get all tasks   |
| POST   | `/api/tasks`     | Create new task |
| PUT    | `/api/tasks/:id` | Update task     |
| DELETE | `/api/tasks/:id` | Delete task     |

---

## 💻 How the Application Works

1. User enters a task in the input field.
2. Frontend sends a **POST request** to the API.
3. Backend saves the task in the data storage.
4. Frontend fetches tasks using **GET request**.
5. Tasks are displayed dynamically on the dashboard.

---

## 🌐 Deployment

This project can be deployed easily on **Render**.

Steps:

1. Push the project to GitHub
2. Go to Render
3. Create **New Web Service**
4. Connect your GitHub repository
5. Set start command:

```
node server/server.js
```

Your API will be live online.

---

## 📸 Screenshot

Add your project screenshot here after running locally.

Example:

```
![Task Manager Dashboard](screenshot.png)
```

---

## 🎯 Learning Objectives

This project demonstrates:

* REST API development
* Client-server communication
* Express routing
* MVC structure
* Frontend + backend integration
* UI/UX improvements

---

## 👩‍💻 Author

**Dimple K**

---

## ⭐ Support

If you like this project, please **star the repository** on GitHub.

```
⭐ Star this repo to support the project!
```
