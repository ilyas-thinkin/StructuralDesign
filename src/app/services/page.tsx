import { Metadata } from 'next';
import ServicesPage from '@/components/ServicesPage/ServicesPage';

export const metadata: Metadata = {
  title: 'Structural Engineering Services in Dubai & Across the UAE',
  description:
    'Comprehensive structural design, analysis, drafting, BIM coordination, and consultancy services. We prepare authority-ready calculations, drawings, and site support for projects of every scale.',
  keywords: [
    'structural engineering services',
    'structural design Dubai',
    'structural analysis UAE',
    'BIM modeling',
    'authority approvals',
    'structural calculations',
    'site supervision',
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Structural Engineering & BIM Services',
    description:
      'Design, analysis, drafting, BIM coordination, and construction support delivered by StructuralDesign.ae across Dubai and the UAE.',
    url: '/services',
  },
};

export default function Services() {
  return <ServicesPage />;
}
