FROM node:16

# הגדרת ספריית העבודה
WORKDIR /app

# העתקת קבצי package.json ו-lock להתקנת תלויות
COPY package*.json ./

# התקנת תלויות
RUN npm install

# העתקת כל הקבצים הנותרים
COPY . .

# חשיפת הפורט שבו השרת יפעל
EXPOSE 5000

# הפקודה להרצת השרת במצב פיתוח
CMD ["npm", "run", "dev"]
