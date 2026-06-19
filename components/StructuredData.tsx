export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Edu Rise',
    url: 'https://edurise.com',
    logo: 'https://edurise.com/images/logo.jpg',
    description: 'Professional coaching institute for Classes 1-10 with expert guidance and personalized learning',
    sameAs: [
      'https://www.facebook.com/people/Edurise-Academy/61590300124385/',
      'https://www.instagram.com/eduriseacedemy?igsh=MTFlODl5dTV6ZnhjNg==',
      'https://youtube.com/edurise',
      'https://twitter.com/edurise',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '12/383, Joshi Road, Karolbagh, Near JMC Hospital',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
      postalCode: '110005',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+91-8799722327',
      email: 'contact@edurise.com',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '500',
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Edu Rise Coaching Institute',
    image: 'https://edurise.com/images/logo.jpg',
    description: 'Best coaching institute for Classes 1-10 in Delhi',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '12/383, Joshi Road, Karolbagh',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
      postalCode: '110005',
      addressCountry: 'IN',
    },
    telephone: '+91-8799722327',
    url: 'https://edurise.com',
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  };

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Comprehensive Classes 1-10 Coaching',
    description: 'Complete coaching for all subjects from Class 1 to 10 with personalized attention',
    provider: {
      '@type': 'Organization',
      name: 'Edu Rise',
      url: 'https://edurise.com',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '500',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
    </>
  );
}
