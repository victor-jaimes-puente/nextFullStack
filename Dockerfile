# Use the official Node.js runtime as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the app's dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Set the environment variables for the app
ENV NODE_ENV production

# Build the app
RUN npm run build

# Expose the app's port
EXPOSE 80

# Start the app
CMD [ "npm", "start" ]
