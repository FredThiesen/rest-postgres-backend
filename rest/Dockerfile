# Use an official Node.js runtime as the base image
FROM node:20

# Set the working directory in the container to /app
WORKDIR /app

COPY . .

# Install the application dependencies
RUN npm install

# Define the command to run the application
CMD [ "npm", "start" ]