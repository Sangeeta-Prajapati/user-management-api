# User Management API

A simple RESTful API built with **Node.js** and **Express** to manage users.  
This API supports **CRUD operations** and uses a **JSON file** as storage for simplicity, making it easy to demo and deploy.

---

## Features

- List users with optional search and sort
- Get user details by ID
- Create a new user
- Update an existing user
- Delete a user
- Simple JSON file storage (no database needed)

---

## Tech Stack

- Node.js
- Express.js
- JSON file storage
- Body-parser (for parsing JSON requests)

---

## Folder Structure
```
user-management-api/
│
├── data/
│ └── users.json # JSON file storage
├── routes/
│ └── users.js # API routes
├── controllers/
│ └── userController.js # Route logic
├── index.js # Entry point
└── package.json
```


---

## API Endpoints

| Method | Endpoint       | Description                  | Query Params / Body Example |
|--------|----------------|-----------------------------|-----------------------------|
| GET    | /users         | List all users              | `?search=Alice&sort=name&order=asc` |
| GET    | /users/:id     | Get a user by ID            | `/users/1`                  |
| POST   | /users         | Create a new user           | `{ "name": "Fiona", "email": "fiona@example.com" }` |
| PUT    | /users/:id     | Update existing user        | `{ "name": "Alice Updated" }` |
| DELETE | /users/:id     | Delete a user               | `/users/3`                  |

---

## Sample JSON Data

`data/users.json`:

```json
[
  { "id": 1, "name": "Alice Johnson", "email": "alice.johnson@example.com" },
  { "id": 2, "name": "Bob Smith", "email": "bob.smith@example.com" },
  { "id": 3, "name": "Charlie Brown", "email": "charlie.brown@example.com" },
  { "id": 4, "name": "Diana Prince", "email": "diana.prince@example.com" },
  { "id": 5, "name": "Ethan Hunt", "email": "ethan.hunt@example.com" }
]

## Run Locally

1. Install dependencies:
```bash
npm install
```

Start the server (development mode with auto-reload):
```bash
npm run dev
```
Server runs at:
```bash
http://localhost:3000

## 🌍 Deployment

We can deploy this project on Render, Railway, or Replit for a public demo:

Render: https://render.com




##nDemo Tips
- Show GET /users with sample data
- Show POST /users → new user added
- Show PUT /users/:id → update a user
- Show DELETE /users/:id → remove a user
- Highlight search & sort query parameters


### 👨‍💻 Author

## Sangeeta Prajapati

- GitHub: https://github.com/Sangeeta-Prajapati

- LinkedIn: https://www.linkedin.com/in/sangeeta-prajapati-496b64243/

## ⭐ If you like this project, don’t forget to star the repository!