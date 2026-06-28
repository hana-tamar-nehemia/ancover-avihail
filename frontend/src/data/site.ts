/** פרטי האתר והעסק - מקור אמת יחיד לכל המידע הכללי */
export const siteConfig = {
  businessName: 'Ancover',
  headerBrand: 'Ancover — הגנה באתרי בנייה',
  title: 'Ancover | פתרונות הגנה מקצועיים לאתרי בנייה ושיפוץ',
  tagline: 'פתרונות הגנה מקצועיים לאתרי בנייה ושיפוץ',
  slogan:
    'שומרים על איכות הדלתות, החלונות, הריצוף והלוביים — מניעת נזקים, שריטות ולכלוך בזמן העבודות.',
  description:
    'מגוון פתרונות הגנה זמנית על משטחים ואלמנטים באתר הבנייה שלכם — דלתות, חלונות, ריצוף, פרקט, מדרגות, מטבחים, לוביים וחזיתות.',
  phone: '050-000-0000',
  phoneRaw: '972500000000',
  email: 'info@ancover.co.il',
  location: 'פרויקטים בנייה ושיפוץ בפריסה ארצית',
  instagram: '#',
  businessHours: [
    "א'-ה': 08:00-18:00",
    'שישי: 08:00-13:00',
    'שבת: סגור',
  ],
  keywords: [
    'הגנה באתר בנייה',
    'הגנת דלתות בשיפוץ',
    'הגנת חלונות בבנייה',
    'הגנת ריצוף ופרקט',
    'הגנת לובי בבניין',
    'כיסוי זמני לדלתות',
    'הגנה על משטחים בשיפוץ',
    'פתרונות הגנה לקבלנים',
  ],
  whatsappGreeting: 'שלום Ancover,',
} as const

export const navItems = [
  { label: 'בית', href: '#home' },
  { label: 'פתרונות', href: '#services' },
  { label: 'פרויקטים', href: '#works' },
  { label: 'מחירון', href: '#pricing' },
  { label: 'ביקורות', href: '#reviews' },
  { label: 'טיפים ושאלות נפוצות', href: '#tips-faq' },
  { label: 'צור קשר', href: '#contact' },
] as const
