# GREEN-API Тестовое задание (DevOps/Release Engineer)

Client web application for interacting with WhatsApp via the [GREEN-API](https://green-api.com/) service.

## 🚀 Project Features
- **Architecture:** Pure JavaScript (Vanilla JS) without heavy frameworks.
- **Infrastructure:** Full containerization via Docker.
- **Web Server:** Optimized Nginx based on Alpine Linux.
- **DevOps Approach:** The project is ready for one-command deployment.

## 🛠 Tech Stack
- **Frontend:** HTML5, CSS3 (Flexbox), JavaScript (Fetch API).
- **Web Server:** Nginx.
- **DevOps:** Docker, Docker Compose.

## 📦 How to Run the Project

### 1. Prerequisites
Make sure you have `docker` and `docker compose` installed.

### 2. Running the Container
Clone the repository and run the command in the root folder:

```bash
docker compose up --build -d
```
---

# 🏗 Project Architecture
The project is organized according to the principle of separation of concerns. The Nginx web server acts as a proxy and static hosting for the frontend part.
```text
green-api-app/
├── frontend/             # Client side
│   ├── index.html        # Interface markup
│   ├── style.css         # Styles (two-column layout)
│   └── app.js            # Logic (Fetch API, working with methods)
├── nginx/                # Web server configuration
│   └── default.conf      # Static proxy settings
├── Dockerfile            # Image build based on nginx:stable-alpine
├── docker-compose.yml    # Service description for a quick start
└── README.md             # Instructions and description (this file)
```
---

# Application Access

After a successful start, the application will be available at:
👉 http://localhost:8080

---

# 📖 User Guide

```

Get your idInstance and apiTokenInstance in your GREEN-API personal account.

Enter them into the corresponding fields at the top of the application.

Use the buttons to call methods:

getSettings: retrieving profile settings.

getStateInstance: checking authorization status.

sendMessage: sending text (enter the number in the format 79991234567).

sendFileByUrl: sending a file via a direct link.

```
