import { user, facebook, instagram, linkedin, client, send, shield, star } from '../assets/index';

export const navLinks = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'services',
    title: 'Services',
  },
  {
    id: 'visa-types',
    title: 'Visa Types',
  },
  {
    id: 'testimonials',
    title: 'Testimonials',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

export const promo = {
  mainTitle: 'Your Trusted',
  highlightedText: 'Immigration',
  subheading: 'Partner.',
  description:
    'Our team of immigration experts provides comprehensive visa and citizenship services tailored to your unique needs. We guide you through every step with expertise and care.',
};

export const features = [
  {
    id: 'feature-1',
    icon: star,
    title: 'Expert Guidance',
    content:
      'Our experienced immigration consultants provide personalized guidance through every step of your immigration journey.',
  },
  {
    id: 'feature-2',
    icon: shield,
    title: '100% Confidential',
    content:
      'We take proactive steps to ensure your personal information and documents are handled with complete confidentiality and security.',
  },
  {
    id: 'feature-3',
    icon: send,
    title: 'Fast Processing',
    content:
      'Our streamlined process and direct communication with immigration authorities help expedite your application efficiently.',
  },
];

export const feedback = [
  {
    id: 'feedback-1',
    content:
      "The team made our family's immigration process seamless and stress-free. Their expertise and dedication helped us achieve our dream of living abroad.",
    name: 'Maria Rodriguez',
    title: 'Family Visa Client',
    img: user,
  },
  {
    id: 'feedback-2',
    content:
      'Professional, knowledgeable, and incredibly supportive. They guided me through my work visa application with clarity and confidence.',
    name: 'James Chen',
    title: 'Skilled Worker Visa',
    img: user,
  },
  {
    id: 'feedback-3',
    content:
      "I cannot recommend them enough. They helped me navigate the complex student visa requirements and I'm now studying at my dream university.",
    name: 'Priya Sharma',
    title: 'Student Visa Client',
    img: user,
  },
];

export const stats = [
  {
    id: 'stats-1',
    title: 'Successful Cases',
    value: '5,000+',
  },
  {
    id: 'stats-2',
    title: 'Countries Covered',
    value: '45+',
  },
  {
    id: 'stats-3',
    title: 'Success Rate',
    value: '98%',
  },
];

export const footerLinks = [
  {
    title: 'Services',
    links: [
      {
        name: 'Work Visas',
        link: '/services/work-visas/',
      },
      {
        name: 'Student Visas',
        link: '/services/student-visas/',
      },
      {
        name: 'Family Sponsorship',
        link: '/services/family-sponsorship/',
      },
      {
        name: 'Permanent Residency',
        link: '/services/permanent-residency/',
      },
      {
        name: 'Citizenship Applications',
        link: '/services/citizenship/',
      },
    ],
  },
  {
    title: 'Resources',
    links: [
      {
        name: 'FAQ',
        link: '/resources/faq/',
      },
      {
        name: 'Blog',
        link: '/resources/blog/',
      },
      {
        name: 'Immigration News',
        link: '/resources/news/',
      },
      {
        name: 'Document Checklist',
        link: '/resources/checklist/',
      },
      {
        name: 'Free Consultation',
        link: '/consultation/',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      {
        name: 'About Us',
        link: '/about/',
      },
      {
        name: 'Our Team',
        link: '/team/',
      },
      {
        name: 'Contact Us',
        link: '/contact/',
      },
      {
        name: 'Privacy Policy',
        link: '/privacy/',
      },
      {
        name: 'Terms of Service',
        link: '/terms/',
      },
    ],
  },
];

export const socialMedia = [
  {
    id: 'social-media-1',
    icon: instagram,
    link: 'https://www.instagram.com/mosioc',
  },
  {
    id: 'social-media-2',
    icon: facebook,
    link: 'https://www.facebook.com/mosioc',
  },
  {
    id: 'social-media-4',
    icon: linkedin,
    link: 'https://www.linkedin.com/mosioc',
  },
];

export const clients = [
  {
    id: 'client-1',
    logo: client,
  },
  {
    id: 'client-2',
    logo: client,
  },
  {
    id: 'client-3',
    logo: client,
  },
  {
    id: 'client-4',
    logo: client,
  },
];
