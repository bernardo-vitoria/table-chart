FROM node:17.0.0
WORKDIR /table-chart/api
# Install app dependencies
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8000
CMD [ "node", "src" ]