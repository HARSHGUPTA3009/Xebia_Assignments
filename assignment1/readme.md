# Employee Management System

A simple Employee Management System built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). This application allows users to perform CRUD (Create, Read, Update, Delete) operations on employee records.

## Features

* Add a new employee
* View all employees
* Update employee details
* Delete an employee
* MongoDB database integration
* RESTful API using Express.js
* React frontend with Axios for API communication

## Tech Stack

### Frontend

* React.js
* Vite
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

## Project Structure

```text
employee-management-system/
│
├── backend/
│   ├── models/
│   │   └── emp.js
│   ├── routes/
│   │   └── emproute.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## Installation

### Clone the Repository

```bash
git clone <repository-url>
cd employee-management-system
```

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/employeedb
```

Start the backend server:

```bash
npm run dev
```

Server runs on:

```text
http://localhost:5000
```

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

## API Endpoints

### Get All Employees

```http
GET /api/employees
```

### Create Employee

```http
POST /api/employees
```

Request Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "department": "Engineering",
  "salary": 50000
}
```

### Update Employee

```http
PUT /api/employees/:id
```

### Delete Employee

```http
DELETE /api/employees/:id
```

## Screenshots

Add screenshots of:

* Employee List Page
* Add Employee Form
* Update Employee Functionality
* Delete Employee Functionality

## Future Enhancements

* Search employees
* Employee filtering
* Authentication and authorization
* Pagination
* Dashboard analytics

## Learning Outcomes

This project demonstrates:

* REST API development
* CRUD operations
* MongoDB integration
* React state management
* Frontend-backend communication using Axios
* Full-stack web application development

## Author

Harsh Gupta
