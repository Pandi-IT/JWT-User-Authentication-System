# JWT-User-Authentication

🚀 Quick Start (For New Developers)

Follow these steps to run the entire project (Backend + Frontend + Database) on any machine using Docker.

✅ 1. Install Required Tools

Before running the project, install:

✔ Docker

https://www.docker.com/products/docker-desktop/

✔ Git

https://git-scm.com/downloads

That's all.
You do NOT need Java, Maven, Node.js, NPM, or MySQL installed locally — Docker handles everything.

✅ 2. Clone the Project

Open terminal and run:

git clone https://github.com/Pandi-IT/JWT-User-Authentication-System.git
cd your-repo


Folder structure:

/backend
/frontend
docker-compose.yml
README.md

✅ 3. Start All Services With ONE Command

From the project root folder, run:

docker-compose up -d --build


This command will:

🔹 Build the Spring Boot Backend

Using Maven inside Docker

🔹 Build the React Frontend

Using Node inside Docker

🔹 Start MySQL Database

With your configured username/password

🔹 Connect all 3 services

Through a shared Docker network

Nothing else required.

✅ 4. Open the Application

Once Docker finishes:

➤ React Frontend

http://localhost:3000

➤ Spring Boot API

http://localhost:8080

➤ MySQL (inside Docker)

Host: auth-mysql
Port: 3306
User: root
Password: 1234

✅ 5. Check If Containers Are Running
docker ps


You should see:

auth-backend

auth-frontend

auth-mysql

✅ 6. Stop All Services
docker-compose down


Stop + delete database volume:

docker-compose down -v

