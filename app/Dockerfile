FROM node:17.0.0
WORKDIR /table-chart/app
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm rebuild node-sass
RUN npm run build
CMD ["npm", "start"]