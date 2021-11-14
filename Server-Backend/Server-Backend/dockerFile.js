# Type your Dockerfile here
ARG NODE_VERSION=13
FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/app
COPY  ./project .
#COPY package*.json ./

RUN npm install
EXPOSE 8080
VOLUME /var/lib/project

CMD [ "node", "server.js" ]