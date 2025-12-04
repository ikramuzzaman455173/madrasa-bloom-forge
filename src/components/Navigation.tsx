import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

type SubMenuItem = {
  label: string;
  link: string;
};

type MenuItem = {
  key: string;
  link?: string;
  submenu?: SubMenuItem[];
};

// ---------------- MENU ITEMS ----------------
const menuItems: MenuItem[] = [
  { key: "home", link: "/" },
  {
    key: "about",
    submenu: [
      { label: "about_overview", link: "/about/overview" },
      { label: "about_principal", link: "/about/principal" },
      { label: "about_features", link: "/about/features" },
      { label: "about_establishmentPlan", link: "/about/establishment-plan" },
      { label: "about_mission", link: "/about/mission" },
      { label: "about_governingBody", link: "/about/governing-body" },
      { label: "about_complex", link: "/about/complex" },
      { label: "about_teachers", link: "/about/teachers" },
      { label: "about_officers", link: "/about/officers" },
    ],
  },
  {
    key: "academics",
    submenu: [
      { label: "ac_classTeachers", link: "/academics/class-teachers" },
      { label: "ac_levels", link: "/academics/levels" },
      { label: "ac_curriculum", link: "/academics/curriculum" },
      { label: "ac_cocurriculum", link: "/academics/co-curriculum" },
      { label: "ac_functions", link: "/academics/functions" },
      { label: "ac_results", link: "/academics/results" },
      { label: "ac_examMethod", link: "/academics/exam-method" },
      { label: "ac_holidayList", link: "/academics/holiday-list" },
      { label: "ac_examRoutine", link: "/academics/exam-routine" },
      { label: "ac_classRoutine", link: "/academics/class-routine" },
    ],
  },
  {
    key: "admission",
    submenu: [
      { label: "admission_time", link: "/admission/time" },
      { label: "admission_test", link: "/admission/test" },
      { label: "admission_procedure", link: "/admission/procedure" },
      { label: "admission_fees", link: "/admission/fees" },
      { label: "admission_terms", link: "/admission/terms" },
    ],
  },
  {
    key: "residential",
    submenu: [
      { label: "res_hostelIntro", link: "/residential/hostel-intro" },
      { label: "res_directors", link: "/residential/directors" },
      { label: "res_rules", link: "/residential/rules" },
      { label: "res_charges", link: "/residential/charges" },
      { label: "res_policies", link: "/residential/policies" },
      { label: "res_dailySchedule", link: "/residential/daily-schedule" },
    ],
  },
  {
    key: "publication",
    submenu: [
      { label: "pub_newBikash", link: "/publication/new-bikash" },
      { label: "pub_eventSchedule", link: "/publication/event-schedule" },
      { label: "pub_studyTour", link: "/publication/study-tour" },
      { label: "pub_yearlyActivity", link: "/publication/yearly-activity" },
      { label: "pub_academicCalendar", link: "/publication/academic-calendar" },
      { label: "pub_sautunNajat", link: "/publication/sautun-najat" },
      { label: "pub_wallMagazine", link: "/publication/wall-magazine" },
      { label: "pub_others", link: "/publication/others" },
    ],
  },
  {
    key: "library",
    submenu: [
      { label: "lib_intro", link: "/library/intro" },
      { label: "lib_catalog", link: "/library/catalog" },
      { label: "lib_policy", link: "/library/policy" },
    ],
  },
  {
    key: "branches",
    submenu: [
      { label: "br_takhssusi", link: "/branches/takhssusi" },
      { label: "br_women", link: "/branches/women" },
      { label: "br_hifz", link: "/branches/hifz" },
      { label: "br_orphanage", link: "/branches/orphanage" },
      { label: "br_kitab", link: "/branches/kitab" },
    ],
  },
  {
    key: "media",
    submenu: [
      { label: "media_photos", link: "/media/photos" },
      { label: "media_videos", link: "/media/videos" },
    ],
  },
  { key: "contact", link: "/contact" },
  {
    key: "login",
    submenu: [
      { label: "login_student", link: "/login/student" },
      { label: "login_teacher", link: "/login/teacher" },
      { label: "login_software", link: "/login/software" },
      { label: "login_admin", link: "/login/admin" },
    ],
  },
];

// ---------------- NAVIGATION COMPONENT ----------------
export const Navigation: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const isActivePath = (path?: string) => {
    if (!path) return false;
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  // 🛠 ROBUST HOVER HANDLING
  const handleMouseEnter = (key: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200); // 200ms delay to allow moving cursor to submenu
  };

  return (
    <nav
      className={`
        sticky top-0 z-50 border-b border-white/10
        transition-all duration-300
        ${scrolled ? "bg-gray-900/95 backdrop-blur-xl shadow-lg py-2" : "bg-gray-900/85 backdrop-blur-md py-3"}
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP BAR */}
        <div className="flex flex-wrap items-center justify-between min-h-[3.5rem] gap-y-2">
          {/* Logo / Title */}
          <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl tracking-tight hover:opacity-90 transition-opacity shrink-0">
            {/* You can add an <img> logo here if needed */}
            <span>Madrasa</span>
          </Link>

          {/* DESKTOP MENU */}
          <div
            className={`hidden lg:flex flex-wrap items-center justify-end gap-1 xl:gap-2 ${isRTL ? "flex-row-reverse" : ""
              }`}
          >
            {menuItems.map((item, index) => {
              const hasDropdown = !!item.submenu;
              const isActive = isActivePath(item.link) || (hasDropdown && item.submenu?.some(sub => isActivePath(sub.link)));

              // Check if it's one of the last 3 items to adjust dropdown position
              const isLastItems = index >= menuItems.length - 3;
              // In LTR: Normal = left-0, Last = right-0
              // In RTL: Normal = right-0, Last = left-0
              const dropdownAlignClass = isRTL
                ? (isLastItems ? "left-0" : "right-0")
                : (isLastItems ? "right-0" : "left-0");

              return (
                <div
                  key={item.key}
                  className="relative group my-1"
                  onMouseEnter={() => hasDropdown && handleMouseEnter(item.key)}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* MAIN ITEM */}
                  {!hasDropdown ? (
                    <Link to={item.link!}>
                      <button
                        className={`
                          px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 whitespace-nowrap
                          ${isActive
                            ? "bg-primary text-white shadow-md"
                            : "text-gray-300 hover:text-white hover:bg-white/10"
                          }
                        `}
                      >
                        {t(item.key)}
                      </button>
                    </Link>
                  ) : (
                    <button
                      className={`
                        px-3 py-2 text-sm font-medium rounded-md
                        flex items-center gap-1 transition-all duration-200 whitespace-nowrap
                        ${activeDropdown === item.key || isActive
                          ? "bg-white/10 text-white"
                          : "text-gray-300 hover:text-white hover:bg-white/10"
                        }
                      `}
                    >
                      {t(item.key)}
                      <ChevronDown
                        className={`
                          w-4 h-4 transition-transform duration-200
                          ${activeDropdown === item.key ? "rotate-180" : ""}
                        `}
                      />
                    </button>
                  )}

                  {/* DESKTOP DROPDOWN */}
                  {hasDropdown && activeDropdown === item.key && (
                    <div
                      className={`
                        absolute top-full mt-1 w-64 rounded-xl shadow-2xl
                        bg-gray-800 border border-white/10
                        z-50 overflow-hidden
                        animate-in fade-in slide-in-from-top-2 duration-200
                        ${dropdownAlignClass}
                      `}
                      onMouseEnter={() => handleMouseEnter(item.key)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="py-2 bg-gray-800">
                        {item.submenu!.map((sub, idx) => (
                          <Link key={idx} to={sub.link}>
                            <div
                              className={`
                                px-4 py-2.5 text-sm cursor-pointer transition-colors
                                flex items-center gap-2
                                ${isActivePath(sub.link)
                                  ? "bg-primary/10 text-primary font-medium border-l-4 border-primary"
                                  : "text-gray-300 hover:bg-white/5 hover:text-white border-l-4 border-transparent"
                                }
                              `}
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

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition active:scale-95"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            lg:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${mobileOpen ? "max-h-[85vh] opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"}
          `}
        >
          <div className="py-2 space-y-1 overflow-y-auto max-h-[80vh] pr-1 custom-scrollbar">
            {menuItems.map((item) => {
              const hasDropdown = !!item.submenu;
              const isOpen = activeDropdown === item.key;
              const isActive = isActivePath(item.link) || (hasDropdown && item.submenu?.some(sub => isActivePath(sub.link)));

              return (
                <div key={item.key} className="rounded-lg overflow-hidden">
                  {/* MAIN ITEM (MOBILE) */}
                  {!hasDropdown ? (
                    <Link to={item.link!}>
                      <div
                        className={`
                          px-4 py-3 rounded-lg text-sm font-medium transition-colors
                          ${isActive
                            ? "bg-primary text-white shadow-sm"
                            : "bg-gray-800/50 text-gray-200 hover:bg-gray-800"
                          }
                        `}
                      >
                        {t(item.key)}
                      </div>
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() =>
                          setActiveDropdown((prev) => (prev === item.key ? null : item.key))
                        }
                        className={`
                          w-full px-4 py-3 rounded-lg text-sm font-medium
                          flex items-center justify-between text-left transition-colors
                          ${isOpen || isActive
                            ? "bg-gray-800 text-white"
                            : "bg-gray-800/50 text-gray-200 hover:bg-gray-800"
                          }
                        `}
                      >
                        <span>{t(item.key)}</span>
                        <ChevronDown
                          className={`
                            w-5 h-5 transition-transform duration-200
                            ${isOpen ? "rotate-180 text-primary" : ""}
                          `}
                        />
                      </button>

                      {/* SUBMENU (MOBILE) */}
                      <div
                        className={`
                          transition-all duration-300 ease-in-out overflow-hidden
                          ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
                        `}
                      >
                        <div className="bg-gray-900/50 mt-1 rounded-lg py-1 space-y-0.5 border-l-2 border-gray-700 ml-4">
                          {item.submenu!.map((sub, idx) => (
                            <Link key={idx} to={sub.link}>
                              <div
                                className={`
                                  px-4 py-2.5 text-sm mx-1 rounded-md transition-colors
                                  ${isActivePath(sub.link)
                                    ? "text-primary font-medium bg-primary/10"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                                  }
                                `}
                              >
                                {t(sub.label)}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

