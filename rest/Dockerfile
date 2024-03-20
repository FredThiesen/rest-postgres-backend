# Use an official Node.js runtime as the base image
FROM node:20

# define the env variables DB_HOST, DB_USER, DB_PASS, DB_NAME, ORIGIN, ENVIRONMENT
ENV DB_HOST=database
ENV DB_USER=freduser
ENV DB_PASS=freduserpassword
ENV DB_NAME=freddb
ENV ORIGIN=http://localhost
#ENV ORIGIN=https://ricardothiesen.com.br
ENV ENVIRONMENT=development
#ENV ENVIRONMENT=production

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 3000 for the application
EXPOSE 3000

# Define the command to run the application
CMD [ "npm", "start" ]