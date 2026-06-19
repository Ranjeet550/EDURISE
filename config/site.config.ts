// Site Configuration - Easy customization file
export const siteConfig = {
  // Brand Information
  brand: {
    name: 'Edu Rise',
    tagline: 'Learn Today, Lead Tomorrow',
    description: 'Professional Coaching Institute for Classes 1-10',
    logo: 'ER', // Can be replaced with image path
  },

  // Contact Information
  contact: {
    phone: ['+91 8799722327', '+91 9811012150'],
    email: 'contact@edurise.com',
    address: {
      street: '12/383, Joshi Road',
      area: 'Karolbagh, Near JMC Hospital',
      city: 'New Delhi',
      state: 'Delhi',
      zip: '110005',
      country: 'India',
    },
    hours: {
      weekday: '9:00 AM - 6:00 PM',
      weekend: 'Closed',
    },
  },

  // Social Media Links
  social: {
    facebook: 'https://www.facebook.com/people/Edurise-Academy/61590300124385/',
    instagram: 'https://www.instagram.com/eduriseacedemy?igsh=MTFlODl5dTV6ZnhjNg==',
    youtube: 'https://youtube.com/edurise',
    twitter: 'https://twitter.com/edurise',
  },

  // Statistics
  stats: {
    yearsExperience: 10,
    studentsTrained: 5000,
    successRate: 95,
  },

  // Courses
  courses: [
    {
      id: 1,
      icon: '🗣️',
      title: 'English Speaking',
      description: 'Speak better, Express better. Master communication skills and build confidence.',
      slug: 'english-speaking',
    },
    {
      id: 2,
      icon: '🎤',
      title: 'Public Speaking',
      description: 'Build Confidence, Lead Anywhere. Develop leadership and presentation abilities.',
      slug: 'public-speaking',
    },
    {
      id: 3,
      icon: '🤖',
      title: 'Basic AI & ML',
      description: 'Learn AI basics, Shape the future. Introduction to artificial intelligence and machine learning.',
      slug: 'ai-ml',
    },
    {
      id: 4,
      icon: '💻',
      title: 'Computer Learning',
      description: 'From basics to advanced level. Complete computer science fundamentals.',
      slug: 'computer-learning',
    },
    {
      id: 5,
      icon: '🌍',
      title: 'Geopolitics',
      description: 'Understand the world, Lead with knowledge. Global affairs and international relations.',
      slug: 'geopolitics',
    },
    {
      id: 6,
      icon: '📚',
      title: 'All Subjects',
      description: 'Class 1 to 10 - All Subjects. Comprehensive curriculum for all academic levels.',
      slug: 'all-subjects',
    },
  ],

  // Features/Why Us
  features: [
    {
      icon: '💡',
      title: 'Smart Digital Board Classes',
      description: 'Interactive learning with modern technology',
    },
    {
      icon: '👥',
      title: 'Small Batch Size',
      description: 'Personalized attention for every student',
    },
    {
      icon: '🎯',
      title: 'Personalized Attention',
      description: 'Customized learning paths for each student',
    },
    {
      icon: '📊',
      title: 'Weekly Tests & Performance Tracking',
      description: 'Regular assessments and progress monitoring',
    },
    {
      icon: '🔄',
      title: 'Doubt Sessions Anytime',
      description: 'Flexible doubt clearing sessions',
    },
    {
      icon: '🤝',
      title: 'Mentorship & Guidance',
      description: 'Expert guidance from experienced mentors',
    },
    {
      icon: '🧠',
      title: 'Focus on Concepts & Application',
      description: 'Deep understanding with practical application',
    },
    {
      icon: '🌟',
      title: 'Personality Development',
      description: 'Holistic development beyond academics',
    },
    {
      icon: '🏠',
      title: 'Safe, Friendly & Motivating Environment',
      description: 'Supportive learning atmosphere',
    },
  ],

  // Co-curricular Activities
  activities: [
    { icon: '🎭', name: 'Dance' },
    { icon: '🎵', name: 'Music' },
    { icon: '🏊', name: 'Swimming' },
    { icon: '🎮', name: 'Games' },
    { icon: '🏏', name: 'Cricket' },
    { icon: '🎨', name: 'Activities' },
  ],

  // Special Offer Details
  specialOffer: {
    title: 'Limited Period Offer',
    subtitle: 'Special Admission Benefits',
    benefits: [
      'Free Demo Class',
      'Early Admission Benefits',
      'Personalized Learning Plan',
      'Expert Guidance & Mentorship',
    ],
    urgency: {
      seatsLeft: 20,
      daysValid: 30,
      discount: 20, // percentage
    },
  },

  // SEO
  seo: {
    title: 'Edu Rise - Coaching Institute | Learn Today, Lead Tomorrow',
    description: 'Professional coaching institute for Classes 1-10. Expert guidance, personalized attention, and holistic development. Join 5000+ successful students.',
    keywords: 'coaching institute, classes 1-10, education, tutoring, Delhi',
    ogImage: '/og-image.png',
  },

  // Navigation Links
  navigation: [
    { label: 'About', href: '#about' },
    { label: 'Courses', href: '#courses' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ],

  // Colors (matches tailwind config)
  colors: {
    primary: '#003d99', // Navy Blue
    accent: '#ffa500', // Gold
    background: '#ffffff', // White
    text: '#001428', // Dark Navy
  },

  // Typography
  fonts: {
    label: 'font-google-sans', // For config labels
    fancy: 'font-fancy', // For fancy headings and special elements
  },
}

export default siteConfig
