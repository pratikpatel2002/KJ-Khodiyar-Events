# KJ Khodiyar Events - Premium Event Management Website

A professional, modern, and visually stunning website for KJ Khodiyar Events - a premium event management company specializing in weddings, birthdays, corporate events, baby showers, and more.

## 🎨 Features

- **Multi-page Website**: Home, About, Services, Gallery, and Contact pages
- **Premium UI/UX**: Modern, elegant design with luxury theme
- **Color Scheme**: Gold, white, maroon, and royal blue premium colors
- **Responsive Design**: Fully responsive across all devices
- **SEO Optimized**: Complete SEO optimization with meta tags, structured data, and keywords
- **Professional Content**: High-quality, SEO-friendly content throughout
- **Contact Form**: Functional contact form with validation
- **Testimonials**: Client testimonials section
- **FAQ Section**: Comprehensive FAQ section
- **Logo**: Custom SVG logo with monogram and full name

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── gallery/        # Gallery page
│   ├── services/       # Services page
│   ├── layout.tsx      # Root layout with SEO
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── ContactForm.tsx # Contact form component
│   ├── FAQ.tsx         # FAQ component
│   ├── Footer.tsx      # Footer component
│   ├── HeroSection.tsx # Hero section component
│   ├── Logo.tsx        # Logo component
│   ├── Navbar.tsx      # Navigation component
│   ├── ServicesPreview.tsx
│   ├── StatsSection.tsx
│   ├── Testimonials.tsx
│   └── WhyChooseUs.tsx
└── public/             # Static assets (add images/videos here)
```

## 🎯 Services Covered

1. **Weddings / Marriages** - Complete wedding planning and coordination
2. **Birthdays** - Memorable birthday celebrations
3. **Baby Showers** - Joyful baby shower arrangements
4. **Surprise Events** - Perfect surprise event planning
5. **Fire SFX & Cold Pyro** - Spectacular visual effects
6. **Corporate Events** - Professional corporate gatherings
7. **Festival Decorations** - Stunning festival decorations
8. **Haldi / Mehendi Setup** - Traditional ceremony setups

## ✨ New Features Added

### 🎥 Video Placeholders
- **Professional video placeholders** that automatically detect and play your videos
- Homepage hero video placeholder (`/videos/hero-banner.mp4`)
- Services promotional video placeholder (`/videos/services-promo.mp4`)
- Beautiful animated placeholders when videos are missing
- Smooth transitions and hover controls

### 📸 High-Quality Image Placeholders
- **Category-specific gradient placeholders** with brand colors
- Automatic image detection and optimization
- Next.js Image component with lazy loading
- Smooth animations and hover effects
- Gallery images organized by category

### 🎨 Smooth Animations
- **Framer Motion** integration for professional animations
- Fade-in animations on scroll
- Hover effects on cards and buttons
- Smooth page transitions
- Staggered animations for lists
- Scale and rotate effects on interactive elements

## 🖼️ Adding Images and Videos

### Images

1. Create a `public/images/` directory
2. Add your event photos with descriptive names:
   - `wedding-1.jpg`, `wedding-2.jpg`, etc.
   - `birthday-1.jpg`, `birthday-2.jpg`, etc.
   - `baby-shower-1.jpg`, etc.

3. Update the Gallery page to use your actual images:
   - Replace placeholder divs with Next.js Image components
   - Update image paths in `app/gallery/page.tsx`

### Videos

1. Create a `public/videos/` directory
2. Add your promotional videos:
   - `hero-banner.mp4` - Homepage banner video
   - `services-promo.mp4` - Services section video

3. Update video placeholders:
   - `components/HeroSection.tsx` - Add video element
   - `app/services/page.tsx` - Add services video

### Logo

The logo is created as an SVG component in `components/Logo.tsx`. You can:
- Replace it with your actual logo image in `public/logo.png`
- Update the Logo component to use the image instead

## 📝 Content Customization

### Update Contact Information

Edit `components/Footer.tsx` and `app/contact/page.tsx`:
- Phone numbers
- Email addresses
- Business address
- Social media links

### Update Business Information

Edit `app/about/page.tsx`:
- Company story
- Mission and vision
- Team information

### SEO Keywords

The website is optimized for:
- event management
- wedding planner
- birthday decoration
- corporate events
- baby shower
- event planning
- festival decoration
- surprise events
- haldi mehendi setup
- fire SFX
- cold pyro

## 🎨 Color Customization

Colors are defined in `tailwind.config.js`:
- **Gold**: `#ffd700` (primary accent)
- **Maroon**: `#800020` (secondary accent)
- **Royal Blue**: `#002366` (tertiary accent)
- **White**: Base background
- **Gray**: Text and subtle elements

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Icons** - Icons
- **Framer Motion** - Smooth animations
- **SEO Optimization** - Meta tags and structured data

## 📄 License

This project is created for KJ Khodiyar Events.

## 📞 Support

For questions or support, please contact:
- Email: info@kjkhodiyarevents.com
- Phone: +91 XXX XXX XXXX

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Any Node.js hosting

## 📝 Next Steps

1. **Add Real Images**: Replace placeholders with actual event photos (see `VIDEO_IMAGE_GUIDE.md`)
2. **Add Videos**: Upload promotional videos for homepage and services (see `VIDEO_IMAGE_GUIDE.md`)
3. **Update Contact Info**: Add real phone numbers, emails, and address
4. **Google Analytics**: Add tracking code in `app/layout.tsx`
5. **Contact Form Backend**: Connect form to email service or backend API
6. **Social Media**: Update social media links in Footer
7. **Google Verification**: Add verification code in `app/layout.tsx`
8. **OG Image**: Create and add `public/og-image.jpg` for social sharing

## 📚 Additional Documentation

- **`VIDEO_IMAGE_GUIDE.md`** - Complete guide for replacing videos and images
- **`QUICK_START.md`** - Quick start guide
- **`public/ASSETS_README.md`** - Detailed assets documentation

---

Built with ❤️ for KJ Khodiyar Events


