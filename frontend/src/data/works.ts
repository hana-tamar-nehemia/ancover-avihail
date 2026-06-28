export interface WorkItem {
  id: string
  title: string
  description: string
  beforeImage: string
  afterImage: string
}

const worksImage = (filename: string) => `/images/works/${filename}`

export const worksIntro =
  'דוגמאות מהשטח — לפני ואחרי הגנה מקצועית בפרויקטי בנייה ושיפוץ'

export const works: WorkItem[] = [
  {
    id: 'doors',
    title: 'הגנת דלתות כניסה',
    description: 'כיסוי מלא לדלתות יוקרתיות במהלך עבודות גמר — ללא נזק לגימור.',
    beforeImage: worksImage('closet-before.svg'),
    afterImage: worksImage('closet-after.svg'),
  },
  {
    id: 'windows',
    title: 'הגנת חלונות',
    description: 'שמירה על זכוכית ופרופילים מפני טיח וצבע — בפרויקט יוקרתי.',
    beforeImage: worksImage('curtain-before.svg'),
    afterImage: worksImage('curtain-after.svg'),
  },
  {
    id: 'lobby',
    title: 'הגנת לובי בבניין מאוכלס',
    description: 'הגנה אסתטית על ריצוף וקירות בלובי — ללא פגיעה במראה החלל.',
    beforeImage: worksImage('wall-before.svg'),
    afterImage: worksImage('wall-after.svg'),
  },
  {
    id: 'flooring',
    title: 'הגנת ריצוף ופרקט',
    description: 'כיסוי מקצועי על פרקט וריצוף לאורך כל שלבי הבנייה.',
    beforeImage: worksImage('blinds-before.svg'),
    afterImage: worksImage('blinds-after.svg'),
  },
  {
    id: 'kitchen',
    title: 'הגנת מטבח',
    description: 'הגנה על ארונות, משטחים וריצוף במהלך שיפוץ מטבח מלא.',
    beforeImage: worksImage('bathroom-before.svg'),
    afterImage: worksImage('bathroom-after.svg'),
  },
  {
    id: 'facade',
    title: 'הגנת חזית וזכוכית',
    description: 'כיסוי חזיתות וחלונות חוץ — עמידות לתנאי שטח וקרני UV.',
    beforeImage: worksImage('tv-before.svg'),
    afterImage: worksImage('tv-after.svg'),
  },
]
