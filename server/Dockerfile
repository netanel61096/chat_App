# Dockerfile עבור server
FROM node:16

WORKDIR /app

# התקנת תלויות
COPY package*.json ./
RUN npm install


# העתקת קוד האפליקציה
COPY . .

EXPOSE 4000
CMD ["npm", "start"]
