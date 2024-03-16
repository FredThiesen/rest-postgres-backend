# Use the official Docker Hub Postgres image
# See https://hub.docker.com/_/postgres/
FROM postgres:latest

# Expose the Postgres port
EXPOSE 5432

# Add a healthcheck
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD pg_isready -U postgres || exit 1

# Run the rest of the commands as the `postgres` user created by the `postgres` Docker image
USER postgres

# Set the working directory in the Docker container
WORKDIR /docker-entrypoint-initdb.d


# Copy the database schema to the Docker image
COPY ./init.sql /docker-entrypoint-initdb.d/

# Run the database when the Docker container starts
CMD ["postgres"]