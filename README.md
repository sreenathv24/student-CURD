# Student Management System 🎓

A professional, full-stack Student Management System built with **React**, **Spring Boot**, and **MySQL/PostgreSQL**.

## 🚀 Live Deployment

### 1. Backend (Render)
Click the button below to deploy the backend API and Database to Render instantly:

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/sreenathv24/student-CURD)

### 2. Frontend (Firebase)
After the backend is live, update `.env.production` with your Render URL and run:
```bash
cd StudentDataAllAndID/frontend
npm run build
firebase deploy --only hosting
```

## ✨ Features
- **Premium UI**: Glassmorphism, animated cards, and responsive tables.
- **Full CRUD**: Add, Search, Update, and Delete students.
- **Persistent DB**: Automated PostgreSQL provisioning on Render.
