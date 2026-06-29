export const riskSection = {
  eyebrow: 'המחיר של לא להגן',
  title: 'נזק קטן על משטח - עלות גדולה לכל הפרויקט',
  lead: 'המוניטין שלכם נבנה גימור אחר גימור. נזק למשטחים בזמן בנייה לא רק יקר - הוא מעכב לוחות זמנים, פוגע ביחסי לקוחות ואוכל את הרווח.',
  body: 'Ancover מתמחה בפתרונות הגנה זמנית לפרויקטי בנייה ושיפוץ - יזמי נדל"ן · פרויקטים מגורים · פרויקטים מסחריים. צוות מקצועי, התקנה מקצועית ופתרון מותאם לכל פרויקט.',
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
    value: '₪65,000+',
    description: 'עלות ממוצעת להחלפה לאחר שריטה בפרויקט מגורים יוקרתי',
  },
  {
    id: 'delay',
    title: 'עיכוב בלוח זמנים',
    value: '3–6 שבועות',
    description: 'עיכוב טיפוסי כשתיקון משטח לא מתוכנן נכנס למסלול הקריטי',
  },
  {
    id: 'hardscape',
    title: 'נזק לריצוף חוץ',
    value: '₪90,000+',
    description: 'עלות החלפת אבני ריצוף ומשתלבות',
  },
]
