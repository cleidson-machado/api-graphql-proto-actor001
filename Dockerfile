# Use the official Node.js image as the base image
FROM node:lts-alpine

# Set the working directory
WORKDIR /app

# Copy files from your computer into the image
COPY . .

# Install the dependencies
RUN npm install

# Specifies what command to run within the container
CMD ["npm", "run", "start:dev"]

# Indicates that the container will listen on port 3000
EXPOSE 3000