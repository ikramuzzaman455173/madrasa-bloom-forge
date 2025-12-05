# 🕌 Madrasa Bloom Forge - Bangladesh Science & Technology Madrasa Website

A modern, multilingual educational institution website built with React, TypeScript, and Tailwind CSS. This project integrates traditional Islamic education with modern web technologies.

## ✨ Features

- 🌐 **Multi-language Support**: Full support for Bangla (বাংলা), English, and Arabic (العربية)
- 🎨 **Modern Design**: Beautiful, responsive UI with dark mode support
- 🔄 **RTL Support**: Automatic right-to-left layout for Arabic
- 📱 **Fully Responsive**: Works seamlessly on all devices
- 🎯 **Theme-Aware**: All pages follow consistent design theme
- ⚡ **Fast Performance**: Built with Vite for optimal performance

## 📄 Available Pages

### About Section (9 Pages)
All pages support 3 languages with proper translations:

1. **Institution Overview** (`/about/overview`)
   - General introduction, statistics, history, vision, and achievements

2. **Principal's Message & Biography** (`/about/principal`)
   - Principal's welcome message and detailed biography

3. **Distinctive Features** (`/about/features`)
   - Key features that make the institution unique

4. **Establishment Plan** (`/about/establishment-plan`)
   - Vision, development phases, and future plans

5. **Mission & Objectives** (`/about/mission`)
   - Mission statement and core objectives

6. **Governing Body** (`/about/governing-body`)
   - Leadership team and management structure

7. **Campus Complex** (`/about/complex`)
   - Detailed campus facilities and amenities

8. **Teachers Information** (`/about/teachers`)
   - Faculty departments and teacher profiles

9. **Officers & Staff** (`/about/officers`)
   - Administrative and support staff information

### Other Pages
- **Home** (`/`) - Landing page with hero section
- **Contact** (`/contact`) - Contact form and information

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Design System

### Color Palette
- **Primary**: Green (#009345) - Represents growth and Islamic values
- **Accent**: Magenta (#c2188b) - Modern, vibrant accent color
- **Background**: Adaptive for light/dark modes

### Typography
- Headings: Serif fonts for traditional feel
- Body: Sans-serif for modern readability

## 🌍 Language Support

The website supports three languages with complete translations:

- **English (en)**: Default language
- **বাংলা (bn)**: Bengali translations
- **العربية (ar)**: Arabic with RTL support

### Adding Translations

Edit `src/contexts/LanguageContext.tsx` to add new translation keys.

## 📂 Project Structure

```
src/
├── components/
│   ├── PageLayout.tsx          # Reusable page wrapper
│   ├── Navigation.tsx          # Main navigation
│   ├── Header.tsx              # Top header
│   ├── Footer.tsx              # Footer component
│   └── ...
├── pages/
│   ├── Index.tsx               # Home page
│   ├── Contact.tsx             # Contact page
│   ├── about/                  # About section pages
│   │   ├── Overview.tsx
│   │   ├── Principal.tsx
│   │   ├── Features.tsx
│   │   ├── EstablishmentPlan.tsx
│   │   ├── Mission.tsx
│   │   ├── GoverningBody.tsx
│   │   ├── CampusComplex.tsx
│   │   ├── Teachers.tsx
│   │   └── OfficersStaff.tsx
│   └── NotFound.tsx            # 404 page
├── contexts/
│   └── LanguageContext.tsx     # Translation system
└── index.css                   # Global styles & theme

```

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool
- **Tailwind CSS**: Utility-first CSS
- **React Router**: Client-side routing
- **Lucide React**: Beautiful icons
- **TanStack Query**: Data fetching

## 📝 Page Features

Each About page includes:
- ✅ Multi-language translations (Bangla, English, Arabic)
- ✅ Theme-aware design (light/dark mode)
- ✅ Responsive layout
- ✅ Consistent navigation
- ✅ Beautiful gradients and animations
- ✅ Icon-based visual hierarchy
- ✅ Accessibility features

## 🎯 Development Guidelines

1. **All content must be translatable**: Use `t()` function for all text
2. **Follow theme variables**: Use CSS variables for colors
3. **Responsive first**: Design for mobile, enhance for desktop
4. **Consistent spacing**: Use Tailwind's spacing scale
5. **Accessible**: Ensure proper contrast and semantic HTML

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌙 Dark Mode

The website automatically adapts to system preferences and supports manual toggle through theme variables defined in `index.css`.

## 🔄 Future Enhancements

- [ ] Add remaining sections (Academics, Admission, etc.)
- [ ] Implement admin panel
- [ ] Add authentication
- [ ] Connect to backend API
- [ ] Add image galleries
- [ ] Implement online admission system

## 📞 Support

For any questions or issues, please contact:
- Email: info@madrasa.edu.bd
- Phone: +880 1234-567890

## 📄 License

This project is developed for Bangladesh Science & Technology Madrasa.

---

**Built with ❤️ for modern Islamic education**
