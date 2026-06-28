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
  title: 'משיחה ועד ההסרה',
  subtitle: 'אנחנו מוכרים זמן וודאות - לא חומרים. תוכנית הגנה שומרת על לוח הזמנים שלכם.',
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
    id: 'visit',
    step: '02',
    timing: 'יום 1-2 - ביקור חינם',
    title: 'סיור משותף בשטח',
    description:
      'הצוות שלנו בודק כל משטח, מתעד מצב ומכין מפת הגנה מלאה. תראו בדיוק מה יכוסה ואיך.',
    outcome: 'Scope בכתב ותיעוד צילומי',
  },
  {
    id: 'install',
    step: '03',
    timing: 'יום 3 - בשטח',
    title: 'התקנה וליווי פרויקט',
    description:
      'צוות פנימי מתקין הכל - ללא קבלני משנה. אנחנו עוקבים אחרי התנאים לאורך הפרויקט ומתאימים לפי הצורך.',
    outcome: 'הגנה פעילה לאורך כל העבודות',
  },
  {
    id: 'removal',
    step: '04',
    timing: 'סיום הפרויקט',
    title: 'הסרת המיגון',
    description:
      'בסיום העבודות מגיעים להסיר את כל שכבות ההגנה - נקי, מסודר וללא שאריות דבק או נזק למשטח. המשטחים נשארים כמו ביום המסירה.',
    outcome: 'משטחים נקיים ומוכנים למסירה',
  },
]
