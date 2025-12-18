import { Metadata } from 'next';
import PortfolioPageContent from '@/components/PortfolioPage/PortfolioPageContent';

export const metadata: Metadata = {
  title: 'Portfolio - 500+ Structural Engineering Projects Across the UAE',
  description:
    'Explore our portfolio of villas, commercial towers, industrial facilities, and infrastructure projects completed across Dubai and the UAE.',
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    title: 'Structural Engineering Portfolio',
    description:
      'Residential, commercial, industrial, and infrastructure projects delivered by Structural Designs across the UAE.',
    url: '/portfolio',
  },
};

export default function PortfolioPage() {
  return <PortfolioPageContent />;
}
