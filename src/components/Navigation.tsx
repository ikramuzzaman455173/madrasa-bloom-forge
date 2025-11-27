// import { useLanguage } from '@/contexts/LanguageContext';
// import { Menu, X, ChevronDown } from 'lucide-react';
// import { useState } from 'react';
// import { Button } from '@/components/ui/button';

// const menuItems = [
//   { key: 'home', hasDropdown: false },
//   { key: 'about', hasDropdown: true },
//   { key: 'academics', hasDropdown: true },
//   { key: 'admission', hasDropdown: false },
//   { key: 'notice', hasDropdown: false },
//   { key: 'gallery', hasDropdown: false },
//   { key: 'contact', hasDropdown: false },
// ];

// export const Navigation = () => {
//   const { t, isRTL } = useLanguage();
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

//   return (
//     <nav className="bg-gradient-to-r from-primary via-primary-dark to-accent shadow-lg sticky top-0 z-50">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-14">
//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-1 w-full justify-center">
//             {menuItems.map((item) => (
//               <div
//                 key={item.key}
//                 className="relative group"
//                 onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.key)}
//                 onMouseLeave={() => setActiveDropdown(null)}
//               >
//                 <Button
//                   variant="ghost"
//                   className="text-primary-foreground hover:bg-primary-dark hover:text-primary-foreground px-4 py-2 rounded-md transition-all duration-200"
//                 >
//                   {t(item.key)}
//                   {item.hasDropdown && (
//                     <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${activeDropdown === item.key ? 'rotate-180' : ''}`} />
//                   )}
//                 </Button>

//                 {/* Dropdown */}
//                 {item.hasDropdown && activeDropdown === item.key && (
//                   <div className="absolute top-full left-0 mt-0 w-48 bg-card shadow-xl rounded-md overflow-hidden border border-border">
//                     <div className="py-2">
//                       <a href="#" className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
//                         Submenu Item 1
//                       </a>
//                       <a href="#" className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
//                         Submenu Item 2
//                       </a>
//                       <a href="#" className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
//                         Submenu Item 3
//                       </a>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <Button
//             variant="ghost"
//             size="icon"
//             className="md:hidden text-primary-foreground"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </Button>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="md:hidden pb-4 space-y-2">
//             {menuItems.map((item) => (
//               <div key={item.key}>
//                 <Button
//                   variant="ghost"
//                   className="w-full justify-start text-primary-foreground hover:bg-primary-dark hover:text-primary-foreground"
//                 >
//                   {t(item.key)}
//                 </Button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };


import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {Link} from "react-router-dom";

const menuItems = [
  {
    key: "home",
    link: "/",
  },
  {
    key: "about",
    submenu: [
      { label: "history", link: "/about/history" },
      { label: "missionVision", link: "/about/mission-vision" },
      { label: "administration", link: "/about/administration" },
      { label: "faculty", link: "/about/faculty" },
    ],
  },
  {
    key: "academics",
    submenu: [
      { label: "curriculum", link: "/academics/curriculum" },
      { label: "routine", link: "/academics/routine" },
      { label: "departments", link: "/academics/departments" },
      { label: "calendar", link: "/academics/calendar" },
    ],
  },
  {
    key: "admission",
    link: "/admission",
  },
  {
    key: "notice",
    link: "/notice",
  },
  {
    key: "gallery",
    link: "/gallery",
  },
  {
    key: "contact",
    link: "/contact",
  },
];

export const Navigation = () => {
  const { t, isRTL, language } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav
      className="
      sticky top-0 z-50
      bg-gradient-to-r from-primary via-primary-dark to-accent
      shadow-lg border-b border-primary/40
      "
    >
      <div className="container mx-auto px-4">

        {/* TOP ROW */}
        <div className="flex items-center justify-between h-14">

          {/* Desktop Menu */}
          <div
            className={`hidden md:flex items-center space-x-1 w-full justify-center ${
              isRTL ? "space-x-reverse" : ""
            }`}
          >
            {menuItems.map((item) => {
              const hasDropdown = !!item.submenu;

              return (
                <div
                  key={item.key}
                  className="relative group"
                  onMouseEnter={() =>
                    hasDropdown && setActiveDropdown(item.key)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link href={item.link || "#"}>
                    <Button
                      variant="ghost"
                      className="
                      px-4 py-2 rounded-md text-primary-foreground
                      hover:bg-primary/20 hover:text-primary-foreground
                      transition-all duration-200
                      backdrop-blur-sm
                      "
                    >
                      {t(item.key)}

                      {hasDropdown && (
                        <ChevronDown
                          className={`w-4 h-4 ml-1 transition-all duration-300 ${
                            activeDropdown === item.key ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </Button>
                  </Link>

                  {/* DROPDOWN */}
                  {hasDropdown && activeDropdown === item.key && (
                    <div
                      className="
                      absolute top-full left-0 w-56
                      bg-card text-foreground
                      border border-border rounded-md shadow-xl
                      animate-fade-down backdrop-blur-md
                      "
                    >
                      <div className="py-2">
                        {item.submenu.map((sub, i) => (
                          <Link key={i} href={sub.link}>
                            <div
                              className="
                              px-4 py-2 text-sm cursor-pointer
                              hover:bg-primary/20 hover:text-primary
                              transition-colors
                              "
                            >
                              {t(sub.label)}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* MOBILE BTN */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground hover:bg-primary/20"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-slide-down">

            {menuItems.map((item) => {
              const hasDropdown = !!item.submenu;

              return (
                <div key={item.key}>
                  <Button
                    variant="ghost"
                    className="
                    w-full justify-between px-4 py-2
                    text-primary-foreground
                    hover:bg-primary/20 rounded-md
                    "
                    onClick={() =>
                      hasDropdown
                        ? setActiveDropdown(
                            activeDropdown === item.key ? null : item.key
                          )
                        : null
                    }
                  >
                    {t(item.key)}

                    {hasDropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.key ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Button>

                  {/* Mobile submenu */}
                  {hasDropdown && activeDropdown === item.key && (
                    <div className="ml-4 mt-1 space-y-1 animate-fade-down">
                      {item.submenu.map((sub, i) => (
                        <Link key={i} href={sub.link}>
                          <div
                            className="
                            px-4 py-2 text-sm rounded-md
                            text-foreground
                            hover:bg-primary/20 hover:text-primary
                            transition-colors
                            "
                          >
                            {t(sub.label)}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

