# Use official Node.js image as base image
FROM node:16

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Expose port 3000 so the app can be accessed from outside the container
EXPOSE 3000

# Command to run the app
CMD ["node", "server.js"]
