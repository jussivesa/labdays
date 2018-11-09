RUN whoami

# First stage of multi-stage build
FROM node:11-alpine
WORKDIR /app

# copy the contents of agent working directory on host to workdir in container
COPY . .

# dotnet commands to build, test, and publish
RUN npm install

# Second stage - Build runtime image
FROM node:11-alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000 80
CMD ["npm", "start"]