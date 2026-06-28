export interface PriceItem {
  id: string
  service: string
  price: string
}

export interface PricingGroup {
  title: string
  items: PriceItem[]
}

export const pricingGroups: PricingGroup[] = [
  {
    title: 'הגנת דלתות',
    items: [
      { id: 'door-standard', service: 'כיסוי דלת פנים סטנדרטית', price: 'לפי הצעת מחיר' },
      { id: 'door-entrance', service: 'הגנת דלת כניסה / עץ טבעי', price: 'לפי הצעת מחיר' },
      { id: 'door-premium', service: 'הגנת דלתות יוקרתיות (מותאם אישית)', price: 'לפי הצעת מחיר' },
    ],
  },
  {
    title: 'הגנת חלונות',
    items: [
      { id: 'window-standard', service: 'כיסוי חלון סטנדרטי (פנים)', price: 'לפי הצעת מחיר' },
      { id: 'window-large', service: 'הגנת חלון גדול / ויטרינה', price: 'לפי הצעת מחיר' },
      { id: 'window-facade', service: 'הגנת חלונות חוץ + פרופיל אלומיניום', price: 'לפי הצעת מחיר' },
    ],
  },
  {
    title: 'הגנת ריצוף ומשטחים',
    items: [
      { id: 'floor-parquet', service: 'כיסוי פרקט / עץ', price: 'לפי הצעת מחיר' },
      { id: 'floor-tile', service: 'הגנת ריצוף שיש / פורצלן', price: 'לפי הצעת מחיר' },
      { id: 'floor-stairs', service: 'הגנת מדרגות', price: 'לפי הצעת מחיר' },
    ],
  },
  {
    title: 'הגנת לובי וחללים',
    items: [
      { id: 'lobby-floor', service: 'כיסוי ריצוף לובי', price: 'לפי הצעת מחיר' },
      { id: 'lobby-walls', service: 'הגנת קירות ועמודים', price: 'לפי הצעת מחיר' },
      { id: 'lobby-full', service: 'חבילת לובי מלאה (ריצוף + קירות)', price: 'לפי הצעת מחיר' },
    ],
  },
]

export const pricingBundleNote =
  'בפרויקטים גדולים ובחבילות משולבות — תינתן הנחה משמעותית!'

export const pricingCtaText =
  'כל פרויקט שונה — שלחו תוכנית, כמות יחידות ותיאור קצר ונחזור עם הצעת מחיר מדויקת.'

export const pricingWhatsappLabel = 'שליחת פרטי פרויקט לקבלת הצעת מחיר'

export const pricingQuoteMessage = `שלום Ancover,\nאשמח לקבל הצעת מחיר להגנה בפרויקט.\nסוג פרויקט:\nכמות דלתות/חלונות:\nמיקום:`
