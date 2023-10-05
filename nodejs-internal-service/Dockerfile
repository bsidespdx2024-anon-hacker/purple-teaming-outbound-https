FROM node:lts-buster

WORKDIR /usr/src/app
COPY . .
RUN npm ci --omit=dev

CMD [ "node", "server.js" ]
