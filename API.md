# API Documentation — TaskFlow

This document describes the backend REST API for the TaskFlow Todo Application.

Base URL:

```plaintext
http://localhost:5000
```

Production URL:

```plaintext
https://poovarasutodoapp-backend.onrender.com
```

---

# Authentication

No authentication is required.

---

# Todo Object Structure

Example:

```json
{
  "id": 1751000000000,
  "title": "Finish internship project",
  "description": "Complete documentation and deployment",
  "priority": "High",
  "completed": false,
  "createdAt": "2026-06-27T07:00:00.000Z",
  "updatedAt": "2026-06-27T09:00:00.000Z"
}
```

---

# 1. Get All Todos

Returns all available todos.

## Endpoint

```http
GET /todos
```

## Example Request

```http
GET http://localhost:5000/todos
```

## Success Response

Status:

```plaintext
200 OK
```

Example:

```json
[
  {
    "id": 1751000000000,
    "title": "Finish internship project",
    "priority": "High",
    "completed": false
  }
]
```

---

# 2. Get Single Todo

Returns one todo using its ID.

## Endpoint

```http
GET /todos/:id
```

## Example

```http
GET /todos/1751000000000
```

## Success Response

```json
{
  "id": 1751000000000,
  "title": "Finish internship project",
  "priority": "High",
  "completed": false
}
```

## Error Response

```json
{
  "message": "Not found"
}
```

---

# 3. Create Todo

Creates a new task.

## Endpoint

```http
POST /todos
```

## Request Body

```json
{
  "title": "Complete Assignment",
  "description": "Submit before deadline",
  "priority": "High"
}
```

## Success Response

Status:

```plaintext
201 Created
```

Example:

```json
{
  "id": 1751000000000,
  "title": "Complete Assignment",
  "priority": "High",
  "completed": false
}
```

---

# 4. Update Todo

Updates an existing todo.

## Endpoint

```http
PUT /todos/:id
```

## Example Request

```json
{
  "completed": true
}
```

You may update:

* title
* description
* priority
* completed

## Success Response

```json
{
  "message": "updated"
}
```

---

# 5. Delete Todo

Deletes an existing todo.

## Endpoint

```http
DELETE /todos/:id
```

## Example

```http
DELETE /todos/1751000000000
```

## Success Response

```json
{
  "message": "deleted"
}
```

---

# Data Persistence

Todos are stored locally in:

```plaintext
backend/data/todos.json
```

This allows data persistence even after restarting the server.

---

# Error Handling

Possible status codes:

| Status | Meaning        |
| ------ | -------------- |
| 200    | Success        |
| 201    | Created        |
| 404    | Todo Not Found |
| 500    | Server Error   |

---

# Backend Technologies

* Node.js
* Express.js
* JSON File Storage

---

# Developed By

Poovarasu V
