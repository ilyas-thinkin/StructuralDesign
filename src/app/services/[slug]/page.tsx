import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { servicesData } from '@/data/servicesData';
import ServiceDetailPage from '@/components/ServicesPage/ServiceDetailPage';
import { OG_IMAGE_PATH, SITE_NAME } from '@/lib/seo';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found',
      alternates: { canonical: '/services' },
    };
  }

  const pageTitle = `${service.title} - Structural Engineering in the UAE`;
  const pageUrl = `/services/${service.slug}`;

  return {
    title: pageTitle,
    description: service.quickViewDescription || service.detailedDescription,
    keywords: [
      service.title,
      `${service.title} Dubai`,
      `${service.title} UAE`,
      'structural engineering Dubai',
      'structural design UAE',
    ],
    alternates: { canonical: pageUrl },
    openGraph: {
      title: `${service.title} | ${SITE_NAME}`,
      description: service.detailedDescription,
      url: pageUrl,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 675,
          alt: service.title,
        },
        {
          url: OG_IMAGE_PATH,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} services`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | ${SITE_NAME}`,
      description: service.quickViewDescription,
      images: [service.image],
    },
  };
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}
