import { Router } from 'express'

/**
 * נתיבים עתידיים ל-AI Assistant.
 * כרגע מחזירים תשובות סטטיות - יוחלפו בחיבור ל-OpenAI/Gemini.
 */
export const assistantRouter = Router()

const staticAnswers: Record<string, string> = {
  'הגנת דלתות':
    'Ancover מספקת כיסוי חזק ואלגנטי לדלתות כניסה, עץ טבעי ודלתות פנים — מפני שריטות, חבטות, טיח ולכלוך. המחיר לפי סוג וכמות — שלחו פרטים ב-WhatsApp.',
  'הגנת חלונות':
    'פתרונות ההגנה שלנו שומרים על זכוכית ופרופילי אלומיניום מפני טיח, צבע ושריטות — עמידים ל-UV, קלים להתקנה והסרה.',
  'באילו אזורים':
    'Ancover מספקת פתרונות הגנה לפרויקטי בנייה ושיפוץ בפריסה ארצית. שלחו מיקום פרויקט ב-WhatsApp.',
  'הצעת מחיר':
    'שלחו תוכנית פרויקט, כמות דלתות/חלונות/משטחים ותיאור קצר — נחזור עם הצעת מחיר תוך 24 שעות.',
}

assistantRouter.post('/ask', (req, res) => {
  const question: string = req.body?.question ?? ''
  const normalized = question.trim()

  const answer =
    Object.entries(staticAnswers).find(([key]) => normalized.includes(key))?.[1] ??
    'לא מצאתי תשובה מדויקת. לחצו על WhatsApp ונשמח לעזור!'

  res.json({ answer, fallbackToWhatsApp: !Object.keys(staticAnswers).some((k) => normalized.includes(k)) })
})
