# Base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the server app source code
COPY . .

# Expose the port on which the server will run
EXPOSE $PORT

# Start the server
CMD ["npm", "start"]
