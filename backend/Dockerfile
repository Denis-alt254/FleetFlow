FROM node:latest

COPY package.json /F-backend/

COPY backend /F-backend/

RUN npm install 

CMD [ "node" "server.js" ]