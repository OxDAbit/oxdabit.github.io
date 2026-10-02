export const SITE = {
  title: '0xDA bit',
  description:
    'Blog personal de 0xDA bit: software, IA, diseño hardware, impresión 3D, cosplay y los proyectos que salen de mezclarlo todo.',
  author: '0xDA bit',
  locale: 'es-ES',
  url: 'https://oxdabit.github.io',
};

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export const SOCIAL = [
  { label: 'GitHub', handle: 'OxDAbit', href: 'https://github.com/OxDAbit' },
  { label: 'YouTube', handle: '@0xDAbitLabs', href: 'https://www.youtube.com/@0xDAbitLabs' },
  { label: 'X', handle: '@0xDA_bit', href: 'https://x.com/0xDA_bit' },
  { label: 'Instagram', handle: '@oxdabitlabs', href: 'https://www.instagram.com/oxdabitlabs/' },
  { label: 'TikTok', handle: '@oxdabit.labs', href: 'https://www.tiktok.com/@oxdabit.labs' },
];

export function formatDate(date: Date, style: 'short' | 'long' = 'short') {
  if (style === 'long') {
    return date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
  }
  // Formato de cajetín de plano: 2026-05-12
  return date.toISOString().slice(0, 10);
}
