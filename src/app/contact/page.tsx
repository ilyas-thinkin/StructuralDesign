import { Metadata } from 'next';
import ContactPageContent from '@/components/ContactPage/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact Our Structural Engineers',
  description:
    'Get in touch for structural design, calculations, BIM coordination, and authority approvals across Dubai and the UAE. Request quotes or schedule a consultation with our engineers.',
  keywords: [
    'contact structural engineer Dubai',
    'structural design quote UAE',
    'structural engineering consultancy contact',
    'BIM coordination contact Dubai',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact StructuralDesign.ae',
    description:
      'Reach the StructuralDesign.ae team for project inquiries, proposals, and technical consultations across the UAE.',
    url: '/contact',
  },
  twitter: {
    card: 'summary',
    title: 'Contact StructuralDesign.ae',
    description:
      'Email or call our engineers for structural design, BIM, and authority approval support in Dubai and the UAE.',
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
