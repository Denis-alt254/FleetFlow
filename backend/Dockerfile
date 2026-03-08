FROM node:18-alpine

WORKDIR /app/

COPY package*.json ./

RUN npm install 
RUN npm install mongoose express dotenv cors

COPY . .

EXPOSE 5000

CMD [ "node", "server.js" ]