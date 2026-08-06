# AI Dev Flow

## Overview

AI Dev Flow is an AI-powered software development platform built using a microservices architecture.

It helps developers create, manage, and automate software projects by combining AI-powered code generation with project management, background workers, authentication, and real-time communication.

---

## Problem Statement

Modern software development requires developers to use multiple tools for:

- Authentication
- Project management
- AI code generation
- Background processing
- Notifications
- Team collaboration

AI Dev Flow combines these capabilities into a single scalable platform.

---

## Goals

- AI-assisted development
- Secure authentication
- Project management
- Background job processing
- Scalable microservices architecture
- Easy deployment using Docker

---

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend

- Node.js
- Express.js
- TypeScript

### Database

- MongoDB
- Mongoose

### Authentication

- JWT
- Refresh Tokens
- HTTP-only Cookies
- bcrypt

### Messaging

- RabbitMQ

### Caching

- Redis (Planned)

### AI

- OpenAI API (Planned)

### Infrastructure

- Docker
- Docker Compose
- Kubernetes (Planned)

---

## Project Structure

```text
apps/
    auth-service
    api-gateway
    project-service
    ai-service
    worker-service
    client

packages/
    config
    database
    logger
    validation
    types
```

---

## Completed

### Auth Service

- User Registration
- Login
- Logout
- Refresh Token
- Get Profile
- Change Password
- JWT Authentication
- Password Hashing
- Repository Pattern
- Global Error Handling
- Shared Validation
- Logging

---

## In Progress

- API Gateway

---

## Planned

- Project Service
- AI Service
- Worker Service
- Redis Integration
- Email Verification
- Forgot Password
- Reset Password
- Notifications
- CI/CD
- Kubernetes Deployment

---

## Installation

```bash
git clone <repository>

cd AI-DEV-FLOW

npm install
```

---

## Environment Variables

Create a `.env` file.

Example:

```env
PORT=
MONGODB_URI=

JWT_SECRET=
JWT_REFRESH_SECRET=

SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=

CLIENT_URL=
```

---

## Running the Project

```bash
npm run dev
```

---

## Architecture

Microservices:

- Auth Service
- API Gateway
- Project Service
- AI Service
- Worker Service

Shared Packages:

- Config
- Database
- Logger
- Validation
- Types

---

## Future Improvements

- OAuth Login
- Two Factor Authentication
- Email Verification
- Password Reset
- Redis
- Monitoring
- Docker Swarm
- Kubernetes
- Automated Testing

---

## License

MIT