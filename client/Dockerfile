# שלב הבנייה
FROM node:20 AS build

WORKDIR /app

# התקנת תלויות
COPY package*.json ./
RUN npm install

# בניית האפליקציה
COPY . ./
RUN npm run build

# שלב ההפצה
FROM nginx:1.25-alpine
EXPOSE 80

# העתקת קבצי ה-build ל-Nginx
COPY --from=build /app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
