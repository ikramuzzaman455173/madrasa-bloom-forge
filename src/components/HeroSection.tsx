// import { useLanguage } from '@/contexts/LanguageContext';
// import { Button } from '@/components/ui/button';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { useState } from 'react';

// export const HeroSection = () => {
// const { t, isRTL } = useLanguage();
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       title: "Welcome to Our Institution",
//       subtitle: "Building Future Leaders Through Knowledge",
//       bgClass: "bg-gradient-to-r from-primary via-primary-dark to-accent",
//     },
//     {
//       title: "Excellence in Education",
//       subtitle: "Combining Traditional Values with Modern Science",
//       bgClass: "bg-gradient-to-r from-accent via-accent-light to-primary",
//     },
//     {
//       title: "Join Our Community",
//       subtitle: "Admission Open for New Academic Year",
//       bgClass: "bg-gradient-to-r from-primary-dark via-accent to-accent-light",
//     },
//   ];

//   const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
//   const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

//   return (
//     <section className="relative h-[400px] md:h-[500px] overflow-hidden">
//       {/* Slides */}
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-700 ${
//             index === currentSlide ? 'opacity-100' : 'opacity-0'
//           }`}
//         >
//           <div className={`${slide.bgClass} h-full flex items-center justify-center`}>
//             <div className="container mx-auto px-4 text-center text-primary-foreground">
//               <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
//                 {slide.title}
//               </h2>
//               <p className="text-xl md:text-2xl mb-8 opacity-90">
//                 {slide.subtitle}
//               </p>
//               <div className="flex gap-4 justify-center">
//                 <Button size="lg" variant="secondary" className="shadow-lg">
//                   Learn More
//                 </Button>
//                 <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-lg">
//                   Apply Now
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* Navigation Arrows */}
//       <Button
//         variant="ghost"
//         size="icon"
//         className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/20 hover:bg-card/40 text-primary-foreground backdrop-blur-sm"
//         onClick={prevSlide}
//       >
//         <ChevronLeft className="w-6 h-6" />
//       </Button>
//       <Button
//         variant="ghost"
//         size="icon"
//         className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/20 hover:bg-card/40 text-primary-foreground backdrop-blur-sm"
//         onClick={nextSlide}
//       >
//         <ChevronRight className="w-6 h-6" />
//       </Button>

//       {/* Slide Indicators */}
//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-3 h-3 rounded-full transition-all ${
//               index === currentSlide ? 'bg-primary-foreground w-8' : 'bg-primary-foreground/40'
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };


// If you're in Next.js, add this at the very top:
// "use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

// 🔥 DIRECT IMPORTS – this makes bundler give real URLs
import hero1 from "../assets/hero-bg-1.jpg";
import hero2 from "../assets/hero-bg-2.jpg";
import hero3 from "../assets/hero-bg-3.jpg";

const slidesData = [
  {
    img: hero1,
    titleKey: "heroSlide1Title",
    subtitleKey: "heroSlide1Subtitle",
  },
  {
    img: hero2,
    titleKey: "heroSlide2Title",
    subtitleKey: "heroSlide2Subtitle",
  },
  {
    img: hero3,
    titleKey: "heroSlide3Title",
    subtitleKey: "heroSlide3Subtitle",
  },
];

export const HeroSection = () => {
  const { t, isRTL } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);

  return (
    <section className="relative h-[420px] md:h-[620px] overflow-hidden rounded-b-xl shadow-lg">
      {/* Slider */}
      <div
        className="flex h-full transition-transform duration-[750ms] ease-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slidesData.map((slide, i) => (
          <div
            key={i}
            className="min-w-full h-full relative"
            style={{
              // ✅ This now uses the imported image (hero1, hero2, hero3)
              backgroundImage: `url(${slide.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

            {/* content */}
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div
                className={`max-w-3xl text-white ${
                  isRTL ? "text-right" : "text-center"
                }`}
              >
                <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
                  {t(slide.titleKey)}
                </h2>

                <p className="text-lg md:text-2xl opacity-90 mb-6">
                  {t(slide.subtitleKey)}
                </p>

                <div
                  className={`flex gap-4 justify-center ${
                    isRTL ? "flex-row-reverse" : ""
                  }`}
                >
                  <Button
                    size="lg"
                    variant="secondary"
                    className="px-8 py-6 text-lg shadow-lg rounded-xl backdrop-blur-md"
                  >
                    {t("learnMore")}
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-black rounded-xl transition shadow-lg"
                  >
                    {t("applyNow")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* nav buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12
          bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-md
          text-white flex items-center justify-center shadow-lg"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12
          bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-md
          text-white flex items-center justify-center shadow-lg"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

      {/* indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slidesData.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`cursor-pointer rounded-full transition-all ${
              i === currentSlide ? "bg-white w-10 h-3" : "bg-white/40 w-3 h-3"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

