export interface Review {
  id: string
  text: string
  author: string
  location: string
}

const placeholderText =
  'הכיסויים עמידים לטיח וצבע, וההסרה בסוף לא השאירה שום סימן. כבר הזמנתי אותם לפרויקט הבא.'

export const reviews: Review[] = [
  {
    id: '1',
    author: 'דוד כ.',
    location: 'קבלן ראשי, תל אביב',
    text: placeholderText,
  },
  {
    id: '2',
    author: 'מיכל א.',
    location: 'מנהלת פרויקט, רמת גן',
    text: placeholderText,
  },
  {
    id: '3',
    author: 'יוסי מ.',
    location: 'יזם נדל"ן, הרצליה',
    text: placeholderText,
  },
  {
    id: '4',
    author: 'רונית ל.',
    location: 'מעצבת פנים, ירושלים',
    text: placeholderText,
  },
  {
    id: '5',
    author: 'עמית ש.',
    location: 'קבלן גמר, חיפה',
    text: placeholderText,
  },
  {
    id: '6',
    author: 'נועה ב.',
    location: 'מנהלת תפעול, פתח תקווה',
    text: placeholderText,
  },
  {
    id: '7',
    author: 'אלי ג.',
    location: 'קבלן שיפוצים, באר שבע',
    text: placeholderText,
  },
  {
    id: '8',
    author: 'שרה מ.',
    location: 'יזמית, מודיעין',
    text: placeholderText,
  },
]

export const INITIAL_REVIEWS_COUNT = 4
export const MOBILE_INITIAL_REVIEWS_COUNT = 4
