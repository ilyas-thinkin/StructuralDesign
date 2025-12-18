import { Metadata } from 'next';
import ServicesPage from '@/components/ServicesPage/ServicesPage';

export const metadata: Metadata = {
  title: 'Our Services | StructuralDesign.ae - Expert Structural Engineering Solutions',
  description: 'Comprehensive structural design, analysis, drafting, and consultancy services across Dubai and the UAE. Expert structural engineers delivering excellence in every project.',
  keywords: 'structural engineering services, structural design Dubai, structural analysis UAE, authority approvals, 3D BIM modeling, structural calculations, site supervision',
};

export default function Services() {
  return <ServicesPage />;
}
