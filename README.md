# Chat App - מערכת צ'אט

ברוך הבא לפרויקט Chat App - מערכת צ'אט שנבנתה עם Node.js, React, MongoDB, ו-Docker.


## שלבים לתפעול הפרויקט

### שלב 1: הורדת הפרויקט
## דרישות מערכת
1. - [Docker](https://www.docker.com/) מותקן ופועל.
2. - [Git](https://git-scm.com/) מותקן.


   ```bash
   git clone https://github.com/netanel61096/chat_App.git

3. לאחר הורדת הקבצים, כנסו לתיקיית הפרויקט:

   ```bash
   cd chat_App
   ```

---

### שלב 2: בניית הפרויקט עם Docker
1. הריצו את הפקודה הבאה כדי לבנות את הפרויקט:

   ```bash
   docker-compose build
   ```

### שלב 3: שימוש בפרויקט
1. **גישה לפרויקט:**
   פתחו דפדפן והכנסו לכתובת:
   ```
   http://localhost:3000
   ```

2. **שימוש בממשק:**
   - הירשמו למערכת באמצעות שם משתמש וסיסמה.
   - התחילו צ'אט עם משתמשים אחרים.
   - שלחו הודעות בחדרים ייחודיים.
   - בדיקות שליחת הודעות בזמן אמת למשתמשים פרטיים ולחדרים אפשר לפתוח בשתי  
     סוגי דפדפנים או בחלונות נסתרים אפשר לפתוח שם עוד משתשמים ולבדוק זאת בתקווה שתהנו תודה רבה

---

## טיפים חשובים
- אם ישנה בעיה בגישה למערכת, ודאו ש-Docker פועל ושהפקודה `docker-compose up` רצה ללא שגיאות.
- הקוד מוגדר כך שכל שינוי שתעשו יטען אוטומטית (בזכות volumes שמוגדרים ב-Docker Compose).

---

תודה על השימוש בפרויקט שלנו! 🎉