FROM node:7.7.2-alpine

WORKDIR /usr/app

COPY package.json .
RUN npm install -g
RUN npm install http-server -g

COPY . .