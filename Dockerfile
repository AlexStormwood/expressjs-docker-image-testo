# Fetching the minified node image on apline linux
FROM node:alpine

# Declaring env
ENV NODE_ENV=production

# Setting up the work directory
WORKDIR /express-docker

# Copying all the files in our project
COPY . .

# Installing dependencies
RUN npm ci

# Starting our application
CMD [ "npm", "run", "start" ]

# Exposing server port to Docker
EXPOSE 5000