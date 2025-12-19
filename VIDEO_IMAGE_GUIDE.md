# Video & Image Replacement Guide

## 🎥 Video Placeholders

### Homepage Hero Video
**Location**: `components/HeroSection.tsx`

**Current Placeholder**: Shows a beautiful animated placeholder

**To Replace**:
1. Add your video file: `public/videos/hero-banner.mp4`
2. The component will automatically detect and use it
3. **Recommended specs**:
   - Format: MP4 (H.264 codec)
   - Resolution: 1920x1080 (Full HD)
   - Duration: 30-60 seconds
   - File size: Optimized (under 10MB recommended)

**Code Location**:
```tsx
<VideoPlaceholder
  src="/videos/hero-banner.mp4"  // ← Just add your file here
  className="w-full h-full"
  autoPlay={true}
  loop={true}
  muted={true}
/>
```

### Services Page Video
**Location**: `app/services/page.tsx`

**To Replace**:
1. Add your video file: `public/videos/services-promo.mp4`
2. **Recommended specs**:
   - Format: MP4 (H.264 codec)
   - Resolution: 1920x1080 (Full HD)
   - Duration: 60-90 seconds
   - File size: Optimized (under 15MB recommended)

**Code Location**:
```tsx
<VideoPlaceholder
  src="/videos/services-promo.mp4"  // ← Just add your file here
  className="w-full h-full"
  autoPlay={false}
  loop={true}
  muted={true}
  showControls={true}
/>
```

---

## 📸 Image Placeholders

### Gallery Page Images
**Location**: `app/gallery/page.tsx`

**Current Placeholders**: Beautiful gradient placeholders with category-specific colors

**To Replace**:
1. Create directory structure:
   ```
   public/
   └── images/
       ├── wedding/
       │   ├── image-1.jpg
       │   ├── image-2.jpg
       │   └── ...
       ├── birthday/
       │   ├── image-1.jpg
       │   └── ...
       ├── baby-shower/
       │   ├── image-1.jpg
       │   └── ...
       ├── corporate/
       │   ├── image-1.jpg
       │   └── ...
       ├── festival/
       │   ├── image-1.jpg
       │   └── ...
       └── haldi-mehendi/
           ├── image-1.jpg
           └── ...
   ```

2. **Recommended Image Specs**:
   - Format: JPG or WebP
   - Resolution: Minimum 1200x1200px (square) or 1920x1080px (landscape)
   - File size: Optimized (under 500KB per image)
   - Aspect ratio: 1:1 for gallery grid

3. The component automatically uses images if they exist, otherwise shows beautiful placeholders

**Code Location**:
```tsx
<ImagePlaceholder
  src={`/images/${item.category}/image-${index + 1}.jpg`}  // ← Your images here
  alt={item.alt}
  width={600}
  height={600}
  category={item.category}
/>
```

### About Page Image
**Location**: `app/about/page.tsx`

**To Replace**:
1. Add your company/team photo: `public/images/about/company-photo.jpg`
2. Update the code:
```tsx
<ImagePlaceholder
  src="/images/about/company-photo.jpg"
  alt="KJ Khodiyar Events Team"
  width={800}
  height={800}
  className="w-full h-full"
/>
```

---

## ✨ How Placeholders Work

### VideoPlaceholder Component
- **If video exists**: Automatically plays the video
- **If video missing**: Shows beautiful animated placeholder with instructions
- **Features**: Auto-play, loop, mute options, hover controls

### ImagePlaceholder Component
- **If image exists**: Uses Next.js Image component with optimization
- **If image missing**: Shows category-specific gradient placeholder
- **Features**: Lazy loading, blur placeholder, hover effects, smooth transitions

---

## 🎨 Placeholder Features

### Video Placeholders Include:
- ✅ Animated play button
- ✅ Gradient backgrounds matching your brand colors
- ✅ Clear instructions for replacement
- ✅ Smooth transitions
- ✅ Responsive design

### Image Placeholders Include:
- ✅ Category-specific gradient colors
- ✅ Animated shimmer effects
- ✅ Smooth fade-in animations
- ✅ Hover effects
- ✅ Clear replacement instructions

---

## 📝 Quick Replacement Checklist

### Videos:
- [ ] Add `public/videos/hero-banner.mp4` (homepage)
- [ ] Add `public/videos/services-promo.mp4` (services page)

### Images:
- [ ] Add wedding photos: `public/images/wedding/image-*.jpg`
- [ ] Add birthday photos: `public/images/birthday/image-*.jpg`
- [ ] Add baby shower photos: `public/images/baby-shower/image-*.jpg`
- [ ] Add corporate photos: `public/images/corporate/image-*.jpg`
- [ ] Add festival photos: `public/images/festival/image-*.jpg`
- [ ] Add haldi/mehendi photos: `public/images/haldi-mehendi/image-*.jpg`
- [ ] Add about page photo: `public/images/about/company-photo.jpg`

---

## 🛠️ Image Optimization Tips

1. **Use Image Optimization Tools**:
   - [TinyPNG](https://tinypng.com/) - Compress images
   - [Squoosh](https://squoosh.app/) - Optimize and convert
   - [ImageOptim](https://imageoptim.com/) - Batch optimization

2. **Convert to WebP** (optional but recommended):
   - Better compression
   - Faster loading
   - Supported by modern browsers

3. **Responsive Images**:
   - Next.js automatically optimizes images
   - Provides multiple sizes for different devices
   - Lazy loads images below the fold

---

## 🎬 Video Optimization Tips

1. **Compression Tools**:
   - [HandBrake](https://handbrake.fr/) - Free video compression
   - [FFmpeg](https://ffmpeg.org/) - Command-line tool
   - Online tools like CloudConvert

2. **Recommended Settings**:
   - Codec: H.264
   - Bitrate: 5-8 Mbps for good quality/size balance
   - Resolution: 1920x1080 (Full HD)
   - Frame rate: 30fps

3. **Create Video Thumbnails**:
   - Add poster images for better loading experience
   - Use first frame or custom thumbnail

---

## 💡 Pro Tips

1. **Progressive Enhancement**: Placeholders ensure the site looks great even without assets
2. **Easy Replacement**: Just add files with correct names - no code changes needed
3. **Category Colors**: Each category has its own gradient color matching your brand
4. **Smooth Animations**: All placeholders include smooth animations
5. **Responsive**: Works perfectly on all device sizes

---

## 🚀 After Adding Assets

1. **Test locally**: Run `npm run dev` and check all pages
2. **Verify videos**: Ensure videos play correctly
3. **Check images**: Verify all images load properly
4. **Optimize**: Compress large files if needed
5. **Deploy**: Your site is ready to go live!

---

**Note**: All placeholders are designed to be beautiful and professional, so your site looks great even before you add your actual assets!










