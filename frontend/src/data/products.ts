export interface ProtectionProduct {
  id: string
  title: string
  description: string
  image: string
}

const img = (name: string) => `/images/products/${name}`

export const productsIntro = {
  eyebrow: 'שירותי הגנה',
  title: 'הגנה זמנית מותאמת לכל שטח',
  subtitle:
    'שירותים מקצועיים לשמירה על איכות ותקינות כל אלמנט בפרויקט - מניעת נזקים, שריטות ולכלוך בזמן העבודות.',
}

/** החליפי תמונות ב-public/images/products/ כשיהיו מוכנות */
export const protectionProducts: ProtectionProduct[] = [
  {
    id: 'doors',
    title: 'הגנת דלתות ומשקופים',
    description:
      'כיסוי חזק ואלגנטי לדלתות כניסה יוקרתיות, עץ טבעי ודלתות פנים - מפני שריטות, חבטות, טיח ולכלוך.',
    image: '/images/works/doors.jpg',
  },
  {
    id: 'windows',
    title: 'הגנת חלונות',
    description:
      'שמירה על זכוכית ופרופילי אלומיניום מפני טיח, צבע ושריטות - עמידות ל-UV, פנים וחוץ.',
    image: img('windows.svg'),
  },
  {
    id: 'floors',
    title: 'הגנת ריצוף ופרקט',
    description:
      'כיסוי מקצועי על פרקט, שיש, פורצלן וריצוף - מפני ציוד, חומרי בנייה ותנועה כבדה.',
    image: '/images/works/parket2.jpg',
  },
  {
    id: 'stairs',
    title: 'הגנת מדרגות',
    description: 'הגנה על מדרגות שיש, עץ או אבן - מניעת שריטות וסדקים בזמן עבודות גמר.',
    image: '/images/works/stairs4.jpeg',
  },
  {
    id: 'walls',
    title: 'הגנת קירות',
    description: 'כיסוי קירות גמר, טיח וצבע - הגנה מפני נזקי עבודה ולכלוך לאורך כל הפרויקט.',
    image: img('walls.svg'),
  },
  {
    id: 'lobby',
    title: 'הגנת לובי וחלל',
    description:
      'פתרון אסתטי ומכובד ללוביים בבניינים מאוכלסים - קלות התקנה והסרה נקייה.',
    image: '/images/works/lobi.jpeg',
  },
  {
    id: 'kitchen',
    title: 'הגנת מטבחים וארונות',
    description: 'כיסוי ארונות, משטחי עבודה ומכשירים - הגנה מלאה במהלך שיפוץ מטבח.',
    image: img('kitchen.svg'),
  },
  {
    id: 'exterior',
    title: 'הגנה חיצונית',
    description: 'הגנה על חזיתות, ריצוף חוץ ומשטחים חיצוניים - עמידות לתנאי שטח ו-UV.',
    image: img('exterior.svg'),
  },
]
