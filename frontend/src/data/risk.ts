export const riskSection = {
  eyebrow: 'המחיר של לא להגן',
  title: 'שריטה אחת עלולה לעלות לכם את הפרויקט',
  lead: 'המוניטין שלכם נבנה גימור אחר גימור. נזק למשטחים בזמן בנייה לא רק יקר — הוא מעכב לוחות זמנים, פוגע ביחסי לקוחות ואוכל את הרווח.',
  body: 'Ancover מתמחה בפתרונות הגנה זמנית לפרויקטי בנייה ושיפוץ יוקרתיים. צוות פנימי, התקנה מקצועית ופתרון מותאם לכל פרויקט.',
  cardTitle: 'מה קורה בלי הגנה',
}

export interface RiskStat {
  id: string
  title: string
  value: string
  description: string
}

export const riskStats: RiskStat[] = [
  {
    id: 'marble',
    title: 'החלפת ריצוף שיש',
    value: '₪60,000+',
    description: 'עלות ממוצעת לת incident שריטה בריצוף יוקרתי',
  },
  {
    id: 'delay',
    title: 'עיכוב בלוח זמנים',
    value: '3–6 שבועות',
    description: 'עיכוב טיפוסי כשתיקון לא מתוכנן נכנס למסלול הקריטי',
  },
  {
    id: 'door',
    title: 'החלפת דלת יוקרתית',
    value: '₪25,000+',
    description: 'עלות החלפת דלת כניסה מעץ טבעי שניזוקה בשיפוץ',
  },
]
