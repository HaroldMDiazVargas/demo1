FROM node:18
WORKDIR /app/NodeExpress
COPY package.json .
RUN npm install
COPY . .
EXPOSE 9000
CMD ["npm", "start"]