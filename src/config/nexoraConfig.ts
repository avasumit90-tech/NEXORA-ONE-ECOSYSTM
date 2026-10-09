/**
 * Nexora One — Central Configuration File
 * Contains products, audience routes, ecosystem categories, and verified links.
 */

export interface ProductItem {
  id: string;
  name: string;
  category: 'beauty-biz' | 'ready';
  benefit: string;
  status: 'Live Website' | 'Demo' | 'Planned' | null;
  url: string | null;
  actionLabel: string;
  iconType: 'customer' | 'salonos' | 'whitelabel' | 'partner' | 'b2b' | 'jobs' | 'realestate' | 'food';
}

export interface AudienceItem {
  id: string;
  title: string;
  benefit: string;
  targetAnchor: string | null;
  actionLabel: string;
  disabled?: boolean;
  futureNotice?: string;
  iconType: 'customer' | 'owner' | 'partner' | 'b2b' | 'investor';
}

export interface EcosystemCategoryItem {
  id: string;
  title: string;
  description: string;
  iconType: 'beauty' | 'realestate' | 'food' | 'jobs' | 'commerce' | 'advertising' | 'ai';
}

export interface NavLinkItem {
  label: string;
  href: string;
  sectionId: string;
}

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'Home', href: '#home', sectionId: 'home' },
  { label: 'Ecosystem', href: '#ecosystem', sectionId: 'ecosystem' },
  { label: 'Products', href: '#products', sectionId: 'products' },
  { label: "Who It's For", href: '#audiences', sectionId: 'audiences' },
  { label: 'About', href: '#about', sectionId: 'about' },
];

export const AUDIENCE_ITEMS: AudienceItem[] = [
  {
    id: 'customer',
    title: 'Customer',
    benefit: 'Salon aur beauty services dhoondhein.',
    targetAnchor: '#products',
    actionLabel: 'Products Dekhein',
    iconType: 'customer',
  },
  {
    id: 'owner',
    title: 'Salon / Shop Owner',
    benefit: 'Apne business ko online laayein.',
    targetAnchor: '#products',
    actionLabel: 'Products Dekhein',
    iconType: 'owner',
  },
  {
    id: 'partner',
    title: 'Growth Partner',
    benefit: 'Salons ko Nexora se jodne ka kaam samjhein.',
    targetAnchor: '#products',
    actionLabel: 'Products Dekhein',
    iconType: 'partner',
  },
  {
    id: 'b2b',
    title: 'B2B Market',
    benefit: 'Distributor ya Manufacturer ke roop mein explore karein.',
    targetAnchor: '#products',
    actionLabel: 'Products Dekhein',
    iconType: 'b2b',
  },
  {
    id: 'investor',
    title: 'Investor',
    benefit: 'Business model aur current progress dekhein.',
    targetAnchor: null,
    actionLabel: 'Agli phase mein aayega',
    disabled: true,
    futureNotice: 'Page Coming in Future Phase',
    iconType: 'investor',
  },
];

export const PRODUCTS_ROW_1: ProductItem[] = [
  {
    id: 'customer-app',
    name: 'Customer App',
    category: 'beauty-biz',
    benefit: 'Salons aur beauty services dhoondhein aur book karein.',
    status: null,
    url: null,
    actionLabel: 'Link Pending Confirmation',
    iconType: 'customer',
  },
  {
    id: 'salonos',
    name: 'SalonOS',
    category: 'beauty-biz',
    benefit: 'Salon management, billing, staff aur appointments sambhalein.',
    status: null,
    url: null,
    actionLabel: 'Link Pending Confirmation',
    iconType: 'salonos',
  },
  {
    id: 'whitelabel-website',
    name: 'White-label Salon Website',
    category: 'beauty-biz',
    benefit: 'Salon ke apne naam par customized booking website.',
    status: null,
    url: null,
    actionLabel: 'Link Pending Confirmation',
    iconType: 'whitelabel',
  },
  {
    id: 'growth-partner',
    name: 'Growth Partner platform',
    category: 'beauty-biz',
    benefit: 'Local salons ko platform se jodne aur expand karne ka network.',
    status: null,
    url: null,
    actionLabel: 'Link Pending Confirmation',
    iconType: 'partner',
  },
  {
    id: 'b2b-marketplace',
    name: 'B2B Marketplace',
    category: 'beauty-biz',
    benefit: 'Distributors aur manufacturers ke saath direct inventory trade.',
    status: null,
    url: null,
    actionLabel: 'Link Pending Confirmation',
    iconType: 'b2b',
  },
];

export const PRODUCTS_ROW_2: ProductItem[] = [
  {
    id: 'salon-jobs',
    name: 'Salon Jobs',
    category: 'ready',
    benefit: 'Beauticians, hair stylists aur salon staff ke liye job listings.',
    status: null,
    url: null,
    actionLabel: 'Link Pending Confirmation',
    iconType: 'jobs',
  },
  {
    id: 'real-estate',
    name: 'No-Broker Real Estate',
    category: 'ready',
    benefit: 'Salons aur commercial shops ke liye direct listing aur leasing.',
    status: null,
    url: null,
    actionLabel: 'Link Pending Confirmation',
    iconType: 'realestate',
  },
  {
    id: 'food-delivery',
    name: 'Food Delivery',
    category: 'ready',
    benefit: 'Food ordering aur restaurant discovery platform.',
    status: null,
    url: null,
    actionLabel: 'Link Pending Confirmation',
    iconType: 'food',
  },
];

export const ECOSYSTEM_CATEGORIES: EcosystemCategoryItem[] = [
  {
    id: 'beauty',
    title: 'Beauty',
    description: 'Salons, parlours aur wellness services.',
    iconType: 'beauty',
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    description: 'Commercial spaces aur salon properties.',
    iconType: 'realestate',
  },
  {
    id: 'food-delivery',
    title: 'Food Delivery',
    description: 'Food ordering aur local restaurants.',
    iconType: 'food',
  },
  {
    id: 'jobs',
    title: 'Jobs',
    description: 'Salon aur beauty industry ke jobs.',
    iconType: 'jobs',
  },
  {
    id: 'commerce',
    title: 'Commerce',
    description: 'Inventory, equipment aur salon supplies.',
    iconType: 'commerce',
  },
  {
    id: 'advertising',
    title: 'Advertising',
    description: 'Local business visibility aur promotions.',
    iconType: 'advertising',
  },
  {
    id: 'ai-tech',
    title: 'AI & Technology',
    description: 'Salon management software aur smart tools.',
    iconType: 'ai',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '1',
    title: 'Apna option chunein',
    description: 'Apni zaroorat ke hisaab se customer, owner ya partner role chunein.',
  },
  {
    step: '2',
    title: 'Relevant product dekhein',
    description: 'Aapke kaam ke liye banaye gaye specific tools aur platforms explore karein.',
  },
  {
    step: '3',
    title: 'Join karein ya use karna shuru karein',
    description: 'Bina kisi complex paperwork ke digital platform ka fayda uthayein.',
  },
];
