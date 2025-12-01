JWT User Authentication System

A full-stack user authentication system using React (Vite) for frontend and Spring Boot for backend with JWT-based authentication.

This project allows users to register, login, access a protected dashboard, and logout securely using JSON Web Tokens (JWT).

🔧 Tech Stack

Frontend: React + Vite

Backend: Spring Boot

Database: MySQL

Authentication: JWT (JSON Web Token)

Password Security: BCrypt

HTTP Client: Axios

⚙️ Features
✅ Registration

Users can create an account with email, password, and confirm password

Passwords are encrypted with BCrypt

Unique email validation

✅ Login

Users can login with email and password

Returns a JWT token on successful login

✅ Dashboard

Protected route accessible only with a valid JWT

Displays a welcome message with user info

✅ Logout

Logout button clears JWT token from localStorage

🛠 API Endpoints
Endpoint	Method	Description
/api/auth/register	POST	Register a new user
/api/auth/login	POST	Login and receive JWT token
/api/user/home	GET	Access protected dashboard (JWT required)
⚡ Setup Instructions
Backend

Configure MySQL database in application.properties

Run Spring Boot backend:

mvn spring-boot:run

Frontend

Go to jwt-auth-frontend/

Install dependencies:

npm install


Run Vite dev server:

npm run dev


Open browser at http://localhost:5173

Make sure CORS is enabled in backend for http://localhost:5173

🔐 JWT & Security

Token stored in localStorage

Token validated in backend via JwtFilter

Passwords stored hashed (BCrypt) in the database

💡 Notes

This project is for learning purposes and can be extended to include:

Role-based access control

Refresh tokens

Email verification

Better frontend UI

📂 Folder Structure
backend/  --> Spring Boot + MySQL
frontend/ --> React + Vite

📌 Author

Pandiyarajan
