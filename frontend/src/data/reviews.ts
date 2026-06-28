export const reviewCategories = [
  'הגנת חלונות',
  'הגנת דלתות',
  'הגנת לובי',
  'ריצוף ופרקט',
  'פרויקטים יוקרתיים',
] as const

export type ReviewCategory = (typeof reviewCategories)[number]

export interface Review {
  id: string
  text: string
  author: string
  location: string
  categories: ReviewCategory[]
}

export const reviews: Review[] = [
  {
    id: '1',
    author: 'דוד כהן',
    location: 'קבלן ראשי, תל אביב',
    text: 'עבדנו עם Ancover בפרויקט יוקרתי של 120 יחידות. ההגנה על הדלתות והחלונות הייתה מדויקת — בסיום העבודות הכל נשאר חדש. מומלץ בחום לכל קבלן.',
    categories: ['פרויקטים יוקרתיים', 'הגנת דלתות'],
  },
  {
    id: '2',
    author: 'מיכל אברהם',
    location: 'מנהלת פרויקט, רמת גן',
    text: 'הצוות הגיע בזמן, התקין את כל כיסויי הלובי במהלך יום אחד, והסיר הכל נקי לגמרי. הדיירים לא התלוננו — וזה הכי חשוב.',
    categories: ['הגנת לובי'],
  },
  {
    id: '3',
    author: 'יוסי מזרחי',
    location: 'יזם נדל"ן, הרצליה',
    text: 'בפרויקטים שלנו אנחנו לא מתפשרים על איכות. Ancover סיפקו הגנה על חלונות ויטרינה ופרופילי אלומיניום — בלי שריטה אחת.',
    categories: ['הגנת חלונות', 'פרויקטים יוקרתיים'],
  },
  {
    id: '4',
    author: 'רונית לוי',
    location: 'מעצבת פנים, ירושלים',
    text: 'הלקוחות שלי מבקשים שהפרקט והדלתות יישארו מושלמים לאורך כל השיפוץ. Ancover נותנים לי שקט נפשי — המוצרים נראים טוב ועובדים מעולה.',
    categories: ['ריצוף ופרקט', 'הגנת דלתות'],
  },
  {
    id: '5',
    author: 'עמית שפירא',
    location: 'קבלן גמר, חיפה',
    text: 'השירות מקצועי, המחיר הוגן, וההתקנה מהירה. חוסכים לנו תביעות מדיירים על נזקים — ההשקעה משתלמת.',
    categories: ['הגנת לובי', 'הגנת דלתות'],
  },
  {
    id: '6',
    author: 'נועה ברק',
    location: 'מנהלת תפעול, פתח תקווה',
    text: 'הזמנו חבילת הגנה מלאה לפרויקט שיפוץ בבניין מאוכלס — דלתות, ריצוף לובי וחלונות. הכל בוצע בדייקנות ובזמן.',
    categories: ['פרויקטים יוקרתיים'],
  },
  {
    id: '7',
    author: 'אלי גרינברג',
    location: 'קבלן שיפוצים, באר שבע',
    text: 'הכיסויים עמידים לטיח וצבע, וההסרה בסוף לא השאירה שום סימן. כבר הזמנתי אותם לפרויקט הבא.',
    categories: ['הגנת חלונות', 'הגנת דלתות'],
  },
  {
    id: '8',
    author: 'שרה מ.',
    location: 'יזמית, מודיעין',
    text: 'בפרויקט דירות יוקרה הגנה על פרקט ושיש בלובי היא קריטית. Ancover עמדו בלוחות זמנים צפופים וסיפקו תוצאה מצוינת.',
    categories: ['ריצוף ופרקט', 'הגנת לובי'],
  },
]

export const INITIAL_REVIEWS_COUNT = 8
export const MOBILE_INITIAL_REVIEWS_COUNT = 4

export function getReviewsByCategory(category: ReviewCategory): Review[] {
  return reviews.filter((review) => review.categories.includes(category))
}
