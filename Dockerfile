FROM node:12
  WORKDIR /usr/src/product_sales_manager
  COPY package*.json ./
  RUN npm install
  COPY . .
  EXPOSE 3000
  CMD [ "npm", "start" ]