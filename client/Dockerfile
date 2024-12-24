FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install && npm run build
COPY build/ /app/build
CMD ["npx", "serve", "-s", "build"]
EXPOSE 80
