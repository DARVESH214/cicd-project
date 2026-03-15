# CI/CD Docker Project

This project demonstrates a simple Node.js application containerized using Docker.

## Files

app.js - Simple Node.js application  
Dockerfile - Instructions to build the Docker image

## Build Docker Image

```bash
docker build -tdocker run -p 3000:3000 cicd-app cicd-app .
