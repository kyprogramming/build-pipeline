FROM node:14-alpine
WORKDIR /var/node-app
COPY package.json .
RUN npm install
ADD . .
EXPOSE 3000
CMD ["node" , "index.js"]