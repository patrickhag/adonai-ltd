import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search',
  description: 'Search the Adonai Ltd website.',
  alternates: { canonical: '/search' },
  robots: { index: false, follow: true },
};

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return children;
}
