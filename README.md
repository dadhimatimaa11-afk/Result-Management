# Result Management System

A full-stack web application for managing student results.  
This project includes:
- **Frontend (React)** → located in `/result`
- **Backend (Node.js + Express + MongoDB)** → located in `/project6`

---

##  Tech Stack
- **Frontend:** React, HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)
- **Authentication:** JWT 
- **Other Tools:** Nodemailer, Middleware, Utilities

---

##  Folder Structure
Result-Management/
│
├── project6/        # Backend (controllers, models, routes, middleware, utils)
│   ├── server.js
│   ├── .env
│   ├── package.json
│   └── ...
│
├── result/          # Frontend (React app)
│   ├── src/
│   ├── package.json
│   └── ...
│
└── README.md

---

##  Setup Instructions

### 1️ Clone the repository
```bash
git clone https://github.com/dadhimatimaa11-afk/Result-Management.git
cd Result-Management

cd project6
npm install

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
TWILIO_ACCOUNT_SID=your_sid
TWILIO_AUTH_TOKEN=your_token

npm start

cd ../result/student
npm install
npm run dev

Features
.Student result entry and management

.Secure authentication (JWT)

.Bulk upload for students and subjects

.RESTful APIs for backend

.Responsive frontend UI


