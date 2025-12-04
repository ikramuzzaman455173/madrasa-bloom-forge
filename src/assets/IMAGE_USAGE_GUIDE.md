# Islamic Images Usage Guide

This guide provides information about the Islamic-themed images available in the `src/assets` folder and suggestions for their usage across different sections of the Madrasa Bloom Forge application.

## Available Images

### 1. **quran-study.png**
- **Description**: Students studying the Holy Quran in a traditional Islamic classroom with ornate geometric patterns
- **Best Used For**:
  - Learning/Education sections
  - Quran study programs
  - Academic achievement features
  - Course highlights
- **Suggested Sections**: FeatureSection (Islamic Education), About page, Programs page

### 2. **mosque-architecture.png**
- **Description**: Stunning modern Islamic mosque with beautiful golden domes and minarets during golden hour
- **Best Used For**:
  - Facilities section
  - About Us / Campus tour
  - Infrastructure highlights
  - Hero section backgrounds
- **Suggested Sections**: HeroSection background, FeatureSection (Modern Facilities), Gallery

### 3. **islamic-calligraphy.png**
- **Description**: Elegant "Bismillah" calligraphy with intricate Islamic geometric mandala patterns in teal and gold
- **Best Used For**:
  - Hero section overlays
  - Page headers
  - Decorative banners
  - Section dividers
- **Suggested Sections**: HeroSection, Header backgrounds, Modal overlays

### 4. **islamic-library.png**
- **Description**: Warm Islamic library with bookshelves, Islamic texts, and comfortable reading areas
- **Best Used For**:
  - Library/Resources section
  - Knowledge center features
  - Study facilities
  - Academic resources
- **Suggested Sections**: FeatureSection (Resources), Library page, Facilities section

### 5. **prayer-spirituality.png**
- **Description**: Peaceful prayer mats arranged in rows with beautiful Islamic geometric patterns
- **Best Used For**:
  - Spiritual development section
  - Prayer facilities
  - Islamic values features
  - Character building programs
- **Suggested Sections**: FeatureSection (Holistic Development), Spiritual Programs section

### 6. **students-community.png**
- **Description**: Diverse group of happy Islamic students engaged in collaborative learning
- **Best Used For**:
  - Student life section
  - Community features
  - Testimonials background
  - Co-curricular activities
- **Suggested Sections**: FeatureSection (Community), Student Life page, About page

### 7. **islamic-pattern-bg.png**
- **Description**: Beautiful Islamic geometric pattern with turquoise, emerald green, and gold colors
- **Best Used For**:
  - Background patterns
  - Hero section overlays
  - Section backgrounds
  - Decorative elements
- **Suggested Sections**: Any section as background with opacity, HeroSection

## Implementation Examples

### React/TypeScript Import Example
```typescript
import quranStudy from '@/assets/quran-study.png';
import mosqueArchitecture from '@/assets/mosque-architecture.png';
import islamicCalligraphy from '@/assets/islamic-calligraphy.png';
import islamicLibrary from '@/assets/islamic-library.png';
import prayerSpirituality from '@/assets/prayer-spirituality.png';
import studentsCommunity from '@/assets/students-community.png';
import islamicPatternBg from '@/assets/islamic-pattern-bg.png';
```

### Usage in Components

#### Hero Section with Islamic Pattern Background
```tsx
<div 
  className="hero-section"
  style={{
    backgroundImage: `url(${islamicPatternBg})`,
    backgroundSize: 'cover',
    opacity: 0.1
  }}
>
  {/* Hero content */}
</div>
```

#### Feature Cards with Images
```tsx
<div className="feature-card">
  <img 
    src={quranStudy} 
    alt="Quran Studies Program"
    className="feature-image"
  />
  <h3>Islamic Education</h3>
  <p>Comprehensive Quran and Islamic studies program</p>
</div>
```

#### Background with Overlay
```tsx
<section 
  className="facilities-section"
  style={{
    backgroundImage: `url(${mosqueArchitecture})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
  <div className="overlay">
    {/* Content */}
  </div>
</section>
```

## Color Palette Reference

The images feature these color schemes which can be used for consistency:

- **Primary Colors**: Turquoise (#40E0D0), Emerald Green (#50C878), Gold (#FFD700)
- **Accent Colors**: Deep Teal, Warm Golden tones
- **Background**: Warm lighting with golden hour ambiance

## Recommended CSS Classes

```css
.islamic-image-container {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.islamic-image-container:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.islamic-pattern-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.05;
  pointer-events: none;
}
```

## Accessibility Notes

Always include descriptive alt text for accessibility:

```tsx
<img 
  src={quranStudy} 
  alt="Students studying the Holy Quran in a traditional Islamic classroom"
/>
```

## Performance Tips

1. **Lazy Loading**: Use lazy loading for images below the fold
```tsx
<img src={islamicLibrary} alt="..." loading="lazy" />
```

2. **Responsive Images**: Consider creating multiple sizes for different screen resolutions

3. **Optimization**: The images are already in PNG format. Consider converting to WebP for better performance if needed.

## Future Additions

If you need more images in the future, consider these additional themes:
- Islamic architecture details (arches, domes)
- Arabic calligraphy variations
- Islamic art and patterns
- Student activities and events
- Graduation ceremonies
- Sports and extracurricular activities
- Science and technology labs with Islamic design elements

---

**Last Updated**: December 2025
**Image Count**: 7 images
**Total Size**: ~6.5 MB
