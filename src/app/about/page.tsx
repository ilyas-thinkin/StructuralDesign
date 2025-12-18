import { Metadata } from 'next';
import AboutPageContent from '@/components/AboutPage/AboutPageContent';

export const metadata: Metadata = {
  title: 'About Our Structural Engineering Team in Dubai',
  description:
    "Dubai's leading structural engineering consultancy with 15+ years of experience, 50+ qualified engineers, and over 500 successful projects delivered across the UAE.",
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About StructuralDesign.ae',
    description:
      "Meet StructuralDesign.ae's engineering team, serving Dubai and the wider UAE with code-compliant design, BIM coordination, and construction support since 2008.",
    url: '/about',
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
