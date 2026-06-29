export interface ProcessStep {
  id: string
  step: string
  timing: string
  title: string
  description: string
  outcome: string
}

export const processIntro = {
  eyebrow: 'התהליך שלנו',
  title: 'אנחנו מוכרים זמן וודאות - לא חומרים. תוכנית הגנה שומרת על לוח הזמנים שלכם.',
  body: 'רוב הקבלנים מאבדים ימים על נזקים שאתר מוגן היה מונע. ככה זה באמת פשוט.',
}

export const processSteps: ProcessStep[] = [
  {
    id: 'call',
    step: '01',
    timing: 'היום - 2 דקות',
    title: 'שיחה או מילוי טופס הגנה',
    description:
      'ספרו לנו על סוג הפרויקט, המיקום ותאריך ההתחלה.',
    outcome: 'תוכנית הגנה מוגדרת ומוכנה',
  },
  {
    id: 'quote',
    step: '02',
    timing: 'תוך 24 שעות',
    title: 'הצעת מחיר מותאמת',
    description:
      'שלחו סרטון, תמונות או תוכנית מהפרויקט - נבחן את המשטחים מרחוק ונחזור עם הצעת מחיר מדויקת.',
    outcome: 'הצעת מחיר ברורה ומותאמת לפרויקט',
  },
  {
    id: 'install',
    step: '03',
    timing: 'יום 3 - בשטח',
    title: 'התקנה וליווי פרויקט',
    description:
      'צוות מקצועי מתקין הכל - ללא קבלני משנה. אנחנו עוקבים אחרי התנאים לאורך הפרויקט ומתאימים לפי הצורך.',
    outcome: 'הגנה פעילה לאורך כל העבודות',
  },
]
