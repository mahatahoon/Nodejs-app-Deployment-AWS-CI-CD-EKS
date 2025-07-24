FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy Package.json, and package-lock.json files into the container
COPY package*.json ./

#Install the NodeJs dependencies 
RUN npm install --only=production
# Coppy other application files into the container
COPY . .

# Expose the app on port 3000
EXPOSE 3000

# Command That runs the app
CMD ["npm", "start"]


