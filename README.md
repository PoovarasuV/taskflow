# TaskFlow — Todo Application

A modern Todo Management Application built using **React**, **Node.js**, and **Express.js**.

TaskFlow allows users to manage tasks through a cyberpunk-inspired interface while supporting complete CRUD operations and detailed task tracking.

---

## Live Demo

Frontend:
https://poovarasutodoapp.netlify.app/

Backend API:
https://poovarasutodoapp-backend.onrender.com

---

## GitHub Repository

https://github.com/PoovarasuV/taskflow

---

# Features

### Todo Management

* Create new todos
* View all todos
* Update task status
* Delete tasks
* Reopen completed tasks

### Search

* Live search
* Search suggestions dropdown
* Click suggestion to open details page

### Priority Levels

* Low Priority
* Medium Priority
* High Priority

### Dashboard

* Total Tasks
* Active Tasks
* Completed Tasks
* Progress Percentage

### Todo Details Page

Displays:

* Task Title
* Description
* Priority
* Completion Status
* Created Date
* Updated Date

### UI Experience

* Cyberpunk Theme
* Animated Hero Title
* Neon Interface
* Responsive Layout
* Multi-page Navigation

---

# Tech Stack

## Frontend

* React.js
* React Router DOM
* Axios
* CSS

## Backend

* Node.js
* Express.js

## Data Storage

* JSON File Storage

---

# Application Architecture

```plaintext
frontend/
│
├── src/
│   ├── pages/
│   │   ├── TodoList.jsx
│   │   └── TodoDetails.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   └── styles.css
│
backend/
│
├── routes/
│   └── todos.js
│
├── data/
│   └── todos.json
│
└── server.js

README.md
FEATURES.md
API.md
```

---

# Installation

## Clone Repository

```bash
https://github.com/PoovarasuV/taskflow
cd todo-app
```

---

## Run Backend

```bash
cd backend

npm install

node server.js
```

Backend runs at:

```plaintext
http://localhost:5000
```

Production:

```plaintext
https://poovarasutodoapp-backend.onrender.com
```

---

## Run Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend runs at:

```plaintext
http://localhost:5174
```

Production:

```plaintext
https://todoappvpoovarasu.netlify.app
```
# Pages

## Page 1 — Todo Dashboard

Features:

* Add Todo
* Search Todo
* Manage Todo Status
* Delete Todo
* Track Progress

---

## Page 2 — Todo Details

Route Example:

```plaintext
/todo?id=123
```

Displays:

* Title
* Description
* Priority
* Status
* Created Date
* Updated Date

---

# API Overview

| Method | Endpoint   | Description     |
| ------ | ---------- | --------------- |
| GET    | /todos     | Get all todos   |
| GET    | /todos/:id | Get single todo |
| POST   | /todos     | Create todo     |
| PUT    | /todos/:id | Update todo     |
| DELETE | /todos/:id | Delete todo     |

Full documentation available in:

```plaintext
API.md
```

---

# Documentation

Additional documentation:

```plaintext
FEATURES.md
API.md
```

---

# Developed By

**Poovarasu V**
