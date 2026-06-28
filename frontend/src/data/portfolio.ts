export interface PortfolioItem {
  id: string
  category: string
  title: string
  stats: string
  image: string
}

const img = (name: string) => `/images/portfolio/${name}`

export const portfolioIntro = {
  eyebrow: 'פרויקטים',
  title: 'עבודות מהשטח',
  subtitle: 'דוגמאות מפרויקטי בנייה ושיפוץ שבהם הגנו על משטחים יוקרתיים',
}

/** החליפי תמונות ב-public/images/portfolio/ - כרגע placeholders */
export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    category: 'פרויקט מגורים',
    title: 'דירת יוקרה - תל אביב',
    stats: '800 מ"ר מוגנים · אפס תביעות נזק',
    image: img('project-1.svg'),
  },
  {
    id: '2',
    category: 'פרויקט מסחרי',
    title: 'מגדל משרדים - הרצליה',
    stats: '2,400 מ"ר מוגנים · מסירה בזמן',
    image: img('project-2.svg'),
  },
  {
    id: '3',
    category: 'פרויקט מגורים',
    title: 'וילה - רמת השרון',
    stats: '1,200 מ"ר מוגנים · הגנה מלאה',
    image: img('project-3.svg'),
  },
  {
    id: '4',
    category: 'פרויקט מסחרי',
    title: 'לובי בניין מאוכלס - ירושלים',
    stats: '350 מ"ר מוגנים · ללא פגיעה באסתטיקה',
    image: img('project-4.svg'),
  },
  {
    id: '5',
    category: 'פרויקט מגורים',
    title: 'פנטהאוז - מרכז',
    stats: '600 מ"ר מוגנים · פרקט ושיש',
    image: img('project-5.svg'),
  },
  {
    id: '6',
    category: 'פרויקט מסחרי',
    title: 'מרכז קניות - חיפה',
    stats: '5,000 מ"ר מוגנים · לוח זמנים קפדני',
    image: img('project-6.svg'),
  },
  {
    id: '7',
    category: 'פרויקט מגורים',
    title: 'דירות יוקרה - רעננה',
    stats: '1,800 מ"ר מוגנים · 24 יחידות',
    image: img('project-7.svg'),
  },
  {
    id: '8',
    category: 'פרויקט מסחרי',
    title: 'מלון בוטיק - אילת',
    stats: '900 מ"ר מוגנים · הגנה על לובי ומדרגות',
    image: img('project-8.svg'),
  },
]

export const PORTFOLIO_VISIBLE = 4
