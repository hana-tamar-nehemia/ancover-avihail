export interface ProtectionProduct {
  id: string
  title: string
  description: string
  surfaces: string[]
  image: string
}

const img = (name: string) => `/images/products/${name}`

export const productsIntro = {
  eyebrow: 'שירותי הגנה',
  title: 'הגנה זמנית מותאמת לכל שטח',
  subtitle:
    'שירותים מקצועיים לשמירה על איכות ותקינות כל אלמנט בפרויקט — מניעת נזקים, שריטות ולכלוך בזמן העבודות.',
}

/** החליפי תמונות ב-public/images/products/ כשיהיו מוכנות */
export const protectionProducts: ProtectionProduct[] = [
  {
    id: 'doors',
    title: 'הגנת דלתות',
    description:
      'כיסוי חזק ואלגנטי לדלתות כניסה יוקרתיות, עץ טבעי ודלתות פנים — מפני שריטות, חבטות, טיח ולכלוך.',
    surfaces: ['דלתות כניסה', 'דלתות פנים', 'דלתות עץ'],
    image: img('doors.svg'),
  },
  {
    id: 'windows',
    title: 'הגנת חלונות',
    description:
      'שמירה על זכוכית ופרופילי אלומיניום מפני טיח, צבע ושריטות — עמידות ל-UV, פנים וחוץ.',
    surfaces: ['חלונות', 'ויטרינות', 'פרופיל אלומיניום'],
    image: img('windows.svg'),
  },
  {
    id: 'floors',
    title: 'הגנת ריצוף ופרקט',
    description:
      'כיסוי מקצועי על פרקט, שיש, פורצלן וריצוף — מפני ציוד, חומרי בנייה ותנועה כבדה.',
    surfaces: ['פרקט', 'שיש', 'פורצלן', 'ריצוף'],
    image: img('floors.svg'),
  },
  {
    id: 'stairs',
    title: 'הגנת מדרגות',
    description: 'הגנה על מדרגות שיש, עץ או אבן — מניעת שריטות וסדקים בזמן עבודות גמר.',
    surfaces: ['מדרגות שיש', 'מדרגות עץ', 'מדרגות אבן'],
    image: img('stairs.svg'),
  },
  {
    id: 'walls',
    title: 'הגנת קירות',
    description: 'כיסוי קירות גמר, טיח וצבע — הגנה מפני נזקי עבודה ולכלוך לאורך כל הפרויקט.',
    surfaces: ['קירות גמר', 'טיח', 'צבע'],
    image: img('walls.svg'),
  },
  {
    id: 'lobby',
    title: 'הגנת לובי וחלל ציבורי',
    description:
      'פתרון אסתטי ומכובד ללוביים בבניינים מאוכלסים — קלות התקנה והסרה נקייה.',
    surfaces: ['לובי', 'מסדרונות', 'חללים ציבוריים'],
    image: img('lobby.svg'),
  },
  {
    id: 'kitchen',
    title: 'הגנת מטבחים וארונות',
    description: 'כיסוי ארונות, משטחי עבודה ומכשירים — הגנה מלאה במהלך שיפוץ מטבח.',
    surfaces: ['ארונות', 'משטחי עבודה', 'מכשירים'],
    image: img('kitchen.svg'),
  },
  {
    id: 'exterior',
    title: 'הגנה חיצונית',
    description: 'הגנה על חזיתות, ריצוף חוץ ומשטחים חיצוניים — עמידות לתנאי שטח ו-UV.',
    surfaces: ['חזיתות', 'מרפסות', 'ריצוף חוץ'],
    image: img('exterior.svg'),
  },
]
