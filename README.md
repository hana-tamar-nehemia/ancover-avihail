# Ancover — הגנה באתרי בנייה

אתר תדמית Single Page לחברת Ancover — פתרונות הגנה זמנית לאתרי בנייה ושיפוץ.

## מבנה הפרויקט

```
ancover-avihail/
│
├── frontend/                 ← האתר (React + Vite + TypeScript)
│   ├── public/images/        ← תמונות Hero, גלריית פרויקטים
│   └── src/data/             ← כל התוכן (פתרונות, מחירון, ביקורות...)
│
├── backend/                  ← API (Express) — AI Assistant עתידי
└── package.json
```

## הרצה מהירה

```bash
cd frontend
npm install
npm run dev
```

פתח: http://localhost:5173

## איפה לערוך מה?

| רוצה לשנות... | קובץ |
|---------------|------|
| שם, טלפון, מייל | `frontend/src/data/site.ts` |
| פתרונות הגנה | `frontend/src/data/services.ts` |
| פרויקטים (לפני/אחרי) | `frontend/src/data/works.ts` |
| מחירון | `frontend/src/data/pricing.ts` |
| ביקורות | `frontend/src/data/reviews.ts` |
| טיפים / FAQ | `frontend/src/data/tips.ts`, `faq.ts` |
| תמונת Hero | `frontend/public/images/` |

## Deploy

- **Frontend:** Vercel — Root Directory: `frontend`
