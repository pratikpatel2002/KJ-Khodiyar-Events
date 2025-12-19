# Assets Directory - Image and Video Placeholders

This directory is for storing your actual images and videos. Currently, the website uses placeholders.

## 📸 Images Needed

### Event Category Images
Create subdirectories for each event type:

```
public/
├── images/
│   ├── weddings/
│   │   ├── wedding-1.jpg
│   │   ├── wedding-2.jpg
│   │   └── ...
│   ├── birthdays/
│   │   ├── birthday-1.jpg
│   │   └── ...
│   ├── baby-showers/
│   │   ├── baby-shower-1.jpg
│   │   └── ...
│   ├── corporate/
│   │   ├── corporate-1.jpg
│   │   └── ...
│   ├── festivals/
│   │   ├── festival-1.jpg
│   │   └── ...
│   └── haldi-mehendi/
│       ├── haldi-1.jpg
│       └── ...
```

### Recommended Image Specifications:
- **Format**: JPG or WebP
- **Resolution**: Minimum 1920x1080px (Full HD)
- **File Size**: Optimized (under 500KB per image)
- **Aspect Ratio**: 16:9 for banners, 4:3 or 1:1 for gallery

## 🎥 Videos Needed

### Homepage Banner Video
- **File**: `public/videos/hero-banner.mp4`
- **Duration**: 30-60 seconds
- **Resolution**: 1920x1080px (Full HD)
- **Format**: MP4 (H.264 codec)
- **Content**: Showcase of your best events, elegant transitions, company branding

### Services Promotional Video
- **File**: `public/videos/services-promo.mp4`
- **Duration**: 60-90 seconds
- **Resolution**: 1920x1080px (Full HD)
- **Format**: MP4 (H.264 codec)
- **Content**: Overview of all services, event highlights, client testimonials

## 🎨 Logo Files

### Primary Logo
- **File**: `public/logo.png` or `public/logo.svg`
- **Format**: PNG (transparent background) or SVG
- **Size**: Minimum 500x500px
- **Usage**: Header, footer, social media

### Favicon
- **File**: `public/favicon.ico`
- **Size**: 32x32px, 16x16px (multi-size ICO)

## 📱 Social Media Images

### Open Graph Image
- **File**: `public/og-image.jpg`
- **Size**: 1200x630px
- **Format**: JPG
- **Content**: Company branding, tagline, visual appeal

## 🔄 How to Add Images

1. **Gallery Page**: Update `app/gallery/page.tsx` to use Next.js Image component:
```tsx
import Image from 'next/image'

<Image
  src="/images/weddings/wedding-1.jpg"
  alt="Wedding Event"
  width={400}
  height={300}
  className="rounded-xl"
/>
```

2. **Hero Section**: Update `components/HeroSection.tsx` to use video:
```tsx
<video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/videos/hero-banner.mp4" type="video/mp4" />
</video>
```

3. **Services Video**: Update `app/services/page.tsx` similarly.

## 📝 Image Optimization Tips

1. Use tools like:
   - **TinyPNG** - Compress images
   - **Squoosh** - Optimize and convert formats
   - **ImageOptim** - Batch optimization

2. Consider using Next.js Image Optimization:
   - Automatically optimizes images
   - Supports lazy loading
   - Responsive images

3. For best performance:
   - Use WebP format when possible
   - Implement lazy loading for gallery
   - Use appropriate image sizes for different breakpoints

## 🎬 Video Optimization Tips

1. **Compression**: Use tools like HandBrake or FFmpeg
2. **Codec**: H.264 for maximum compatibility
3. **Bitrate**: 5-8 Mbps for good quality/size balance
4. **Thumbnail**: Create poster images for video loading

## ✅ Checklist

- [ ] Add wedding event photos
- [ ] Add birthday event photos
- [ ] Add baby shower photos
- [ ] Add corporate event photos
- [ ] Add festival decoration photos
- [ ] Add Haldi/Mehendi photos
- [ ] Create homepage banner video
- [ ] Create services promotional video
- [ ] Add company logo (PNG/SVG)
- [ ] Create favicon
- [ ] Create Open Graph image for social sharing
- [ ] Optimize all images for web
- [ ] Update image paths in components

---

**Note**: All placeholders are clearly marked in the code. Search for "placeholder" or "Image Placeholder" to find where to add your actual assets.











