import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { servicesData } from '@/data/servicesData';
import ServiceDetailPage from '@/components/ServicesPage/ServiceDetailPage';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found | StructuralDesign.ae',
    };
  }

  return {
    title: `${service.title} | StructuralDesign.ae`,
    description: service.detailedDescription,
    keywords: `${service.title}, structural engineering Dubai, ${service.title.toLowerCase()} UAE, structural services`,
  };
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}
