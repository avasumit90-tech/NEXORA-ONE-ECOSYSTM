/**
 * Nexora One — Central Configuration File
 * Contains verified app links, products, audience routes, ecosystem categories, and footer directories.
 */

export interface ProductItem {
  id: string;
  name: string;
  category: 'beauty-biz' | 'ready';
  benefit: string;
  status: 'Live Website' | 'Demo' | 'Planned' | null;
  url: string | null;
  actionLabel: string;
  iconType:
    | 'customer'
    | 'salonos'
    | 'whitelabel'
    | 'creator'
    | 'partner'
    | 'b2b'
    | 'jobs'
    | 'realestate'
    | 'food'
    | 'carmitra';
}

export interface AudienceItem {
  id: string;
  title: string;
  benefit: string;
  targetAnchor: string | null;
  externalUrl?: string | null;
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

export interface SocialLinkItem {
  id: 'instagram' | 'linkedin' | 'youtube' | 'x';
  label: string;
  url: string | null;
}

export interface FooterBusinessLinkItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'Home', href: '#home', sectionId: 'home' },
  { label: 'Ecosystem', href: '#ecosystem', sectionId: 'ecosystem' },
  { label: 'Products', href: '#products', sectionId: 'products' },
  { label: "Who It's For", href: '#audiences', sectionId: 'audiences' },
  { label: 'About', href: '#about', sectionId: 'about' },
];

export const SOCIAL_LINKS: SocialLinkItem[] = [
  { id: 'instagram', label: 'Instagram', url: null },
  { id: 'linkedin', label: 'LinkedIn', url: null },
  { id: 'youtube', label: 'YouTube', url: null },
  { id: 'x', label: 'X', url: null },
];

export const FOOTER_BUSINESS_LINKS: FooterBusinessLinkItem[] = [
  { label: 'Investor App', href: 'https://nexora-one-v2.vercel.app/', isExternal: true },
  { label: 'Salon Partner App', href: 'https://www.nexorasalon.online/partner-rewards', isExternal: true },
  { label: 'White-label App 1', href: 'https://www.nexorasalon.online/', isExternal: true },
  { label: 'White-label App 2 (Paid)', href: 'https://beauty-zone-pearl.vercel.app/', isExternal: true },
  { label: 'White-label App 3 (Paid)', href: 'https://prompt-b-g.vercel.app/', isExternal: true },
  { label: 'Website Creator App', href: 'https://business-web-solutions-kohl.vercel.app/', isExternal: true },
  { label: 'Growth Partner App', href: 'https://nexora-beauty-network.templateapp67.chatgpt.site/', isExternal: true },
  { label: 'B2B Marketplace', href: 'https://beauty-shop-2.vercel.app/', isExternal: true },
];

export const AUDIENCE_ITEMS: AudienceItem[] = [
  {
    id: 'customer',
    title: 'Customer',
    benefit: 'Salon aur beauty services dhoondhein.',
    targetAnchor: '#products',
    externalUrl: 'https://www.nexorasalon.online/?app=1',
    actionLabel: 'Customer App Kholiye',
    iconType: 'customer',
  },
  {
    id: 'owner',
    title: 'Salon / Shop Owner',
    benefit: 'Apne business ko online laayein aur rewards manage karein.',
    targetAnchor: '#products',
    externalUrl: 'https://www.nexorasalon.online/partner-rewards',
    actionLabel: 'Partner App Kholiye',
    iconType: 'owner',
  },
  {
    id: 'partner',
    title: 'Growth Partner',
    benefit: 'Salons ko Nexora se jodne ka network explore karein.',
    targetAnchor: '#products',
    externalUrl: 'https://nexora-beauty-network.templateapp67.chatgpt.site/',
    actionLabel: 'Growth Partner App',
    iconType: 'partner',
  },
  {
    id: 'b2b',
    title: 'B2B Market',
    benefit: 'Distributor ya Manufacturer ke roop mein trade karein.',
    targetAnchor: '#products',
    externalUrl: 'https://beauty-shop-2.vercel.app/',
    actionLabel: 'B2B App Kholiye',
    iconType: 'b2b',
  },
  {
    id: 'investor',
    title: 'Investor',
    benefit: 'Nexora One ecosystem ka business model aur progress dekhein.',
    targetAnchor: null,
    externalUrl: 'https://nexora-one-v2.vercel.app/',
    actionLabel: 'Investor App Kholiye',
    disabled: false,
    iconType: 'investor',
  },
];

export const PRODUCTS_ROW_1: ProductItem[] = [
  {
    id: 'customer-app',
    name: 'Customer App',
    category: 'beauty-biz',
    benefit: 'Salons aur beauty services dhoondhein aur book karein.',
    status: 'Live Website',
    url: 'https://www.nexorasalon.online/?app=1',
    actionLabel: 'Open Customer App',
    iconType: 'customer',
  },
  {
    id: 'salonos',
    name: 'SalonOS',
    category: 'beauty-biz',
    benefit: 'Salon Partner app — billing, rewards, staff aur appointments sambhalein.',
    status: 'Live Website',
    url: 'https://www.nexorasalon.online/partner-rewards',
    actionLabel: 'Open SalonOS',
    iconType: 'salonos',
  },
  {
    id: 'whitelabel-website',
    name: 'White-label Salon Website',
    category: 'beauty-biz',
    benefit: 'Salon ke apne naam par free customized booking website.',
    status: 'Live Website',
    url: 'https://www.nexorasalon.online/',
    actionLabel: 'Open White-label 1',
    iconType: 'whitelabel',
  },
  {
    id: 'whitelabel-2',
    name: 'White-label App 2 (Paid)',
    category: 'beauty-biz',
    benefit: 'Beauty Zone premium salon website aur booking edition.',
    status: 'Live Website',
    url: 'https://beauty-zone-pearl.vercel.app/',
    actionLabel: 'Open White-label 2',
    iconType: 'whitelabel',
  },
  {
    id: 'whitelabel-3',
    name: 'White-label App 3 (Paid)',
    category: 'beauty-biz',
    benefit: 'Signature paid white-label salon storefront template.',
    status: 'Live Website',
    url: 'https://prompt-b-g.vercel.app/',
    actionLabel: 'Open White-label 3',
    iconType: 'whitelabel',
  },
  {
    id: 'website-creator',
    name: 'Website Builder',
    category: 'beauty-biz',
    benefit: 'Business aur salon websites jaldi create aur launch karne ka app.',
    status: 'Live Website',
    url: 'https://business-web-solutions-kohl.vercel.app/',
    actionLabel: 'Open Website Builder',
    iconType: 'creator',
  },
  {
    id: 'growth-partner',
    name: 'Growth Partner',
    category: 'beauty-biz',
    benefit: 'Local salons ko platform se jodne aur expand karne ka network.',
    status: 'Live Website',
    url: 'https://nexora-beauty-network.templateapp67.chatgpt.site/',
    actionLabel: 'Open Growth Partner',
    iconType: 'partner',
  },
  {
    id: 'b2b-marketplace',
    name: 'Marketplace',
    category: 'beauty-biz',
    benefit: 'Distributors aur manufacturers ke saath direct B2B inventory trade.',
    status: 'Live Website',
    url: 'https://beauty-shop-2.vercel.app/',
    actionLabel: 'Open Marketplace',
    iconType: 'b2b',
  },
];

export const PRODUCTS_ROW_2: ProductItem[] = [
  {
    id: 'salon-jobs',
    name: 'Salon Jobs',
    category: 'ready',
    benefit: 'Beauticians, hair stylists aur salon staff ke liye job portal.',
    status: 'Live Website',
    url: 'https://nexora-salon-job-portal.templateapp67.chatgpt.site/',
    actionLabel: 'Open Salon Jobs',
    iconType: 'jobs',
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    category: 'ready',
    benefit: 'Salons aur commercial shops ke liye No-Broker listing aur leasing.',
    status: 'Live Website',
    url: 'https://no-broker-delta.vercel.app/',
    actionLabel: 'Open Real Estate',
    iconType: 'realestate',
  },
  {
    id: 'food-delivery',
    name: 'Food Delivery',
    category: 'ready',
    benefit: 'Food ordering aur local restaurant discovery platform.',
    status: 'Live Website',
    url: 'https://nexora-food.templateapp67.chatgpt.site/',
    actionLabel: 'Open Food Delivery',
    iconType: 'food',
  },
  {
    id: 'car-mitra',
    name: 'Car Mitra App',
    category: 'ready',
    benefit: 'Jaipur aur local commute ke liye smart vehicle aur car service platform.',
    status: 'Live Website',
    url: 'https://carmitra-jaipur.templateapp67.chatgpt.site/',
    actionLabel: 'Open Car Mitra',
    iconType: 'carmitra',
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
