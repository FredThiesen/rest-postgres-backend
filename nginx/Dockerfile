# Use the Nginx image from Docker Hub
FROM nginx:latest

# delete default nginx configuration
RUN rm /etc/nginx/conf.d/default.conf || true

# Copy a configuration file from the current directory
COPY nginx.conf /etc/nginx/conf.d/

# Start Nginx when the container has provisioned
CMD ["nginx", "-g", "daemon off;"]