# Single-page website

## Table of Contents
- [Styling System](#styling-system)
- [Data Constants](#data-constants)

---

## Styling System

The project uses a centralized styling system built on Tailwind CSS, defined in `style.js`. This approach ensures consistency across the application and makes it easy to maintain responsive designs.

### Core Style Constants

#### Spacing Scale
Responsive spacing utilities that adapt to screen sizes:

```javascript
const space = {
  px: 'sm:px-16 px-6',  // Horizontal padding
  py: 'sm:py-16 py-6',  // Vertical padding
  p: 'sm:px-16 px-6 sm:py-12 py-4',  // Combined padding
  mx: 'sm:mx-16 mx-6',  // Horizontal margin
  my: 'sm:my-16 my-6',  // Vertical margin
};
```

**Breakpoints:**
- Mobile: 6 units padding/margin
- Small screens and up (`sm:`): 16 units padding/margin

#### Typography Styles

**Heading 2:**
```javascript
heading2: 'font-poppins font-semibold text-white xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full'
```
- Font: Poppins (semibold)
- Color: White
- Size: 40px (mobile) → 48px (xs screens and up)
- Line height: 66.8px → 76.8px

**Paragraph:**
```javascript
paragraph: 'font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]'
```
- Font: Poppins (normal weight)
- Color: dimWhite
- Size: 18px
- Line height: 30.8px

#### Layout Utilities

**Flexbox Helpers:**
```javascript
flexCenter: 'flex justify-center items-center'
flexStart: 'flex justify-start items-start'
flexEnd: 'flex justify-end items-end'
flexBetween: 'flex justify-between items-center'
```

**Container Width:**
```javascript
boxWidth: 'xl:max-w-[1280px] w-full'
```
Maximum width of 1280px on XL screens, full width on smaller screens.

### Layout System

The `layout` object provides predefined section layouts:

#### Section Layouts
```javascript
section: `flex flex-col md:flex-row ${styles.paddingY}`
```
- Mobile: Column layout
- Medium screens and up: Row layout
- Includes vertical padding

```javascript
sectionReverse: `flex flex-col-reverse md:flex-row ${styles.paddingY}`
```
Same as section, but reverses column order on mobile.

#### Image Positioning
```javascript
sectionImg: `flex-1 flex ${styles.flexCenter} relative md:ml-10 ml-0 md:mt-0 mt-10`
```
For images on the right side (desktop) / bottom (mobile).

```javascript
sectionImgReverse: `flex-1 flex ${styles.flexCenter} relative md:mr-10 mr-0 md:mt-0 mt-10`
```
For images on the left side (desktop) / top (mobile).

#### Content Area
```javascript
sectionInfo: `flex-1 ${styles.flexStart} flex-col`
```
For text content in sections.

### Usage Examples

**Importing styles:**
```javascript
import styles, { layout } from './style.js';
```

**Using in components:**
```javascript
// Section with image on right
<section className={layout.section}>
  <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>Your Title</h2>
    <p className={styles.paragraph}>Your content</p>
  </div>
  <div className={layout.sectionImg}>
    <img src={yourImage} alt="description" />
  </div>
</section>

// Apply padding
<div className={styles.paddingX}>
  Content with horizontal padding
</div>

// Center content
<div className={styles.flexCenter}>
  Centered content
</div>
```

---

## Data Constants

All static content is centralized in `bundle.js` for easy management and updates. This includes navigation, features, testimonials, statistics, and footer content.

### Navigation Links

```javascript
export const navLinks = [
  { id: 'home', title: 'Home' },
  { id: 'services', title: 'Services' },
  // ...
];
```

**Usage:**
```javascript
import { navLinks } from './bundle.js';

navLinks.map((nav) => (
  <li key={nav.id}>
    <a href={`#${nav.id}`}>{nav.title}</a>
  </li>
));
```

### Features

Three main service features with icons, titles, and descriptions:

```javascript
export const features = [
  {
    id: 'feature-1',
    icon: star,
    title: 'Expert Guidance',
    content: 'Description...'
  },
  // ...
];
```

**Usage:**
```javascript
import { features } from './bundle.js';

features.map((feature) => (
  <div key={feature.id}>
    <img src={feature.icon} alt={feature.title} />
    <h4>{feature.title}</h4>
    <p>{feature.content}</p>
  </div>
));
```

### Client Testimonials

```javascript
export const feedback = [
  {
    id: 'feedback-1',
    content: 'Testimonial text...',
    name: 'Client Name',
    title: 'Visa Type',
    img: user
  },
  // ...
];
```

**Usage:**
```javascript
import { feedback } from './bundle.js';

feedback.map((testimonial) => (
  <div key={testimonial.id}>
    <img src={testimonial.img} alt={testimonial.name} />
    <p>{testimonial.content}</p>
    <h5>{testimonial.name}</h5>
    <span>{testimonial.title}</span>
  </div>
));
```

### Statistics

```javascript
export const stats = [
  { id: 'stats-1', title: 'Successful Cases', value: '5,000+' },
  { id: 'stats-2', title: 'Countries Covered', value: '45+' },
  { id: 'stats-3', title: 'Success Rate', value: '98%' }
];
```

**Usage:**
```javascript
import { stats } from './bundle.js';

stats.map((stat) => (
  <div key={stat.id}>
    <h3>{stat.value}</h3>
    <p>{stat.title}</p>
  </div>
));
```

### Footer Links

Organized into three categories: Services, Resources, and Company.

```javascript
export const footerLinks = [
  {
    title: 'Services',
    links: [
      { name: 'Work Visas', link: '/services/work-visas/' },
      // ...
    ]
  },
  // ...
];
```

**Usage:**
```javascript
import { footerLinks } from './bundle.js';

footerLinks.map((column) => (
  <div key={column.title}>
    <h4>{column.title}</h4>
    <ul>
      {column.links.map((link, index) => (
        <li key={link.name}>
          <a href={link.link}>{link.name}</a>
        </li>
      ))}
    </ul>
  </div>
));
```

### Social Media Links

```javascript
export const socialMedia = [
  { id: 'social-media-1', icon: instagram, link: 'https://www.instagram.com/mosioc' },
  // ...
];
```

**Usage:**
```javascript
import { socialMedia } from './bundle.js';

socialMedia.map((social) => (
  <a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer">
    <img src={social.icon} alt="social media" />
  </a>
));
```

### Client Logos

```javascript
export const clients = [
  { id: 'client-1', logo: client },
  // ...
];
```

**Usage:**
```javascript
import { clients } from './bundle.js';

clients.map((client) => (
  <div key={client.id}>
    <img src={client.logo} alt="client" />
  </div>
));
```

---

## Best Practices

### Styling
1. **Always use predefined styles** from `style.js` instead of inline Tailwind classes when possible
2. **Maintain consistency** by using the spacing scale for all padding/margin
3. **Responsive design** is built into the system - styles automatically adapt to screen sizes

### Data Management
1. **Update content** in `bundle.js` rather than hardcoding in components
2. **Add new items** by following the existing data structure patterns
3. **Icons/images** should be imported in `bundle.js` and referenced in data objects
4. **Always include unique IDs** for list items to ensure proper React rendering

### Updating Content

**To modify navigation:**
Edit the `navLinks` array in `bundle.js`

**To change testimonials:**
Edit the `feedback` array in `bundle.js`

**To update statistics:**
Edit the `stats` array in `bundle.js`

**To modify social media links:**
Update URLs in the `socialMedia` array in `bundle.js`

---

## File Structure

```
├── style.js          # Styling system and layout utilities
├── bundle.js         # All static content and data constants
└── assets/           # Icons and images referenced in bundle.js
```