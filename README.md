Docker Web Application
This repository contains a basic web application that runs inside a Docker container. The application is built using Node.js and serves a simple webpage. Docker Compose is used to manage the application and its services.
Prerequisites
Before you begin, ensure you have the following installed on your system:
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
Getting Started
Follow the steps below to set up the project locally:
1. Clone the Repository
Clone the repository to your local machine using the following command:
git clone https://github.com/yourusername/devops.git
2. Build and Start the Application
Navigate to the project directory:
cd devops
Now, you can use Docker Compose to build and start the application:
docker-compose up --build
This command will:
- Build the Docker images as defined in the `docker-compose.yml` file.
- Start the web application and any dependent services (e.g., database) in containers.
3. Access the Application
Once the containers are up and running, you can access the web application in your browser by visiting:
http://localhost:3000
If you are running it on a remote server or want to access it from another device, replace `localhost` with your machine's IP address.
4. Stopping the Application
To stop the application and remove the running containers, use:
docker-compose down
This will stop all the containers and clean up the networks, volumes, and images created by Docker Compose.
Project Structure
The project is structured as follows:

devops/
│
├── server.js                 # The main Node.js server file
├── Dockerfile                # The Dockerfile for building the application image
├── docker-compose.yml        # Docker Compose configuration file
├── package.json              # Node.js dependencies and scripts
└── package-lock.json         # Node.js lock file

Files:
- **Dockerfile**: Defines the Docker image for the application.
- **docker-compose.yml**: Defines the services, networks, and volumes for Docker Compose.
- **server.js**: The simple Node.js application that serves the webpage.
- **package.json**: Lists the dependencies for the Node.js application.
Docker Compose Configuration
The `docker-compose.yml` file configures the web service and maps ports for external access.
```yaml

version: '3'
services:
  web:
    image: node:16
    ports:
      - "3000:3000"
    volumes:
      - .:/usr/src/app
    environment:
      - NODE_ENV=development

```
- `web`: This service uses the Node.js image (`node:16`), exposes port `3000`, and mounts the current directory as a volume to the container.
- `volumes`: The current directory (`.`) is mounted to `/usr/src/app` inside the container, which ensures that any changes to the source code are immediately reflected inside the container.
Troubleshooting
- **Port Issues**: If you see an error saying that port `3000` is already in use, you may need to stop any running services that are occupying that port.
```bash
docker ps
docker stop <container_id>
```
- **Docker Not Running**: Ensure Docker and Docker Compose are running before executing any commands. Check if Docker is installed properly using:
```bash
docker --version
docker-compose --version
```
